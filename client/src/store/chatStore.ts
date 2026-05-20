import { create } from "zustand";

import {
  sendChatMessage,
  getChatHistory,
} from "../services/chatService";

export interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface Conversation {
  id: number;
  title: string;
  messages: ChatMessage[];
}

interface ChatStore {
  conversations: Conversation[];
  activeConversationId: number;
  isTyping: boolean;

  createConversation: () => void;

  setActiveConversation: (
    id: number
  ) => void;

  deleteConversation: (
    id: number
  ) => void;

  renameConversation: (
    id: number,
    title: string
  ) => void;

  sendMessage: (
    content: string,
    file?: File | null
  ) => Promise<void>;

  loadHistory: () => Promise<void>;
}

const getTime = () => {
  return new Date().toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
};

const generateId = () => {
  return Math.floor(
    Math.random() * 100000000
  );
};

const createWelcomeConversation =
  (): Conversation => ({
    id: generateId(),

    title: "New Chat",

    messages: [
      {
        id: generateId(),

        role: "assistant",

        content:
          "Hi 👋 I'm NeuroBiz AI. How can I help grow your business today?",

        timestamp: getTime(),
      },
    ],
  });

export const useChatStore =
  create<ChatStore>((set, get) => ({

    conversations: [
      createWelcomeConversation(),
    ],

    activeConversationId: 0,

    isTyping: false,

    loadHistory: async () => {

      try {

        const history =
          await getChatHistory();

        if (
          !history ||
          history.length === 0
        ) {
          return;
        }

        const formatted: Conversation[] =
          history.map(
            (
              item: any,
              
            ): Conversation => ({

              id: generateId(),

              title:
                item.user_message?.slice(
                  0,
                  30
                ) || "Business Chat",

              messages: [
                {
                  id: generateId(),

                  role: "user",

                  content:
                    item.user_message || "",

                  timestamp: "Now",
                },

                {
                  id: generateId(),

                  role: "assistant",

                  content:
                    item.ai_response || "",

                  timestamp: "Now",
                },
              ],
            })
          );

        const currentActive =
          get()
            .activeConversationId;

        set({
          conversations: [
            ...formatted,
            ...get().conversations,
          ],

          activeConversationId:
            currentActive ||
            formatted[0].id,
        });

      } catch (error) {

        console.error(
          "History load error:",
          error
        );
      }
    },

    createConversation: () => {

      const newConversation =
        createWelcomeConversation();

      set(
        (
          state
        ): Partial<ChatStore> => ({

          conversations: [
            newConversation,
            ...state.conversations,
          ],

          activeConversationId:
            newConversation.id,
        })
      );
    },

    setActiveConversation: (
      id: number
    ) => {

      set({
        activeConversationId: id,
      });
    },

    deleteConversation: (
      id: number
    ) => {

      const updated =
        get().conversations.filter(
          (chat) =>
            chat.id !== id
        );

      set({
        conversations: updated,

        activeConversationId:
          updated[0]?.id || 0,
      });
    },

    renameConversation: (
      id: number,
      title: string
    ) => {

      set(
        (
          state
        ): Partial<ChatStore> => ({

          conversations:
            state.conversations.map(
              (chat) =>
                chat.id === id
                  ? {
                      ...chat,
                      title,
                    }
                  : chat
            ),
        })
      );
    },

    sendMessage: async (
      content: string,
      file?: File | null
    ) => {

      if (!content.trim())
        return;

      let state = get();

      let currentConversation =
        state.conversations.find(
          (c) =>
            c.id ===
            state.activeConversationId
        );

      if (
        !currentConversation
      ) {

        const newConversation =
          createWelcomeConversation();

        set(
          (
            prev
          ): Partial<ChatStore> => ({

            conversations: [
              newConversation,
              ...prev.conversations,
            ],

            activeConversationId:
              newConversation.id,
          })
        );

        state = get();

        currentConversation =
          newConversation;
      }

      const userMessage: ChatMessage =
        {
          id: generateId(),

          role: "user",

          content,

          timestamp:
            getTime(),
        };

      set({
        conversations:
          state.conversations.map(
            (chat) =>
              chat.id ===
              currentConversation.id
                ? {
                    ...chat,

                    messages: [
                      ...chat.messages,
                      userMessage,
                    ],

                    title:
                      chat.title ===
                      "New Chat"
                        ? content.slice(
                            0,
                            30
                          )
                        : chat.title,
                  }
                : chat
          ),

        isTyping: true,
      });

      try {

        const aiResponse =
          await sendChatMessage(
            content,
            file
          );

        const aiMessage: ChatMessage =
          {
            id: generateId(),

            role: "assistant",

            content:
              aiResponse,

            timestamp:
              getTime(),
          };

        const latestState =
          get();

        set({
          conversations:
            latestState.conversations.map(
              (chat) =>
                chat.id ===
                currentConversation.id
                  ? {
                      ...chat,

                      messages: [
                        ...chat.messages,
                        aiMessage,
                      ],
                    }
                  : chat
            ),

          isTyping: false,
        });

      } catch (error) {

        console.error(
          "Chat error:",
          error
        );

        set({
          isTyping: false,
        });
      }
    },
  }));
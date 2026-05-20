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
    content: string
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

export const useChatStore =
  create<ChatStore>((set, get) => ({

    conversations: [
      {
        id: 1,

        title: "New Conversation",

        messages: [
          {
            id: 1,

            role: "assistant",

            content:
              "Hello 👋 I'm NeuroBiz AI. How can I help automate your business today?",

            timestamp: getTime(),
          },
        ],
      },
    ],

    activeConversationId: 1,

    isTyping: false,

    loadHistory: async () => {

      try {

        const history =
          await getChatHistory();

        const formatted =
          history.map(
            (
              item: any,
              index: number
            ) => ({
              id: index + 1,

              title:
                item.user_message.slice(
                  0,
                  30
                ),

              messages: [
                {
                  id:
                    generateId(),

                  role: "user",

                  content:
                    item.user_message,

                  timestamp:
                    "Now",
                },

                {
                  id:
                    generateId(),

                  role:
                    "assistant",

                  content:
                    item.ai_response,

                  timestamp:
                    "Now",
                },
              ],
            })
          );

        if (
          formatted.length > 0
        ) {

          set({
            conversations:
              formatted,

            activeConversationId:
              formatted[0].id,
          });
        }

      } catch (error) {

        console.error(error);
      }
    },

    createConversation: () => {

      const newConversation = {
        id: generateId(),

        title: "Untitled Chat",

        messages: [
          {
            id: generateId(),

            role: "assistant",

            content:
              "Hello 👋 Start a new business conversation with NeuroBiz AI.",

            timestamp: getTime(),
          },
        ],
      };

      set((state) => ({
        conversations: [
          newConversation,
          ...state.conversations,
        ],

        activeConversationId:
          newConversation.id,
      }));
    },

    setActiveConversation: (
      id
    ) => {

      set({
        activeConversationId: id,
      });
    },

    deleteConversation: (
      id
    ) => {

      const state = get();

      const updated =
        state.conversations.filter(
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
      id,
      title
    ) => {

      set((state) => ({
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
      }));
    },

    sendMessage: async (
      content
    ) => {

      if (!content.trim())
        return;

      const state = get();

      const currentConversation =
        state.conversations.find(
          (c) =>
            c.id ===
            state.activeConversationId
        );

      if (
        !currentConversation
      )
        return;

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
                      "Untitled Chat"
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
            content
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

        console.error(error);

        set({
          isTyping: false,
        });
      }
    },
  }));
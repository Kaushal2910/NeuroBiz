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
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
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
              "Hi 👋 I'm NeuroBiz AI. How can I help your business today?",

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

        const formatted: Conversation[] =
          history.map(
            (
              item: any,
              index: number
            ): Conversation => ({

              id: index + 1,

              title:
                item.user_message?.slice(0, 30) ||
                "Business Chat",

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

        if (formatted.length > 0) {

          set({
            conversations: formatted,

            activeConversationId:
              formatted[0].id,
          });
        }

      } catch (error) {

        console.error(
          "History load error:",
          error
        );
      }
    },

    createConversation: () => {

      const newConversation: Conversation = {

        id: generateId(),

        title: "Untitled Chat",

        messages: [
          {
            id: generateId(),

            role: "assistant",

            content:
              "Hi 👋 What business challenge can I help with?",

            timestamp: getTime(),
          },
        ],
      };

      set(
        (state): Partial<ChatStore> => ({

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

      const state = get();

      const updated =
        state.conversations.filter(
          (chat) => chat.id !== id
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
        (state): Partial<ChatStore> => ({

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
      content: string
    ) => {

      if (!content.trim()) return;

      const state = get();

      const currentConversation =
        state.conversations.find(
          (c) =>
            c.id ===
            state.activeConversationId
        );

      if (!currentConversation)
        return;

      const userMessage: ChatMessage = {

        id: generateId(),

        role: "user",

        content,

        timestamp: getTime(),
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

        const aiMessage: ChatMessage = {

          id: generateId(),

          role: "assistant",

          content: aiResponse,

          timestamp: getTime(),
        };

        const latestState = get();

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
import { create } from "zustand";

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
  ) => void;
}

const getTime = () => {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
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

    createConversation: () => {
      const newConversation = {
        id: Date.now(),

        title: "Untitled Chat",

        messages: [],
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

    setActiveConversation: (id) => {
      set({
        activeConversationId: id,
      });
    },

    deleteConversation: (id) => {
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
      id,
      title
    ) => {
      set((state) => ({
        conversations:
          state.conversations.map(
            (chat) =>
              chat.id === id
                ? { ...chat, title }
                : chat
          ),
      }));
    },

    sendMessage: (content) => {
      if (!content.trim()) return;

      const state = get();

      const current =
        state.conversations.find(
          (c) =>
            c.id ===
            state.activeConversationId
        );

      if (!current) return;

      const userMessage: ChatMessage = {
        id: Date.now(),

        role: "user",

        content,

        timestamp: getTime(),
      };

      const updatedMessages = [
        ...current.messages,
        userMessage,
      ];

      set({
        conversations:
          state.conversations.map(
            (chat) =>
              chat.id === current.id
                ? {
                    ...chat,
                    messages:
                      updatedMessages,

                    title:
                      chat.messages.length === 0
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

      setTimeout(() => {
        const aiMessage: ChatMessage = {
          id: Date.now(),

          role: "assistant",

          content: `
### AI Business Insight

NeuroBiz AI analyzed your request and generated intelligent recommendations.

• Automate workflows  
• Improve customer engagement  
• Increase lead conversion  
• Generate AI analytics  
• Streamline operations

\`\`\`python
def automate_business():
    improve_efficiency()
    generate_ai_insights()
\`\`\`
          `,

          timestamp: getTime(),
        };

        const latestState = get();

        set({
          conversations:
            latestState.conversations.map(
              (chat) =>
                chat.id === current.id
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
      }, 2000);
    },
  }));
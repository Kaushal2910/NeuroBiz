import { create } from "zustand";

export interface ChatMessage {
  id: string;

  role: "user" | "assistant";

  content: string;

  timestamp: string;
}

export interface Conversation {
  id: string;

  title: string;

  messages: ChatMessage[];
}

interface ChatStore {
  conversations: Conversation[];

  activeConversationId: string;

  isTyping: boolean;

  createConversation: () => void;

  setActiveConversation: (
    id: string
  ) => void;

  deleteConversation: (
    id: string
  ) => void;

  renameConversation: (
    id: string,
    title: string
  ) => void;

  sendMessage: (
    content: string
  ) => void;
}

const generateId = () => {
  return crypto.randomUUID();
};

const getTime = () => {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const initialConversationId =
  generateId();

export const useChatStore =
  create<ChatStore>((set, get) => ({
    conversations: [
      {
        id: initialConversationId,

        title: "New Conversation",

        messages: [
          {
            id: generateId(),

            role: "assistant",

            content:
              "Hello 👋 I'm NeuroBiz AI. How can I help automate your business today?",

            timestamp: getTime(),
          },
        ],
      },
    ],

    activeConversationId:
      initialConversationId,

    isTyping: false,

    createConversation: () => {
      const newConversationId =
        generateId();

      const newConversation: Conversation =
        {
          id: newConversationId,

          title: "Untitled Chat",

          messages: [
            {
              id: generateId(),

              role: "assistant",

              content:
                "Hello 👋 Start a new conversation with NeuroBiz AI.",

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
          newConversationId,
      }));
    },

    setActiveConversation: (
      id
    ) => {
      set({
        activeConversationId: id,
      });
    },

    deleteConversation: (id) => {
      const state = get();

      const updatedConversations =
        state.conversations.filter(
          (chat) => chat.id !== id
        );

      set({
        conversations:
          updatedConversations,

        activeConversationId:
          updatedConversations[0]?.id ||
          "",
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

    sendMessage: (content) => {
      if (!content.trim()) return;

      const state = get();

      const currentConversation =
        state.conversations.find(
          (chat) =>
            chat.id ===
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

      const updatedMessages = [
        ...currentConversation.messages,
        userMessage,
      ];

      set({
        conversations:
          state.conversations.map(
            (chat) =>
              chat.id ===
              currentConversation.id
                ? {
                    ...chat,

                    messages:
                      updatedMessages,

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

      setTimeout(() => {
        const aiMessage: ChatMessage = {
          id: generateId(),

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
      }, 2000);
    },
  }));
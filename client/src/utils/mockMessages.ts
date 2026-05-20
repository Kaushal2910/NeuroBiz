import  type { ChatMessage } from "../types/chat";

export const mockMessages: ChatMessage[] = [
  {
    id: 1,
    role: "user",
    content:
      "How can AI automate customer engagement workflows?",

    timestamp: "10:21 AM",
  },

  {
    id: 2,
    role: "assistant",

    content: `
AI can automate customer engagement by:

• Handling repetitive support queries  
• Generating intelligent responses  
• Analyzing customer behavior  
• Improving lead conversion  
• Providing 24/7 support

### Example Workflow

\`\`\`python
def automate_support(user_query):
    ai_response = generate_ai_response(user_query)

    log_interaction(user_query)

    return ai_response
\`\`\`

This helps businesses scale operations efficiently.
    `,

    timestamp: "10:22 AM",
  },

  {
    id: 3,
    role: "user",

    content:
      "Can the platform also analyze lead performance?",

    timestamp: "10:23 AM",
  },
];
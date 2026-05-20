//C:\Users\sonaw\OneDrive\Desktop\NeuroBiz\client\src\pages\ChatPage.tsx

import { useRef, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ChatWindow from "../components/chat/ChatWindow";

import { useChatStore } from "../store/chatStore";

const ChatPage = () => {
  const [input, setInput] = useState("");

  const textareaRef =
    useRef<HTMLTextAreaElement | null>(null);

  const {
    sendMessage,
    isTyping,
  } = useChatStore();

  const handleSendMessage = () => {
    if (!input.trim()) return;

    sendMessage(input.trim());

    setInput("");

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height =
        "auto";
    }
  };

  return (
    <DashboardLayout>

      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">

        {/* HEADER */}
        <div
          className="
            h-20
            border-b
            border-white/10
            px-8
            flex
            items-center
            justify-between
            bg-black/20
            backdrop-blur-xl
            shrink-0
          "
        >

          {/* LEFT */}
          <div>

            <h2 className="text-2xl font-bold">
              AI Assistant
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Real-time intelligent business automation
            </p>

          </div>

          {/* RIGHT */}
          <div
            className="
              px-4
              py-2
              rounded-2xl
              border
              border-green-500/20
              bg-green-500/10
              text-green-400
              text-sm
            "
          >

            AI Online

          </div>

        </div>

        {/* CHAT WINDOW */}
        <ChatWindow />
        

        {/* INPUT AREA */}
        <div className="p-6 border-t border-white/10 shrink-0">

          <div
            className="
              max-w-4xl
              mx-auto
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-4
              flex
              items-end
              gap-4
            "
          >

            {/* TEXTAREA */}
            <textarea
              ref={textareaRef}
              placeholder="Ask NeuroBiz AI anything..."
              rows={1}
              value={input}
              disabled={isTyping}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onInput={(e) => {
                e.currentTarget.style.height =
                  "auto";

                e.currentTarget.style.height =
                  e.currentTarget.scrollHeight +
                  "px";
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !e.shiftKey
                ) {
                  e.preventDefault();

                  handleSendMessage();
                }
              }}
              className="
                flex-1
                bg-transparent
                resize-none
                outline-none
                text-white
                placeholder:text-gray-500
                max-h-[200px]
                custom-scrollbar
                disabled:opacity-50
              "
            />

            {/* BUTTON */}
            <button
              onClick={handleSendMessage}
              disabled={isTyping}
              className="
                px-6
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                font-medium
                hover:scale-[1.02]
                transition-all
                duration-300
                disabled:opacity-50
                disabled:hover:scale-100
              "
            >

              {isTyping ? "Thinking..." : "Send"}

            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default ChatPage;
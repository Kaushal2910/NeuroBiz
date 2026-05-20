import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ChatWindow from "../components/chat/ChatWindow";

import { useChatStore } from "../store/chatStore";

const ChatPage = () => {
  const [input, setInput] =
    useState("");

  const { sendMessage } =
    useChatStore();

  return (
    <DashboardLayout>

      <div className="h-full flex flex-col">

        {/* HEADER */}
        <div
          className="
            h-20
            shrink-0
            border-b
            border-white/10
            px-8
            flex
            items-center
            justify-between
            bg-black/20
            backdrop-blur-xl
          "
        >

          <div>

            <h2 className="text-2xl font-bold">
              AI Assistant
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Real-time intelligent business automation
            </p>

          </div>

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

        {/* CHAT */}
        <div className="flex-1 overflow-hidden">

          <ChatWindow />

        </div>

        {/* INPUT */}
        <div
          className="
            shrink-0
            p-6
            border-t
            border-white/10
            bg-background
          "
        >

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

            <textarea
              placeholder="Ask NeuroBiz AI anything..."
              rows={1}
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onInput={(e) => {
                const target =
                  e.currentTarget;

                target.style.height =
                  "24px";

                target.style.height =
                  target.scrollHeight +
                  "px";
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !e.shiftKey
                ) {
                  e.preventDefault();

                  sendMessage(input);

                  setInput("");
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
              "
            />

            <button
              onClick={() => {
                sendMessage(input);

                setInput("");
              }}
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
              "
            >

              Send

            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default ChatPage;
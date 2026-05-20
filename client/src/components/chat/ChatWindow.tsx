//C:\Users\sonaw\OneDrive\Desktop\NeuroBiz\client\src\components\chat\ChatWindow.tsx

import { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";

import TypingIndicator from "./TypingIndicator";

import { useChatStore } from "../../store/chatStore";

const ChatWindow = () => {
  const {
    conversations,
    activeConversationId,
    isTyping,
  } = useChatStore();

  const currentConversation =
    conversations.find(
      (c) =>
        c.id === activeConversationId
    );

  const bottomRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [currentConversation, isTyping]);

  return (
    <div className="h-full overflow-y-auto px-6 py-10 custom-scrollbar ">
     

      <div className="max-w-5xl mx-auto space-y-8">

        {currentConversation?.messages.map(
          (message) => (

            <MessageBubble
              key={message.id}
              role={message.role}
              content={message.content}
              timestamp={
                message.timestamp
              }
            />

          )
        )}

        {isTyping && (

          <div className="flex gap-4">

            <div
              className="
                w-11
                h-11
                rounded-2xl
                bg-white/10
                border
                border-white/10
                flex
                items-center
                justify-center
              "
            >

              AI

            </div>

            <TypingIndicator />

          </div>

        )}

        <div ref={bottomRef} />

      </div>

    </div>
  );
};

export default ChatWindow;
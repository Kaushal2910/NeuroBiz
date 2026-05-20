import { Bot } from "lucide-react";

import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
}

const MessageBubble = ({
  role,
  content,
  timestamp,
}: Props) => {

  const isUser =
    role === "user";

  return (

    <div
      className={`
        flex
        w-full
        ${
          isUser
            ? "justify-end"
            : "justify-start"
        }
      `}
    >

      <div
        className={`
          flex
          gap-4
          w-full
          max-w-4xl
          ${
            isUser
              ? "flex-row-reverse"
              : ""
          }
        `}
      >

        {/* Avatar */}
        <div
          className={`
            w-11
            h-11
            rounded-2xl
            flex
            items-center
            justify-center
            shrink-0
            ${
              isUser
                ? `
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-600
                `
                : `
                  bg-white/10
                  border
                  border-white/10
                `
            }
          `}
        >

          {isUser ? (
            <span className="font-bold">
              K
            </span>
          ) : (
            <Bot size={18} />
          )}

        </div>

        {/* Message Area */}
        <div className="flex-1 min-w-0">

          {/* Message Bubble */}
          <div
            className={`
              rounded-[28px]
              px-6
              py-5
              backdrop-blur-xl
              border
              transition-all
              duration-300
              whitespace-pre-wrap
              break-words
              overflow-visible
              ${
                isUser
                  ? `
                    bg-gradient-to-r
                    from-cyan-500
                    to-purple-600
                    border-transparent
                  `
                  : `
                    bg-white/5
                    border-white/10
                  `
              }
            `}
          >

            {isUser ? (

              <p
                className="
                  text-[15px]
                  leading-7
                  whitespace-pre-wrap
                  break-words
                "
              >

                {content}

              </p>

            ) : (

              <div
                className="
                  prose
                  prose-invert
                  max-w-none
                  whitespace-pre-wrap
                  break-words
                "
              >

                <ReactMarkdown
                  components={{

                    code({
                      inline,
                      className,
                      children,
                      ...props
                    }: any) {

                      const match =
                        /language-(\w+)/.exec(
                          className || ""
                        );

                      return !inline && match ? (

                        <SyntaxHighlighter
                          style={atomDark}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{
                            borderRadius: "16px",
                            padding: "20px",
                            background:
                              "rgba(0,0,0,0.4)",
                            overflowX: "auto",
                          }}
                          {...props}
                        >

                          {String(
                            children
                          ).replace(
                            /\n$/,
                            ""
                          )}

                        </SyntaxHighlighter>

                      ) : (

                        <code
                          className="
                            bg-black/40
                            px-2
                            py-1
                            rounded
                            break-words
                          "
                          {...props}
                        >

                          {children}

                        </code>

                      );
                    },
                  }}
                >

                  {content}

                </ReactMarkdown>

              </div>

            )}

          </div>

          {/* Timestamp */}
          {timestamp && (

            <p
              className={`
                mt-2
                text-xs
                text-gray-500
                ${
                  isUser
                    ? "text-right"
                    : ""
                }
              `}
            >

              {timestamp}

            </p>

          )}

        </div>

      </div>

    </div>
  );
};

export default MessageBubble;
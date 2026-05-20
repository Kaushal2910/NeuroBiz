import { useState } from "react";

import {
  Plus,
  MessageSquare,
  Trash2,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Pencil,
} from "lucide-react";

import { useSidebarStore } from "../../store/sidebarStore";
import { useChatStore } from "../../store/chatStore";

const Sidebar = () => {
  const {
    collapsed,
    toggleSidebar,
  } = useSidebarStore();

  const {
    conversations,
    activeConversationId,
    setActiveConversation,
    createConversation,
    deleteConversation,
    renameConversation,
  } = useChatStore();

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [editValue, setEditValue] =
    useState("");

  const handleRename = (id: string) => {
    renameConversation(
      id,
      editValue.trim() || "Untitled Chat"
    );

    setEditingId(null);
  };

  return (
    <aside
      className={`
        hidden
        md:flex
        flex-col
        ${
          collapsed
            ? "w-[110px]"
            : "w-[320px]"
        }
        h-screen
        shrink-0
        border-r
        border-white/10
        bg-black/20
        backdrop-blur-2xl
        transition-all
        duration-300
      `}
    >

      {/* TOP */}
      <div className="p-5 pt-4 pb-3 shrink-0">

        {/* LOGO */}
        <div>

          <h2 className="text-3xl font-bold gradient-text">
            NeuroBiz AI
          </h2>

          {!collapsed && (
            <p className="mt-2 text-sm text-gray-400">
              AI Business Operations Platform
            </p>
          )}

        </div>

        {/* COLLAPSE */}
        <button
          onClick={toggleSidebar}
          className="
            mt-3
            w-full
            flex
            items-center
            justify-center
            py-1
            rounded-2xl
            border
            border-white/10
            bg-white/5
            hover:bg-white/10
            transition-all
          "
        >

          {collapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}

        </button>

        {/* NEW CHAT */}
        <button
          onClick={() => {
            createConversation();
          }}
          className="
            mt-3
            w-full
            flex
            items-center
            justify-center
            gap-3
            py-2
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-purple-600
            font-medium
            hover:scale-[1.02]
            transition-all
          "
        >

          <Plus size={20} />

          {!collapsed && (
            <span>
              New Chat
            </span>
          )}

        </button>

        {/* SEARCH */}
        {!collapsed && (

          <div
            className="
              mt-3
              flex
              items-center
              gap-3
              px-4
              py-1.5
              rounded-2xl
              border
              border-white/10
              bg-white/5
            "
          >

            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              placeholder="Search analyses..."
              className="
                w-full
                bg-transparent
                outline-none
                text-sm
                placeholder:text-gray-500
              "
            />

          </div>

        )}

      </div>

      {/* CHAT LIST */}
      <div
        className="
          flex-1
          overflow-y-auto
          px-5
          pb-5
          custom-scrollbar
        "
      >

        {!collapsed && (
          <div className="mb-4">

            <p className="text-xs uppercase text-gray-500 tracking-wider">
              
            </p>

            <p className="mt-1 text-xs text-gray-600">
              
            </p>

          </div>
        )}

        <div className="space-y-3">

          {conversations.map((chat) => (

            <div
              key={chat.id}
              onClick={() =>
                setActiveConversation(chat.id)
              }
              className={`
                group
                flex
                items-center
                justify-between
                gap-3
                px-4
                py-4
                rounded-2xl
                border
                cursor-pointer
                transition-all

                ${
                  activeConversationId ===
                  chat.id
                    ? `
                      bg-gradient-to-r
                      from-cyan-500/20
                      to-purple-500/20
                      border-cyan-500/20
                    `
                    : `
                      bg-white/5
                      border-white/10
                      hover:bg-white/10
                    `
                }
              `}
            >

              {/* LEFT */}
              <div className="flex items-center gap-3 min-w-0 flex-1">

                <MessageSquare
                  size={18}
                  className="
                    text-cyan-400
                    shrink-0
                  "
                />

                {!collapsed && (

                  <div className="min-w-0 w-full">

                    {editingId ===
                    chat.id ? (

                      <input
                        autoFocus
                        value={editValue}
                        onChange={(e) =>
                          setEditValue(
                            e.target.value
                          )
                        }
                        onBlur={() =>
                          handleRename(chat.id)
                        }
                        onClick={(e) =>
                          e.stopPropagation()
                        }
                        onKeyDown={(e) => {

                          if (
                            e.key === "Enter"
                          ) {
                            handleRename(
                              chat.id
                            );
                          }

                          if (
                            e.key === "Escape"
                          ) {
                            setEditingId(
                              null
                            );
                          }

                        }}
                        className="
                          w-full
                          bg-transparent
                          outline-none
                          text-sm
                          text-white
                        "
                      />

                    ) : (

                      <>
                        <p className="truncate text-sm font-medium">
                          {chat.title}
                        </p>

                        
                      </>

                    )}

                  </div>

                )}

              </div>

              {/* ACTIONS */}
              {!collapsed && (

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                  "
                >

                  {/* RENAME */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      setEditingId(
                        chat.id
                      );

                      setEditValue(
                        chat.title
                      );
                    }}
                  >

                    <Pencil
                      size={15}
                      className="
                        text-gray-400
                        hover:text-cyan-400
                        transition-all
                      "
                    />

                  </button>

                  {/* DELETE */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      deleteConversation(
                        chat.id
                      );
                    }}
                  >

                    <Trash2
                      size={16}
                      className="
                        text-gray-400
                        hover:text-red-400
                        transition-all
                      "
                    />

                  </button>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

      {/* BOTTOM */}
      <div className="p-5 shrink-0">

        <div
          className="
            p-4
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                flex
                items-center
                justify-center
                font-bold
                shrink-0
              "
            >

              K

            </div>

            {!collapsed && (

              <div>

                <h4 className="font-medium">
                  Kaushal
                </h4>

                <p className="text-sm text-gray-400">
                  Premium Account
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;
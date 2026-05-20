import {
  MessageSquare,
  Plus,
  Pencil,
  Trash2,
  PanelLeftClose,
  PanelLeftOpen,
  LayoutDashboard,
  Users,
  LogOut,
  Bot,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import { useChatStore } from "../../store/chatStore";

const Sidebar = () => {

  const navigate =
    useNavigate();

  const [collapsed, setCollapsed] =
    useState(false);

  const {
    conversations,
    activeConversationId,
    setActiveConversation,
    createConversation,
    deleteConversation,
    renameConversation,
  } = useChatStore();

  const navItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },

    {
      label: "AI Assistant",
      icon: Bot,
      path: "/chat",
    },

    {
      label: "Leads",
      icon: Users,
      path: "/leads",
    },
  ];

  return (
    <aside
      className={`
        h-screen
        border-r
        border-white/10
        bg-black/20
        backdrop-blur-xl
        flex
        flex-col
        transition-all
        duration-300
        ${
          collapsed
            ? "w-24"
            : "w-80"
        }
      `}
    >

      {/* TOP */}
      <div className="p-5 border-b border-white/10">

        <div className="flex items-center justify-between">

          {!collapsed && (

            <div>

              <h1 className="text-2xl font-bold gradient-text">

                NeuroBiz AI

              </h1>

              <p className="text-xs text-gray-400 mt-1">

                Business Automation Platform

              </p>

            </div>
          )}

          <button
            onClick={() =>
              setCollapsed(
                !collapsed
              )
            }
            className="
              w-10
              h-10
              rounded-xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-white/10
              transition-all
            "
          >

            {collapsed ? (
              <PanelLeftOpen size={18} />
            ) : (
              <PanelLeftClose size={18} />
            )}

          </button>

        </div>

        {/* NEW CHAT */}
        <button
          onClick={createConversation}
          className="
            mt-5
            w-full
            flex
            items-center
            justify-center
            gap-3
            py-4
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

          <Plus size={18} />

          {!collapsed && (
            <span>
              New Chat
            </span>
          )}

        </button>

      </div>

      {/* NAVIGATION */}
      <div className="px-4 py-4 space-y-2 border-b border-white/10">

        {navItems.map(
          (item, index) => {

            const Icon =
              item.icon;

            return (

              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-2xl
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-white/10 border border-white/10"
                      : "hover:bg-white/5"
                  }
                  `
                }
              >

                <Icon size={20} />

                {!collapsed && (
                  <span>

                    {item.label}

                  </span>
                )}

              </NavLink>
            );
          }
        )}

      </div>

      {/* CHAT LIST */}
      <div
        className="
          flex-1
          overflow-y-auto
          custom-scrollbar
          p-4
          space-y-3
        "
      >

        {!collapsed && (

          <p className="text-xs text-gray-500 px-2 mb-3">

            Recent Conversations

          </p>
        )}

        {conversations.map(
          (chat) => (

            <div
              key={chat.id}
              className={`
                group
                rounded-2xl
                border
                transition-all
                duration-300
                cursor-pointer

                ${
                  activeConversationId ===
                  chat.id
                    ? "border-cyan-500/30 bg-cyan-500/10"
                    : "border-white/5 bg-white/[0.03] hover:bg-white/[0.06]"
                }
              `}
            >

              <div
                onClick={() =>
                  setActiveConversation(
                    chat.id
                  )
                }
                className="
                  p-4
                  flex
                  items-start
                  justify-between
                  gap-3
                "
              >

                <div className="flex gap-3">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-purple-600
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >

                    <MessageSquare
                      size={16}
                    />

                  </div>

                  {!collapsed && (

                    <div>

                      <h3
                        className="
                          text-sm
                          font-medium
                          line-clamp-1
                        "
                      >

                        {chat.title}

                      </h3>

                      <p
                        className="
                          text-xs
                          text-gray-500
                          mt-1
                        "
                      >

                        {
                          chat.messages
                            .length
                        }{" "}
                        messages

                      </p>

                    </div>
                  )}

                </div>

                {!collapsed && (

                  <div
                    className="
                      flex
                      gap-2
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                    "
                  >

                    <button
                      onClick={(e) => {

                        e.stopPropagation();

                        const newTitle =
                          prompt(
                            "Rename chat"
                          );

                        if (
                          newTitle
                        ) {

                          renameConversation(
                            chat.id,
                            newTitle
                          );
                        }
                      }}
                      className="
                        w-8
                        h-8
                        rounded-lg
                        hover:bg-white/10
                        flex
                        items-center
                        justify-center
                      "
                    >

                      <Pencil
                        size={14}
                      />

                    </button>

                    <button
                      onClick={(e) => {

                        e.stopPropagation();

                        deleteConversation(
                          chat.id
                        );
                      }}
                      className="
                        w-8
                        h-8
                        rounded-lg
                        hover:bg-red-500/10
                        text-red-400
                        flex
                        items-center
                        justify-center
                      "
                    >

                      <Trash2
                        size={14}
                      />

                    </button>

                  </div>
                )}

              </div>

            </div>
          )
        )}

      </div>

      {/* LOGOUT */}
      <div className="p-4 border-t border-white/10">

        <button
          onClick={() => {

            localStorage.removeItem(
              "isAuth"
            );

            navigate("/login");
          }}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            py-4
            rounded-2xl
            bg-red-500/10
            text-red-400
            hover:bg-red-500/20
            transition-all
          "
        >

          <LogOut size={18} />

          {!collapsed && (
            <span>
              Logout
            </span>
          )}

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;
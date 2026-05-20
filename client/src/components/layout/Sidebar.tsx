//C:\Users\sonaw\OneDrive\Desktop\NeuroBiz\client\src\components\layout\Sidebar.tsx
import {
  Plus,
  MessageSquare,
  Settings,
  LayoutDashboard,
  Trash2,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
} from "lucide-react";

import { useSidebarStore } from "../../store/sidebarStore";

import { useChatStore } from "../../store/chatStore";
import { useEffect, useRef } from "react";


const Sidebar = () => {
  const { collapsed, toggleSidebar } =
    useSidebarStore();
  
  const {
    conversations,
    activeConversationId,
    setActiveConversation,
    createConversation,
    deleteConversation,
  } = useChatStore();


  return (
    <aside
      className={`
        hidden
        md:flex
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
        flex-col
        p-5
        transition-all
        duration-500
      `}


    >

      {/* LOGO */}
      <div>

        <h2 className="text-3xl font-bold gradient-text">
          NeuroBiz AI
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          {!collapsed &&
            "AI Business Platform"}
        </p>

      </div>

      {/* COLLAPSE BUTTON */}
      <button
        onClick={toggleSidebar}
        className="
          mt-6
          w-full
          flex
          items-center
          justify-center
          py-3
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
        onClick={createConversation}
        className="
          mt-8
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
          transition-all
          duration-300
          hover:scale-[1.02]
        "
      >

        <Plus size={20} />

        {!collapsed && "New Chat"}

      </button>

      {/* SEARCH */}
      {!collapsed && (

        <div
          className="
            mt-5
            flex
            items-center
            gap-3
            px-4
            py-3
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
            placeholder="Search chats..."
            className="
              bg-transparent
              outline-none
              text-sm
              placeholder:text-gray-500
              w-full
            "
          />

        </div>

      )}

      {/* NAVIGATION */}
      <div className="mt-10">

        {!collapsed && (
          <p className="text-xs uppercase text-gray-500 tracking-wider mb-4">

            Navigation

          </p>
        )}

        <div className="space-y-3">

          <button
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-2xl
              bg-white/5
              border
              border-white/10
              hover:bg-white/10
              transition-all
            "
          >

            <LayoutDashboard size={18} />

            {!collapsed && "Dashboard"}

          </button>

          <button
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-2xl
              bg-white/5
              border
              border-white/10
              hover:bg-white/10
              transition-all
            "
          >

            <Settings size={18} />

            {!collapsed && "Settings"}

          </button>

        </div>

      </div>

      {/* CHAT HISTORY */}
      <div className="mt-10 flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-1">

        {!collapsed && (
          <p className="text-xs uppercase text-gray-500 tracking-wider mb-4">

            Recent Chats

          </p>
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
      transition-all
      cursor-pointer

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

    <div className="flex items-center gap-3 min-w-0">

      <MessageSquare
        size={18}
        className="text-cyan-400 shrink-0"
      />

      {!collapsed && (

        <p className="truncate text-sm">
          {chat.title}
        </p>

      )}

    </div>

    {!collapsed && (

      <button
        onClick={(e) => {
          e.stopPropagation();

          deleteConversation(chat.id);
        }}
        className="
          opacity-0
          group-hover:opacity-100
          transition-all
        "
      >

        <Trash2
          size={16}
          className="
            text-gray-400
            hover:text-red-400
          "
        />

      </button>

    )}

  </div>

))}

        </div>

      </div>

      {/* PROFILE */}
      <div
        className={`
          mt-6
          p-4
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          transition-all
          duration-300
        `}
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

    </aside>
  );
};

export default Sidebar;
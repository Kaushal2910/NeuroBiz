import {
  BarChart3,
  Bot,
  Briefcase,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

import { useChatStore } from "../../store/chatStore";

const actions = [
  {
    icon: TrendingUp,

    title: "Improve Sales Funnel",

    description:
      "Analyze and optimize lead conversion strategies.",

    prompt:
      "Analyze my sales funnel and suggest ways to improve lead conversion and customer engagement.",
  },

  {
    icon: Workflow,

    title: "Automate Workflows",

    description:
      "Generate AI-powered automation ideas.",

    prompt:
      "Suggest automation workflows that can reduce repetitive business operations and improve efficiency.",
  },

  {
    icon: Users,

    title: "Customer Retention",

    description:
      "Improve engagement and retention metrics.",

    prompt:
      "Generate strategies to improve customer retention and long-term engagement.",
  },

  {
    icon: Briefcase,

    title: "Business Strategy",

    description:
      "Generate growth-focused business recommendations.",

    prompt:
      "Generate an AI-powered business growth strategy for improving scalability and operational efficiency.",
  },

  {
    icon: Bot,

    title: "AI Support Automation",

    description:
      "Automate repetitive support operations.",

    prompt:
      "How can AI automate customer support workflows and reduce support costs?",
  },

  {
    icon: BarChart3,

    title: "KPI Analytics",

    description:
      "Track and improve business performance metrics.",

    prompt:
      "Suggest important KPIs to track business growth, operational efficiency, and customer performance.",
  },
];

const QuickActions = () => {
  const { sendMessage } =
    useChatStore();

  return (
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-12">

        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            text-cyan-300
            text-sm
            backdrop-blur-xl
          "
        >

          <Bot size={16} />

          AI Business Assistant

        </div>

        <h1 className="mt-6 text-5xl font-bold leading-tight">

          Business
          <span className="gradient-text">
            {" "}Optimization AI
          </span>

        </h1>

        <p
          className="
            mt-5
            text-gray-400
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >

          Analyze workflows, automate operations,
          improve customer engagement, and generate
          intelligent AI-powered business insights.

        </p>

      </div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >

        {actions.map((action, index) => {
          const Icon = action.icon;

          return (

            <button
              key={index}
              onClick={() =>
                sendMessage(action.prompt)
              }
              className="
                group
                relative
                overflow-hidden
                text-left
                p-6
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                hover:bg-white/10
                hover:border-cyan-500/20
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-br
                  from-cyan-500/5
                  to-purple-500/10
                "
              />

              {/* ICON */}
              <div
                className="
                  relative
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-600
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >

                <Icon size={26} />

              </div>

              {/* CONTENT */}
              <div className="relative">

                <h3 className="mt-6 text-xl font-semibold">

                  {action.title}

                </h3>

                <p
                  className="
                    mt-3
                    text-gray-400
                    leading-relaxed
                    text-sm
                  "
                >

                  {action.description}

                </p>

              </div>

            </button>

          );
        })}

      </div>

    </div>
  );
};

export default QuickActions;
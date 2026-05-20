import { useEffect, useState } from "react";

import {
  MessageSquare,
  Users,
  Activity,
  ShieldCheck,
} from "lucide-react";

import { getDashboardStats } from "../services/dashboardService";

const DashboardPage = () => {

  const [stats, setStats] =
    useState<any>(null);

  useEffect(() => {

    const fetchStats = async () => {

      try {

        const data =
          await getDashboardStats();

        setStats(data);

      } catch (error) {

        console.error(error);

      }
    };

    fetchStats();

  }, []);

  const cards = [
    {
      title: "Total Chats",

      value:
        stats?.total_chats || 0,

      icon: MessageSquare,
    },

    {
      title: "Total Leads",

      value:
        stats?.total_leads || 0,

      icon: Users,
    },

    {
      title: "AI Requests",

      value:
        stats?.ai_requests || 0,

      icon: Activity,
    },

    {
      title: "System Status",

      value:
        stats?.system_status ||
        "Loading",

      icon: ShieldCheck,
    },
  ];

  return (
    <div className="p-6">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">

          Dashboard

        </h1>

        <p className="text-gray-400 mt-2">

          Real-time business automation insights.

        </p>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >

        {cards.map((card, index) => {

          const Icon = card.icon;

          return (

            <div
              key={index}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-600
                  flex
                  items-center
                  justify-center
                "
              >

                <Icon size={24} />

              </div>

              <h2 className="mt-6 text-gray-400">

                {card.title}

              </h2>

              <p className="mt-2 text-4xl font-bold">

                {card.value}

              </p>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default DashboardPage;
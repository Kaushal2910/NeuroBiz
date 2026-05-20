import {
  BarChart3,
  TrendingUp,
  Users,
  BrainCircuit,
} from "lucide-react";

import Container from "../common/Container";
import GlassCard from "../common/GlassCard";
import FadeIn from "../common/FadeIn";
import FloatingElement from "../common/FloatingElement";

const DashboardPreview = () => {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />

      <Container
        className="
          relative
          z-10
          grid
          lg:grid-cols-2
          gap-20
          items-center
        "
      >

        {/* LEFT CONTENT */}
        <FloatingElement>

          <GlassCard
            className="
              p-8
              rounded-[32px]
              overflow-hidden
              relative
            "
          >

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/10" />

            {/* HEADER */}
            <div className="relative flex items-center justify-between mb-10">

              <div>

                <p className="text-sm text-gray-400">
                  Business Dashboard
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  Analytics Overview
                </h3>

              </div>

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

                <BarChart3 className="text-white" />

              </div>

            </div>

            {/* STATS GRID */}
            <div className="relative grid grid-cols-2 gap-5">

              {[
                {
                  title: "Active Leads",
                  value: "1,240",
                  icon: Users,
                },

                {
                  title: "Growth Rate",
                  value: "+18%",
                  icon: TrendingUp,
                },

                {
                  title: "AI Insights",
                  value: "356",
                  icon: BrainCircuit,
                },

                {
                  title: "Conversions",
                  value: "89%",
                  icon: BarChart3,
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="
                      rounded-3xl
                      bg-white/5
                      border
                      border-white/10
                      p-5
                      backdrop-blur-xl
                    "
                  >

                    <div className="flex items-center justify-between">

                      <Icon
                        className="text-cyan-400"
                        size={22}
                      />

                      <p className="text-xs text-gray-400">
                        Live
                      </p>

                    </div>

                    <h4 className="mt-6 text-3xl font-bold">
                      {item.value}
                    </h4>

                    <p className="mt-2 text-sm text-gray-400">
                      {item.title}
                    </p>

                  </div>

                );
              })}
            </div>

            {/* CHART */}
            <div
              className="
                relative
                mt-10
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
              "
            >

              <div className="flex items-center justify-between mb-6">

                <div>

                  <h4 className="font-semibold">
                    AI Performance
                  </h4>

                  <p className="text-sm text-gray-400 mt-1">
                    Weekly analytics overview
                  </p>

                </div>

                <div className="text-cyan-400 text-sm">
                  +24%
                </div>

              </div>

              {/* Fake Chart */}
              <div className="flex items-end gap-3 h-40">

                {[45, 80, 60, 95, 70, 120, 100].map(
                  (height, index) => (

                    <div
                      key={index}
                      className="
                        flex-1
                        rounded-t-2xl
                        bg-gradient-to-t
                        from-cyan-500
                        to-purple-600
                        opacity-90
                      "
                      style={{
                        height: `${height}px`,
                      }}
                    />

                  )
                )}

              </div>

            </div>

          </GlassCard>

        </FloatingElement>

        {/* RIGHT CONTENT */}
        <FadeIn>

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm backdrop-blur-xl">

              <TrendingUp size={16} />

              Smart Business Intelligence

            </div>

            <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">

              Gain Powerful
              <span className="gradient-text">
                {" "}Operational{" "}
              </span>

              Insights

            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">

              Monitor lead generation, customer engagement,
              AI performance, and workflow automation using
              real-time business intelligence dashboards.

            </p>

            {/* FEATURE LIST */}
            <div className="mt-10 space-y-6">

              {[
                "Real-time analytics tracking",
                "AI-generated business insights",
                "Customer engagement monitoring",
                "Workflow performance visualization",
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                    p-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                  "
                >

                  <div className="w-3 h-3 rounded-full bg-cyan-400" />

                  <p className="text-gray-300">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </FadeIn>

      </Container>

    </section>
  );
};

export default DashboardPreview;
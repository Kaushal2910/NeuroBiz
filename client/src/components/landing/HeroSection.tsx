import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";
import GradientButton from "../common/GradientButton";
import GlassCard from "../common/GlassCard";
import GlowBackground from "../common/GlowBackground";
import FadeIn from "../common/FadeIn";
import FloatingElement from "../common/FloatingElement";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden py-24 lg:min-h-screen flex items-center">

      {/* Background Glow */}
      <GlowBackground />

      {/* Extra Blur Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

      <Container
        className="
          relative
          z-10
          grid
          lg:grid-cols-2
          gap-14
          xl:gap-20
          items-center
        "
      >

        {/* ================= LEFT CONTENT ================= */}
        <FadeIn>
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm mb-6 backdrop-blur-xl">

              <Sparkles size={16} />

              <span>Smart AI Automation Platform</span>

            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white">

              Scale Faster with{" "}

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}

              Business Solutions

            </h1>

            {/* Description */}
            <p className="mt-8 text-base sm:text-lg text-gray-400 leading-relaxed">

              Transform customer engagement, automate repetitive
              workflows, manage leads intelligently, and boost
              productivity using cutting-edge AI automation tailored
              for modern businesses.

            </p>

            {/* CTA Buttons */}
            {/* CTA Buttons */}
<div className="mt-10 flex flex-wrap gap-4">

  <button
    onClick={() =>
      navigate("/chat")
    }
    className="
      px-8
      py-4
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      to-purple-600
      text-white
      font-semibold
      flex
      items-center
      gap-2
      hover:scale-[1.03]
      transition-all
      duration-300
    "
  >

    Launch AI Assistant

    <ArrowRight size={18} />

  </button>

  <button
    onClick={() =>
      navigate("/dashboard")
    }
    className="
      px-8
      py-4
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      hover:bg-white/10
      transition-all
      duration-300
      text-white
    "
  >

    View Dashboard

  </button>

</div>
            

            {/* Stats */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">

              <div>
                <h3 className="text-3xl font-bold text-white">
                  15K+
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Automated Conversations
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  98%
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Customer Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  24/7
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  AI Support Availability
                </p>
              </div>

            </div>

          </div>
        </FadeIn>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0">

          {/* TOP FLOATING STATUS CARD */}
          <FloatingElement y={12} duration={4}>

            <GlassCard
              className="
                absolute
                top-0
                right-4
                lg:right-0
                z-20
                px-5
                py-4
                rounded-3xl
                max-w-[230px]
              "
            >

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shrink-0" />

                <p className="text-sm text-white">
                  AI Systems Operational
                </p>

              </div>

            </GlassCard>

          </FloatingElement>

          {/* MAIN ANALYTICS CARD */}
          <FloatingElement y={18} duration={6}>

            <GlassCard
              className="
                relative
                overflow-hidden
                rounded-[32px]
                p-6
                md:p-8
                w-full
                max-w-2xl
                mx-auto
              "
            >

              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/10 pointer-events-none" />

              {/* Header */}
              <div className="relative flex items-center justify-between mb-10">

                <div>

                  <p className="text-gray-400 text-sm">
                    AI Performance Metrics
                  </p>

                  <h3 className="text-2xl md:text-4xl font-bold mt-2 text-white">
                    Business Analytics
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
                    shadow-lg
                    shadow-cyan-500/30
                    shrink-0
                  "
                >

                  <BrainCircuit size={26} className="text-white" />

                </div>

              </div>

              {/* Progress Bars */}
              <div className="relative space-y-8">

                {/* ITEM */}
                {[
                  {
                    label: "Lead Conversion",
                    value: "84%",
                    width: "84%",
                  },
                  {
                    label: "AI Response Accuracy",
                    value: "96%",
                    width: "96%",
                  },
                  {
                    label: "User Satisfaction",
                    value: "91%",
                    width: "91%",
                  },
                ].map((item, index) => (

                  <div key={index}>

                    <div className="flex justify-between text-sm mb-3 text-white">

                      <span>{item.label}</span>

                      <span>{item.value}</span>

                    </div>

                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">

                      <div
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-500
                          via-blue-500
                          to-purple-600
                        "
                        style={{ width: item.width }}
                      />

                    </div>

                  </div>

                ))}
              </div>

              {/* Bottom Stats */}
              <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">

                {/* CARD */}
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">

                  <h4 className="text-cyan-400 text-3xl font-bold">
                    120+
                  </h4>

                  <p className="text-sm text-gray-400 mt-2">
                    Active Clients
                  </p>

                </div>

                {/* CARD */}
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">

                  <h4 className="text-purple-400 text-3xl font-bold">
                    350K
                  </h4>

                  <p className="text-sm text-gray-400 mt-2">
                    Messages Sent
                  </p>

                </div>

                {/* CARD */}
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center">

                  <h4 className="text-green-400 text-3xl font-bold">
                    99.9%
                  </h4>

                  <p className="text-sm text-gray-400 mt-2">
                    Uptime
                  </p>

                </div>

              </div>

            </GlassCard>

          </FloatingElement>

          {/* BOTTOM FLOATING CARD */}
          <FloatingElement y={15} duration={5}>

            <GlassCard
              className="
                absolute
                bottom-[-50px]
                right-2
                lg:-right-10
                z-20
                p-5
                rounded-3xl
                w-[260px]
                sm:w-[300px]
              "
            >

              <div className="flex items-start gap-4">

                {/* Icon */}
                <div
                  className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-purple-600
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <Bot size={20} className="text-white" />

                </div>

                {/* Text */}
                <div className="min-w-0">

                  <p className="text-sm text-gray-400">
                    AI Assistant
                  </p>

                  <p className="mt-2 text-sm text-white leading-relaxed break-words">

                    Your workflow automation efficiency improved by
                    32% this month.

                  </p>

                </div>

              </div>

            </GlassCard>

          </FloatingElement>

        </div>

      </Container>

    </section>
  );
};

export default HeroSection;
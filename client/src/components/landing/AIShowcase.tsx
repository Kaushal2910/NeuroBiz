import {
  Bot,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import Container from "../common/Container";
import GlassCard from "../common/GlassCard";
import FadeIn from "../common/FadeIn";
import FloatingElement from "../common/FloatingElement";

const AIShowcase = () => {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />

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
        <FadeIn>

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm backdrop-blur-xl">

              <Sparkles size={16} />

              Smart AI Assistant

            </div>

            <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">

              Experience
              <span className="gradient-text">
                {" "}Real-Time{" "}
              </span>

              AI Conversations

            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">

              NeuroBiz AI provides intelligent, context-aware,
              and real-time conversational experiences powered
              by advanced AI models designed for modern
              businesses.

            </p>

            {/* Feature Bullets */}
            <div className="mt-10 space-y-5">

              {[
                "Real-time streaming AI responses",
                "Persistent conversation history",
                "AI-powered workflow automation",
                "Business-focused intelligent insights",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="text-cyan-400 shrink-0"
                    size={22}
                  />

                  <p className="text-gray-300">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </FadeIn>

        {/* RIGHT CONTENT */}
        <FloatingElement>

          <GlassCard
            className="
              p-6
              rounded-[32px]
              relative
              overflow-hidden
            "
          >

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/10" />

            {/* Chat Header */}
            <div className="relative flex items-center justify-between pb-6 border-b border-white/10">

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
                  "
                >

                  <Bot className="text-white" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold">
                    NeuroBiz Assistant
                  </h3>

                  <p className="text-sm text-green-400">
                    AI Online
                  </p>

                </div>

              </div>

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            </div>

            {/* Chat Messages */}
            <div className="relative mt-8 space-y-6">

              {/* USER MESSAGE */}
              <div className="flex justify-end">

                <div
                  className="
                    bg-gradient-to-r
                    from-cyan-500
                    to-purple-600
                    text-white
                    px-5
                    py-4
                    rounded-3xl
                    max-w-[80%]
                  "
                >

                  How can AI improve my customer support workflow?

                </div>

              </div>

              {/* AI MESSAGE */}
              <div className="flex gap-4">

                <div
                  className="
                    w-10
                    h-10
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

                  <Bot size={18} />

                </div>

                <div
                  className="
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-xl
                    rounded-3xl
                    px-5
                    py-4
                    max-w-[85%]
                  "
                >

                  <p className="text-gray-200 leading-relaxed">

                    AI can automate repetitive customer queries,
                    provide real-time intelligent responses,
                    analyze customer sentiment, and improve lead
                    conversion through personalized engagement.

                  </p>

                  {/* Fake Streaming Cursor */}
                  <div className="mt-3 w-3 h-5 bg-cyan-400 animate-pulse rounded-sm" />

                </div>

              </div>

              {/* CODE BLOCK */}
              <div
                className="
                  bg-black/40
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  overflow-hidden
                "
              >

                <p className="text-sm text-cyan-300">
                  AI Workflow Automation
                </p>

                <div className="mt-4 space-y-3 text-sm font-mono text-gray-300">

                  <p>→ Capture customer inquiry</p>

                  <p>→ Analyze intent using AI</p>

                  <p>→ Generate automated response</p>

                  <p>→ Notify sales dashboard</p>

                </div>

              </div>

            </div>

          </GlassCard>

        </FloatingElement>

      </Container>

    </section>
  );
};

export default AIShowcase;
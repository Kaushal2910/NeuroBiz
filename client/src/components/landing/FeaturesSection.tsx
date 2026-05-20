import {
  Bot,
  Workflow,
  BarChart3,
  BrainCircuit,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import GlassCard from "../common/GlassCard";
import FadeIn from "../common/FadeIn";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Conversations",
    description:
      "Deliver intelligent responses instantly with advanced conversational AI systems.",
  },

  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive business operations and streamline customer interactions.",
  },

  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track engagement, lead growth, and AI performance with real-time insights.",
  },

  {
    icon: BrainCircuit,
    title: "Smart AI Insights",
    description:
      "Generate intelligent recommendations and business insights using AI analysis.",
  },

  {
    icon: MessageSquareText,
    title: "Persistent Chat History",
    description:
      "Access previous conversations anytime with secure cloud-based message storage.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Infrastructure",
    description:
      "Enterprise-grade authentication, protected APIs, and secure cloud architecture.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-32">

      <Container>

        <FadeIn>

          <SectionHeading
            title="Powerful AI Features for Modern Businesses"
            subtitle="
            NeuroBiz AI combines intelligent automation,
            advanced analytics, and conversational AI into one
            unified platform designed for scalability.
            "
          />

        </FadeIn>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <FadeIn
                key={feature.title}
                delay={index * 0.08}
              >

                <GlassCard
                  className="
                    p-8
                    rounded-[28px]
                    relative
                    overflow-hidden
                    group
                    hover:-translate-y-2
                    transition-all
                    duration-500
                  "
                >

                  {/* Hover Gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      bg-gradient-to-br
                      from-cyan-500/5
                      to-purple-500/10
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      relative
                      w-16
                      h-16
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-purple-600
                      flex
                      items-center
                      justify-center
                      shadow-lg
                      shadow-cyan-500/20
                    "
                  >

                    <Icon className="text-white" size={28} />

                  </div>

                  {/* Content */}
                  <div className="relative mt-8">

                    <h3 className="text-2xl font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>

                  </div>

                </GlassCard>

              </FadeIn>

            );
          })}
        </div>

      </Container>

    </section>
  );
};

export default FeaturesSection;
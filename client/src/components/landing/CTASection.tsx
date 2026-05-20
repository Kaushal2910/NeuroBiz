import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Container from "../common/Container";
import FadeIn from "../common/FadeIn";
import GradientButton from "../common/GradientButton";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />

      <Container className="relative z-10">

        <FadeIn>

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              px-8
              py-20
              md:px-16
              text-center
            "
          >

            {/* Decorative Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full" />

            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm backdrop-blur-xl">

              <Sparkles size={16} />

              AI-Powered Automation

            </div>

            {/* Heading */}
            <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">

              Transform Your Business with
              <span className="gradient-text">
                {" "}Intelligent AI
              </span>

            </h2>

            {/* Description */}
            <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">

              Start automating workflows, improving customer
              engagement, and unlocking real-time business
              intelligence with NeuroBiz AI.

            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <GradientButton
                text="Get Started"
                icon={<ArrowRight size={18} />}
              />

              <button
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
                Schedule Demo
              </button>

            </div>

          </div>

        </FadeIn>

      </Container>

    </section>
  );
};

export default CTASection;
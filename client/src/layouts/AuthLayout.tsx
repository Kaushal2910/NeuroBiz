import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({
  children,
  title,
  subtitle,
}: Props) => {
  return (
    <div className="min-h-screen bg-background text-white grid lg:grid-cols-2 overflow-hidden">

      {/* LEFT SIDE */}
      <div className="relative hidden lg:flex flex-col justify-between p-14 overflow-hidden border-r border-white/10">

        {/* Glow Effects */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

        {/* Brand */}
        <div className="relative z-10">

          <h1 className="text-4xl font-bold gradient-text">
            NeuroBiz AI
          </h1>

          <p className="mt-5 text-gray-400 max-w-md text-lg leading-relaxed">

            Intelligent AI-powered automation platform for
            modern businesses, analytics, and smart workflows.

          </p>

        </div>

        {/* Center Illustration */}
        <div className="relative z-10 flex items-center justify-center">

          <div
            className="
              w-[500px]
              h-[500px]
              rounded-full
              bg-gradient-to-r
              from-cyan-500/20
              to-purple-500/20
              blur-3xl
              absolute
            "
          />

          <div
            className="
              relative
              w-[320px]
              h-[320px]
              rounded-[40px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              flex
              items-center
              justify-center
              shadow-2xl
            "
          >

            <div className="text-center">

              <h2 className="text-7xl font-black gradient-text">
                AI
              </h2>

              <p className="mt-4 text-gray-300">
                Intelligent Automation Platform
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Stats */}
        <div className="relative z-10 flex gap-10">

          <div>

            <h3 className="text-3xl font-bold">
              15K+
            </h3>

            <p className="mt-2 text-gray-400 text-sm">
              Automated Conversations
            </p>

          </div>

          <div>

            <h3 className="text-3xl font-bold">
              99%
            </h3>

            <p className="mt-2 text-gray-400 text-sm">
              AI Accuracy
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-6 sm:p-10">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div>

            <h2 className="text-4xl font-bold">
              {title}
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              {subtitle}
            </p>

          </div>

          {/* Form */}
          <div className="mt-10">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;
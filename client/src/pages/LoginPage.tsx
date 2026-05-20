import { Link } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="
      Login to continue managing your AI-powered
      business workflows and conversations.
      "
    >

      <form className="space-y-6">

        {/* Email */}
        <div>

          <label className="text-sm text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="
              mt-3
              w-full
              px-5
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              outline-none
              focus:border-cyan-400
              transition-all
              duration-300
            "
          />

        </div>

        {/* Password */}
        <div>

          <label className="text-sm text-gray-300">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="
              mt-3
              w-full
              px-5
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              outline-none
              focus:border-cyan-400
              transition-all
              duration-300
            "
          />

        </div>

        {/* Button */}
        <button
          className="
            w-full
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-purple-600
            font-semibold
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >

          Sign In

        </button>

      </form>

      {/* Footer */}
      <p className="mt-8 text-center text-gray-400">

        Don’t have an account?{" "}

        <Link
          to="/signup"
          className="text-cyan-400 hover:text-cyan-300"
        >
          Create Account
        </Link>

      </p>

    </AuthLayout>
  );
};

export default LoginPage;
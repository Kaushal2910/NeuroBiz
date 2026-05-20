import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import AuthLayout from "../layouts/AuthLayout";

const LoginPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleLogin = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (
      email ===
        "admin@neurobiz.ai" &&
      password === "password123"
    ) {

      localStorage.setItem(
        "isAuth",
        "true"
      );

      navigate("/dashboard");

    } else {

      setError(
        "Invalid credentials"
      );
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="
      Login to continue managing your AI-powered
      business workflows and conversations.
      "
    >

      <form
        onSubmit={handleLogin}
        className="space-y-6"
      >

        {/* Email */}
        <div>

          <label className="text-sm text-gray-300">

            Email Address

          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
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
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
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
            "
          />

        </div>

        {error && (

          <p className="text-red-400">

            {error}

          </p>
        )}

        <button
          type="submit"
          className="
            w-full
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-purple-600
            font-semibold
          "
        >

          Sign In

        </button>

      </form>

      <p className="mt-8 text-center text-gray-400">

        Don’t have an account?{" "}

        <Link
          to="/signup"
          className="
            text-cyan-400
          "
        >

          Create Account

        </Link>

      </p>

    </AuthLayout>
  );
};

export default LoginPage;
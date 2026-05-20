import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import AuthLayout from "../layouts/AuthLayout";

const SignupPage = () => {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    localStorage.setItem(
      "isAuth",
      "true"
    );

    navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="
      Join NeuroBiz AI and start automating your
      business workflows with intelligent AI systems.
      "
    >

      <form
        onSubmit={handleSignup}
        className="space-y-6"
      >

        <div>

          <label className="text-sm text-gray-300">

            Full Name

          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) =>
              setName(
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

        <div>

          <label className="text-sm text-gray-300">

            Password

          </label>

          <input
            type="password"
            placeholder="Create password"
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

          Create Account

        </button>

      </form>

      <p className="mt-8 text-center text-gray-400">

        Already have an account?{" "}

        <Link
          to="/login"
          className="text-cyan-400"
        >

          Sign In

        </Link>

      </p>

    </AuthLayout>
  );
};

export default SignupPage;
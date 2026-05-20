import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold gradient-text"
        >
          NeuroBiz AI
        </Link>

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="
              px-5 py-2 rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              text-white text-sm font-medium
              hover:opacity-90
              transition
            "
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
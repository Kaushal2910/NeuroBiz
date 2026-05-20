import { GitBranch, Link, ExternalLink } from "lucide-react";

import Container from "../common/Container";

const Footer = () => {
  
  return (
    <footer className="relative border-t border-white/10 py-10">

      <Container>

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
          "
        >

          {/* LEFT */}
          <div>

            <h3 className="text-2xl font-bold gradient-text">
              NeuroBiz AI
            </h3>
            

            <p className="mt-3 text-gray-400 text-sm max-w-md">

              AI-powered business automation platform designed
              for modern enterprises and intelligent workflows.

            </p>

          </div>

          {/* CENTER */}
          <div className="flex items-center gap-8 text-sm text-gray-400">

            <a
              href="#"
              className="hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              AI Assistant
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {[GitBranch, Link, ExternalLink ].map(
              (Icon, index) => (

                <button
                  key={index}
                  className="
                    w-11
                    h-11
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    flex
                    items-center
                    justify-center
                    hover:bg-white/10
                    transition-all
                    duration-300
                  "
                >

                  <Icon size={18} />

                </button>

              )
            )}

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-500">

          © 2026 NeuroBiz AI. All rights reserved.

        </div>

      </Container>

    </footer>
  );
};

export default Footer;
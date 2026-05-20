import { ReactNode } from "react";

import Navbar from "../components/layout/Navbar";

interface Props {
  children: ReactNode;
}

const MainLayout = ({
  children,
}: Props) => {
  return (
    <div className="min-h-screen bg-background text-white">

      <Navbar />

      <main className="pt-16">

        {children}

      </main>

    </div>
  );
};

export default MainLayout;
import { ReactNode } from "react";

import Sidebar from "../components/layout/Sidebar";

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({
  children,
}: Props) => {
  return (
    <div
      className="
        h-screen
        flex
        bg-background
        text-white
      "
    >

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 overflow-hidden">

        {children}

      </main>

    </div>
  );
};

export default DashboardLayout;
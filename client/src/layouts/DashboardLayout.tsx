import { ReactNode } from "react";

import Sidebar from "../components/layout/Sidebar";

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({
  children,
}: Props) => {
  return (
    <div className="min-h-screen bg-background text-white flex overflow-hidden">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto">

        {children}

      </main>

    </div>
  );
};

export default DashboardLayout;
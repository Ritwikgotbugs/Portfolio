// import { jetBrainsMono } from "@/pages/_app";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div
        id="main"
        className={`font-mono bg-black text-white h-screen flex overflow-hidden`}
      >
        <aside className="w-80 h-full bg-[#22222260] p-6 shrink-0 hidden md:block">
          <Sidebar />
        </aside>

        <div className="flex-1 h-full overflow-y-auto p-2 md:p-6">
          <main className="w-full h-full rounded-xl">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}

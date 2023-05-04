import SideBar from "@/components/SideBar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative md:flex min-h-screen">
      <SideBar />
      <div className="flex-1 bg-green-50 min-h-screen">{children}</div>
    </div>
  );
}

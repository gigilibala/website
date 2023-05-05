import SideBar from "@/components/SideBar";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative md:flex">
      <SideBar />
      <div className="flex-1 bg-green-50">{children}</div>
    </div>
  );
}

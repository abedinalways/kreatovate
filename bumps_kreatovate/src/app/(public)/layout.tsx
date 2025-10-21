import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Navbar />
      {/* px-[140px] */}
      <main className="grow min-h-screen bg-black text-white">{children}</main>
    </>
  );
};

export default PublicLayout;

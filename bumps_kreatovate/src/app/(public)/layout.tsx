import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Navbar />
      <main className="grow min-h-screen bg-black px-[140px] text-white">
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default PublicLayout;

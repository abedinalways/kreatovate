import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { ReactNode } from "react";

const PublicLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col bg-black px-[140px] ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;

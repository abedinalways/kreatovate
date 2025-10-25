import { ReactNode } from "react";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="overflow-hidden">
      {/* <Navbar /> */}
      {/* px-[140px] */}
      <main className="grow min-h-screen bg-black text-white">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default PublicLayout;

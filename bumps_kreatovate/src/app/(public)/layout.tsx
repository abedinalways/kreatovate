import { ReactNode } from "react";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <main className="grow min-h-screen bg-black px-[140px] text-white">
        {children}
      </main>
    </>
  );
};

export default PublicLayout;

import { ReactNode } from "react";

const PublicLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <main className="min-h-dvh">{children}</main>
    </>
  );
};

export default PublicLayout;

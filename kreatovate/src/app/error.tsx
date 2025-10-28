"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleTryAgain = () => {
    setIsSpinning(true);
    // wait a short moment before resetting
    setTimeout(() => {
      setIsSpinning(false);
      reset();
    }, 1200);
  };

  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-hidden font-jakarta flex items-center justify-center px-6 py-20">
      {/* background gradient mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_40%_at_20%_0%,rgba(233,61,61,0.25),transparent_60%),radial-gradient(50%_40%_at_80%_0%,rgba(78,48,254,0.25),transparent_60%),radial-gradient(40%_50%_at_50%_100%,rgba(255,255,255,0.06),transparent_60%)]"
      />

      {/* main card */}
      <section className="relative z-10 w-full max-w-xl text-center">
        <div className="rounded-[20px] border border-white/20 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-[0_10px_40px_rgba(78,48,254,0.15)]">
          {/* badge and icon */}
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-[#E93D3D]" />
              Unexpected Error
            </div>
            <AlertTriangle className="h-12 w-12 text-[#E93D3D]" />
          </div>

          {/* title */}
          <h1
            className={cn(
              "block text-4xl sm:text-5xl font-extrabold leading-tight mb-3",
              "text-gradient"
            )}
          >
            Something went wrong!
          </h1>

          <p className="text-white/80 leading-relaxed mb-8 max-w-md mx-auto">
            We’re experiencing a temporary issue. You can refresh the page or go
            back to the homepage while we work on a fix.
          </p>

          {/* actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={handleTryAgain}
              size="lg"
              disabled={isSpinning}
              className={cn(
                "rounded-[12px] border border-white px-6 h-12 text-white text-[18px] font-medium leading-[180%]",
                "btn-gradient hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,0,255,0.2)] cursor-pointer"
              )}
            >
              <RefreshCcw
                className={cn(
                  "mr-2 h-4 w-4 transition-transform duration-700",
                  isSpinning && "animate-spin"
                )}
              />
              {isSpinning ? "Trying..." : "Try Again"}
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn(
                "rounded-[12px] h-12 px-6 text-white border-white/40 bg-white/5 hover:bg-white/10 hover:text-white cursor-pointer"
              )}
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* soft glows */}
      <div
        aria-hidden
        className="absolute -left-24 top-1/3 h-64 w-64 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle,rgba(233,61,61,0.6),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute -right-24 bottom-1/4 h-64 w-64 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle,rgba(78,48,254,0.6),transparent_60%)]"
      />
    </main>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import Logo from "../logo/Logo";

interface DialogProps {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  onSubmit?: (email: string, password: string) => void;
}

const SolutionProtectedModal = ({
  open,
  onOpenChange,
  onSubmit,
}: DialogProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // SolutionProtectedModal.tsx
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    const password = String(fd.get("password") || "");

    try {
      await onSubmit?.(email, password); // ✅ await this
      onOpenChange(false); // close only after success
    } catch (err: any) {
      setError(err?.message || "Failed to open.");
    } finally {
      setSubmitting(false);
    }
  };

  console.log("INLINE at build:", {
    email: process.env.NEXT_PUBLIC_UNLOCK_EMAIL,
    hashRaw: JSON.stringify(process.env.NEXT_PUBLIC_UNLOCK_PASSWORD_HASH_B64),
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border mb-4"
            aria-hidden="true"
          >
            <Logo />
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center font-jakarta font-bold">
              Welcome back
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              Enter your email and password to{" "}
              <span className="font-bold">Access</span> this content.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter Your Email"
                autoComplete="email"
                required
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SolutionProtectedModal;

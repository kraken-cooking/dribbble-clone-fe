"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function OAuthButtons() {
  const handleGoogleAuth = () => {
    console.log("google");
  };

  return (
    <div className="grid gap-4">
      <Button variant="outline" className="relative" onClick={handleGoogleAuth}>
        <Image
          src="/google.svg"
          alt="Google"
          className="absolute left-4"
          width={16}
          height={16}
        />
        Continue with Google
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function EmptyShot() {
  const router = useRouter();

  return (
    <div className="w-full max-w-lg mx-auto p-8 border-2 border-dashed border-muted rounded-lg">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Upload your first shot
        </h2>
        <p className="text-muted-foreground text-sm">
          Show off your best work. Get feedback,
          <br />
          likes and be a part of a growing
          <br />
          community.
        </p>
        <Button
          onClick={() => router.push("/upload/new")}
          className="bg-[#0D0C22] text-white hover:bg-[#0D0C22]/90 rounded-full px-6"
          size="lg"
        >
          Upload your first shot
        </Button>
      </div>
    </div>
  );
}

export function EmptyShotGrid() {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <EmptyShot />
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-full w-full bg-muted rounded-lg" />
        ))}
      </div>
    </div>
  );
}

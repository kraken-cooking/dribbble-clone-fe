"use client";

import { ShotCard, ShotCardSkeleton } from "@/components/common/ShotCard";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { IShot } from "@/types";
import { ShotDetailDialog } from "./ShotDetailDialog";
import { useShotStore } from "@/stores/shot-store";

const mockShot: IShot = {
  imageUrl: "/test.png",
  title: "Mobile App Design",
  author: {
    name: "John Designer",
    avatar: "/default-avatar.png",
  },
  stats: {
    likes: 124,
    views: 1200,
    comments: 8,
  },
};

export const ShotsSection = ({ keyword }: { keyword?: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const updateShotDetail = useShotStore((state) => state.updateShotDetail);

  const [shots, setShots] = useState<IShot[]>([]);

  const LoadingArray = Array(30).fill(0);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setShots(LoadingArray.map((item) => mockShot));
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (keyword) {
      updateShotDetail(null);
    }
  }, [keyword, updateShotDetail]);

  return (
    <>
      <section className="container py-4 px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shots.map((shot, index) => (
            <ShotCard key={index} data={shot} />
          ))}
          {isLoading &&
            LoadingArray.map((item, index) => <ShotCardSkeleton key={index} />)}
        </div>
        <div className="py-4 text-center">
          {/* <Button disabled variant="outline">
          <Loader2 className="animate-spin" />
          Load more
        </Button> */}
          {/*
        <Button
          disabled
          variant="outline"
          className="font-semibold rounded-full"
        >
          Load more work
        </Button>
				*/}

          <Button className="rounded-full font-semibold">
            Sign up to continue
          </Button>
        </div>
      </section>
      <ShotDetailDialog />
    </>
  );
};

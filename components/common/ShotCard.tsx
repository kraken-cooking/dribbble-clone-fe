import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IShot } from "@/types";
import { useShotStore } from "@/stores/shot-store";

export function ShotCard({ data }: { data: IShot }) {
  const { imageUrl, title, author, stats } = data;

  const updateShotDetail = useShotStore((state) => state.updateShotDetail);

  const toggleCardDetail = () => {
    updateShotDetail(data);
  };

  return (
    <Card className="group overflow-hidden border-none rounded-xl p-0 gap-0">
      <div
        className="relative w-full aspect-video overflow-hidden cursor-pointer"
        onClick={toggleCardDetail}
      >
        <Image src={imageUrl} alt={title} fill />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <span className="text-sm font-medium">{title}</span>
          </div>
        </div>
      </div>
      <div className="p-3 grid grid-cols-2">
        <div className="flex items-center gap-2 col-span-1">
          <Avatar className="h-6 w-6">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground truncate">
            {author.name}
          </span>
        </div>
        <div className="flex items-center gap-3 col-span-1 justify-end">
          <div className="flex items-center gap-1">
            <Heart size={14} />
            <span className="text-xs">{stats.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye size={14} />
            <span className="text-xs">{stats.views}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function ShotCardSkeleton() {
  return (
    <Card className="group overflow-hidden border-none rounded-xl p-0 gap-0">
      {/* Image skeleton */}
      <div className="relative w-full aspect-video overflow-hidden bg-muted animate-pulse" />

      {/* Content skeleton */}
      <div className="p-3 grid grid-cols-2">
        {/* Author section */}
        <div className="flex items-center gap-2 col-span-1">
          {/* Avatar skeleton */}
          <div className="h-6 w-6 rounded-full bg-muted animate-pulse" />
          {/* Author name skeleton */}
          <div className="h-4 w-24 bg-muted rounded animate-pulse" />
        </div>

        {/* Stats section */}
        <div className="flex items-center gap-3 col-span-1 justify-end">
          {/* Likes skeleton */}
          <div className="flex items-center gap-1">
            <div className="h-3.5 w-3.5 bg-muted rounded animate-pulse" />
            <div className="h-3 w-8 bg-muted rounded animate-pulse" />
          </div>
          {/* Views skeleton */}
          <div className="flex items-center gap-1">
            <div className="h-3.5 w-3.5 bg-muted rounded animate-pulse" />
            <div className="h-3 w-8 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </div>
    </Card>
  );
}

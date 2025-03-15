import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Heart, Eye, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ShotCardProps {
  imageUrl: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  stats: {
    likes: number;
    views: number;
    comments: number;
  };
}

export function ShotCard({ imageUrl, title, author, stats }: ShotCardProps) {
  return (
    <Card className="group overflow-hidden border-none rounded-xl p-0 gap-0">
      <div className="relative w-full aspect-video overflow-hidden">
        <Image src={imageUrl} alt={title} fill />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <span className="text-sm font-medium">{title}</span>
          </div>
        </div>
      </div>
      <div className="p-3 grid grid-cols-3">
        <div className="flex items-center gap-2 col-span-1">
          <Avatar className="h-6 w-6">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{author.name}</span>
        </div>
        <div className="flex items-center gap-3 col-span-2 justify-end">
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

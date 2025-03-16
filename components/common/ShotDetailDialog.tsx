import React from "react";
import Image from "next/image";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, Bookmark, Share2, X } from "lucide-react";
import { useShotStore } from "@/stores/shot-store";

export function ShotDetailDialog() {
  const shotDetail = useShotStore((state) => state.shotDetail);

  const updateShotDetail = useShotStore((state) => state.updateShotDetail);

  const isOpen = Boolean(shotDetail);

  const onClose = () => {
    updateShotDetail(null);
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <div className="overflow-y-auto">
          <div className="flex flex-col min-h-[80vh]">
            {/* Header */}
            <DrawerHeader className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <DrawerTitle className="text-xl font-semibold">
                    {shotDetail?.title}
                  </DrawerTitle>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="default"
                    className="bg-[#0D0C22] text-white hover:bg-[#0D0C22]/90"
                  >
                    Get in touch
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={shotDetail?.author.avatar} />
                  <AvatarFallback>{shotDetail?.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">
                    {shotDetail?.author.agency}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Following
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 hover:bg-green-100"
                    >
                      Available for work
                    </Badge>
                  </div>
                </div>
              </div>
            </DrawerHeader>

            {/* Content */}
            {shotDetail && (
              <div className="flex-1 overflow-auto p-6">
                <div className="relative w-full h-full max-w-3/4 mx-auto">
                  <Image
                    src={shotDetail?.imageUrl ?? ""}
                    alt={shotDetail?.title ?? ""}
                    className="object-contain rounded-lg mx-auto"
                    width={1200}
                    height={800}
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

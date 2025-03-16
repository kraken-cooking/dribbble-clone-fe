"use client";

import { EmptyShotGrid } from "@/components/common/profile/EmptyShot";
import { DefaultLayout } from "@/components/layout/DefaultLayout";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/stores/auth-store";

export default function Page() {
  const user = useAuthStore((state) => state.user);

  return (
    <DefaultLayout>
      <div className="pt-16 pb-4 px-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <h1 className="font-bold text-3xl">Hi, {user?.name}</h1>
            <Avatar className="w-12 h-12 border-2">
              <AvatarImage src="/default-avatar.png" />
            </Avatar>
          </div>
        </div>
      </div>
      <div>
        <EmptyShotGrid />
      </div>
    </DefaultLayout>
  );
}

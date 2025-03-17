"use client";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";

import { useAuthStore } from "@/stores/auth-store";
import { redirect } from "next/navigation";

export const HeaderAuthButtons = () => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  const logout = useAuthStore((state) => state.logout);

  const isAuthenticated = Boolean(token);

  const goProfile = () => {
    redirect("/profile");
  };

  return isAuthenticated ? (
    <div className="flex items-center gap-2">
      <span className="text-sm">Welcome, {user?.name}</span>

      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
          <Avatar>
            <AvatarImage src="/default-avatar.png" alt="kraken-cooking" />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={goProfile}>My Profile</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) : (
    <div className="flex items-center gap-4">
      <Button asChild variant="ghost">
        <Link href="/signup">Sign up</Link>
      </Button>
      <Button asChild>
        <Link href="/signin">Login</Link>
      </Button>
    </div>
  );
};

import { ReactNode } from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { HeaderAuthButtons } from "../common/HeaderAuthButtons";
import { CommonFooter } from "../common/CommonFooter";
import Link from "next/link";

const CATEGORIES = [
  "Product Design",
  "Web Design",
  "Animation",
  "Branding",
  "Illustration",
  "Mobile",
  "Typography",
  "Browse",
  "Print",
];

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-8">
          <div className="flex items-center gap-8">
            <Link href="/">
              <h1 className="text-xl font-bold">Dribbble</h1>
            </Link>
            <nav>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>Explore</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Following</MenubarItem>
                    <MenubarItem>Popular</MenubarItem>
                    <MenubarSeparator />
                    {CATEGORIES.map((category) => (
                      <MenubarItem key={category}>{category}</MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </nav>
          </div>

          <HeaderAuthButtons />
        </div>
      </header>

      {children}
      <CommonFooter />
    </main>
  );
};

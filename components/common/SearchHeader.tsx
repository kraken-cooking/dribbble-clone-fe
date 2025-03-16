"use client";

import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { redirect } from "next/navigation";
import { convertToUrlPath } from "@/lib/utils";

const trendingSearches = [
  "landing page",
  "e-commerce",
  "mobile app",
  "logo design",
  "dashboard",
  "icons",
];

export function SearchHeader() {
  const [searchInput, setSearchInput] = useState("");

  const changeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleKeyDownInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const onSearch = () => {
    const cleanSearchText = convertToUrlPath(searchInput);

    if (!Boolean(cleanSearchText)) {
      return;
    }

    redirect(`/search/${cleanSearchText}`);
  };

  return (
    <div className="w-full bg-background pt-16 pb-4 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Discover the world's
          <br />
          top designers
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          Explore work from the most talented and accomplished designers
          <br />
          ready to take on your next project
        </p>

        <div className="flex gap-2 max-w-2xl mx-auto mb-8">
          <div className="relative flex-1">
            <Input
              type="search"
              value={searchInput}
              onChange={changeSearchInput}
              onKeyDown={handleKeyDownInput}
              placeholder="What are you looking for?"
              className="w-full h-12 pl-4 pr-4 rounded-full bg-muted/50"
            />
          </div>

          <Button
            size="icon"
            className="cursor-pointer h-12 w-12 rounded-full bg-pink-500 hover:bg-pink-600"
            onClick={onSearch}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">
            Trending searches:
          </span>
          {trendingSearches.map((term) => (
            <Button
              key={term}
              variant="secondary"
              className="h-8 rounded-full text-sm font-normal border border-stone-200 bg-stone-200 hover:bg-white cursor-pointer"
            >
              {term}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

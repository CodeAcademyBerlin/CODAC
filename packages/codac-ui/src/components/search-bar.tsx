import clsx from "clsx";
import React, { ReactNode, RefObject } from "react";

import { SearchIcon } from "../icons/search";
import { XIcon } from "../icons/x";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearSearch: () => void;
  setSearchOpen: (v: boolean) => void;
  searchOpen: boolean;
  searchResults: ReactNode;

  passRef: RefObject<HTMLDivElement>;
}
export function SearchBar({
  searchValue,
  handleClearSearch,
  setSearchValue,
  searchOpen,
  setSearchOpen,
  searchResults,
  passRef,
}: SearchBarProps) {
  return (
    <div ref={passRef}>
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="text-primary h-5 w-5 fill-none" />
        </div>
        <input
          // aria-label="Search"
          onFocus={() => setSearchOpen(true)}
          type="search"
          name="search"
          value={searchValue}
          onChange={setSearchValue}
          id="search"
          className="focus:border-codac-pink focus:ring-codac-pink block w-full rounded-sm border-none bg-gray-600 pl-10 font-medium text-gray-300 focus:bg-white focus:text-gray-600 focus:ring-2"
          autoComplete="off"
        />
        {searchValue && (
          <div
            onClick={handleClearSearch}
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
          >
            <XIcon className="h-5 w-5 fill-gray-300" />
          </div>
        )}
      </div>

      <div
        // onClick={toggleMenu}
        className="relative flex shrink-0 cursor-pointer gap-x-3"
      >
        <div
          className={clsx(
            "absolute right-0 top-2 z-20 mt-0 w-full origin-top-right rounded-sm transition-all duration-500 dark:bg-zinc-950",
            {
              block: searchOpen,
              hidden: !searchOpen,
            }
          )}
        >
          {searchResults && (
            <div className="border-secondary rounded-sm border-2 p-6">{searchResults}</div>
          )}
        </div>
      </div>
    </div>
  );
}

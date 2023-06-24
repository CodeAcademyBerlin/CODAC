import { SearchIcon } from "@heroicons/react/solid";
import React from "react";

// type Props = {};
interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleSearchOpen: () => void;
}
export const SearchBar = ({ value, onChange, toggleSearchOpen }: Props) => {
  return (
    <div className="relative flex-1" onClick={toggleSearchOpen}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon className="h-5 w-5 text-gray-300" />
      </div>
      <input
        aria-label="Search"
        type="search"
        name="search"
        value={value}
        onChange={onChange}
        id="search"
        className="focus:border-codac-pink focus:ring-codac-pink block w-full rounded-full border-none bg-gray-600 pl-10 font-medium text-gray-200 focus:ring-2"
        autoComplete="off"
      />
    </div>
  );
};

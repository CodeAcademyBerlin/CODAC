"use client";

import { AuthMenu, Button, Header, SearchBar, SpinnerIcon } from "codac-ui";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

import { LMSSearchResult } from "#/components/lms-search-result";
import { useAuth } from "#/contexts/useAuth";
import { lmsSearch } from "#/strapi-queries/client/search";
import { LMSSearchResults } from "#/types/user";

export default function LayoutHeader() {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<LMSSearchResults | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const session = useSession();
  const toggleMenu = () => setDropdownOpen(!dropdownOpen);
  const handleSignOut = () => signOut();
  useEffect(() => {
    // only add the event listener when the menu is opened
    if (!dropdownOpen && !searchOpen) return;
    function handleClick(event: { target: any }) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [dropdownOpen, searchOpen]);

  useEffect(() => {
    if (searchValue.length > 2) {
      const getSearchResults = async () => {
        const res = await lmsSearch(searchValue, session.data?.user?.accessToken as string);
        console.log("res", res);
        res && setSearchResults(res);
      };
      getSearchResults();
    }
  }, [searchValue]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setSearchOpen(true);
  };
  const handleClearSearch = () => {
    setSearchValue("");
    setSearchOpen(false);
    setSearchResults(null);
  };
  return (
    <Header>
      <div className="w-24 flex-none"></div>
      <div className="flex-1">
        <SearchBar
          searchValue={searchValue}
          searchOpen={searchOpen}
          setSearchValue={handleSearch}
          setSearchOpen={setSearchOpen}
          handleClearSearch={handleClearSearch}
          searchResults={searchResults && <LMSSearchResult searchResults={searchResults} />}
          passRef={searchRef}
        />
      </div>

      {session.status === "loading" ? (
        <SpinnerIcon className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" />
      ) : (
        <>
          {session.status === "authenticated" ? (
            <AuthMenu
              handleSignOut={handleSignOut}
              avatar={user?.avatar?.url}
              toggleMenu={toggleMenu}
              isOpen={dropdownOpen}
              passRef={dropdownRef}
            />
          ) : (
            <Button
              color="cyan"
              onClick={() => {
                signIn();
              }}
            >
              Sign In{" "}
            </Button>
          )}
        </>
      )}
    </Header>
  );
}

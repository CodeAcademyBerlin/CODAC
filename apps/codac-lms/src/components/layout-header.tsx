"use client";

import { Course, Page, Project } from "codac-graphql-types";
import { AuthMenu, Button, Header, SearchBar, SearchResult, SpinnerIcon } from "codac-ui";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

import { useAuth } from "#/contexts/useAuth";
import { lmsSearch } from "#/strapi-queries/client/search";
import { SearchResults } from "#/types/user";

export default function LayoutHeader() {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null);

  const dropdown = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const session = useSession();
  const toggleMenu = () => setDropdownOpen(!dropdownOpen);
  const handleSignOut = () => signOut();
  useEffect(() => {
    // only add the event listener when the menu is opened
    if (!dropdownOpen) return;
    function handleClick(event: { target: any }) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [dropdownOpen]);

  useEffect(() => {
    if (search.length > 2) {
      const getSearchResults = async () => {
        const res = await lmsSearch(search, session.data?.user?.accessToken as string);
        console.log("res", res);
        res && setSearchResults(res);
      };
      getSearchResults();
    }
  }, [search]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSearchOpen(true);
  };
  return (
    <Header>
      <div className="w-24 flex-none"></div>
      <div className="flex-1">
        <SearchBar
          value={search}
          onChange={handleSearch}
          toggleSearchOpen={() => setSearchOpen(!searchOpen)}
        />
        {searchOpen && searchResults && (
          <SearchResult searchResults={searchResults} passRef={searchRef} />
        )}
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
              passRef={dropdown}
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

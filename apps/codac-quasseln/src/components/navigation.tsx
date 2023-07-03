import Link from "next/link";
import React from "react";

import { navigation } from "#/constants/navigation";
//  This comes from navigation.ts... the u can add allements to the dashboard...

const Navigation = () => {

  return (
    <div className="go-to-chat-container">
      <Link className="go-to-chat" href="/main-chat">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
        <span>Go to main chat</span>
      </Link>
      {/* FOLLOWING NAVIGATION TOTALLY REDUNDANT AND UNNECESSARY ??? */}
      {/* {navigation.map((section) => {
        return (
          <div key={section.name} className="space-y-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {section.name}
            </div>

            <div className="grid grid-cols-1 gap-5  lg:grid-cols-2">
              {section.items.map((item) => {
                return (
                  <Link
                    href={`/${item.slug}`}
                    key={item.name}
                    className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                  >
                    <div className="font-medium text-gray-200 group-hover:text-gray-50">
                      {item.name}
                    </div>

                    {item.description != null ? (
                      <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                        {item.description}
                      </div>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Navigation;

import Link from "next/link";
import React from "react";

import { navigation } from "#/constants/navigation";

const Navigation = () => {
  return (
    <div className="space-y-10 text-white">
      {navigation.map((section) => {
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
      })}
    </div>
  );
};

export default Navigation;

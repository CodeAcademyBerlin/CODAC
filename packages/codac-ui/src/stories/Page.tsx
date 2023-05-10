import { GlobalNav } from "../ui/global-nav";
import { Layout } from "../ui/layout";
import { navData } from "./navSampleData";

export const Page = () => {
  return (
    <Layout navigation={<GlobalNav navigation={navData} header="Demo" />}>
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-300">Examples</h1>

        <div className="space-y-10 text-white">
          {navData.map((section) => {
            return (
              <div key={section.name} className="space-y-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {section.name}
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  {section.items.map((item) => {
                    return (
                      <div
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
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

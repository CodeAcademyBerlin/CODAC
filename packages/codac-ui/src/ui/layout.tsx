import { AddressBar } from "./address-bar";
import { GlobalNav, Item } from "./global-nav";

export function Layout({
  children,
  navigation,
}: {
  children: React.ReactNode;
  navigation: React.ReactNode;
}) {
  return (
    <>
      {navigation}

      <div className="lg:pl-72">
        <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
          {/* <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black">
              <AddressBar />
            </div>
          </div> */}

          <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
          </div>
          {/* <Byline className="fixed sm:hidden" /> */}
        </div>
      </div>
      {/* </body>
     </html> */}
    </>
  );
}

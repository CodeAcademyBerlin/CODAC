export function LMSLayout({ children, topNav, sideNav, }) {
    return (<>
      {topNav && topNav}
      {sideNav && sideNav}
      <div className="lg:pl-72">
        <div className="mx-auto  space-y-8 px-2 pt-20  lg:px-8 lg:py-8">
          {/* {navigation} */}
          {/*<div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
          <div className="rounded-lg bg-black">
            <LMSAddressBar />
          </div>
        </div> */}

          <div className=" bg-gray-300-border-gradient rounded-lg border border-slate-900 bg-zinc-950 p-px shadow-lg shadow-black dark:bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)]">
            <div className="rounded-lg p-3.5 lg:p-6">{children}</div>
          </div>
        </div>
      </div>
    </>);
}

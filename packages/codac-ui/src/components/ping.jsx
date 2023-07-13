export function Ping() {
    return (<span className="flex h-[11px] w-[11px]">
      <span className="bg-codac-pink absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
      <span className="bg-codac-pink relative inline-flex h-[11px] w-[11px] rounded-full"></span>
    </span>);
}

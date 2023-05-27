import { codacFontClass } from "../brand/codac-font";
import { CodacLogo } from "../brand/codac-logo";

export function SideAuth({ className, user }: { className: string; user: string }) {
  return (
    <div
      className={`${className} bg-vc-border-gradient inset-x-0 bottom-3 mx-3 rounded-lg p-px shadow-lg shadow-black/20`}
    >
      <div className="flex flex-col justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <h2 className="text-primary font-semibold">{user}</h2>
      </div>
      <a href="https://codeacademyberlin.com" target="_blank" title="CODAC">
        <div className="hover:text-secondary flex items-center justify-center text-gray-100">
          <div className="flex-auto">
            <CodacLogo width={20} height={20} />
          </div>
          <p className={`flex-auto ${codacFontClass}`}> Code Academy Berlin</p>
        </div>
      </a>
    </div>
  );
}

import "../styles.css";

import Providers from "#/contexts/providers";

// import { codac } from "codac-ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-1100 overflow-y-scroll bg-gray-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

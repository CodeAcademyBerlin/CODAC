import "../styles.css";

// import { codac } from "codac-ui";
import Providers from "#/components/Providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-1100 overflow-y-scroll bg-gray-300 bg-[url('/grid.svg')]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

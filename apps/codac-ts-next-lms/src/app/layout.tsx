import "../styles.css";

import { DashboardLayout, GlobalNav, ThemeProvider } from "codac-ui";

import { navigation } from "../constants/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-1100 overflow-y-scroll bg-gray-300 bg-[url('/grid.svg')]">
        <DashboardLayout
          navigation={<GlobalNav appDir={true} navigation={navigation} header="CODAC LMS" />}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </DashboardLayout>
      </body>
    </html>
  );
}

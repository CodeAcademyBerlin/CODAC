import "../styles.css";

import { DashboardLayout, GlobalNav, SignIn, ThemeProvider } from "codac-ui";

import Providers from "#/components/Providers";

import { navigation } from "../constants/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-1100 overflow-y-scroll bg-gray-300 bg-[url('/grid.svg')]">
        <Providers>
          <DashboardLayout
            navigation={
              <GlobalNav navigation={navigation} header="CODAC LMS" authentication={<SignIn />} />
            }
          >
            <ThemeProvider>{children}</ThemeProvider>
          </DashboardLayout>
        </Providers>
      </body>
    </html>
  );
}

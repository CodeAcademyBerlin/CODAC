import { Universe, useTheme } from "codac-ui";
import Link from "next/link";

import { navigation } from "../constants/navigation";

export default function Home() {
  const { theme } = useTheme();
  console.log("first", theme);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center">
      <Universe />
    </div>
  );
}

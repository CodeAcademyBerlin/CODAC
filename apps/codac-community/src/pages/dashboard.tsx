import Link from "next/link";

import { navigation } from "#/constants/navigation";
import { AuthContext } from "#/contexts/authContext";
import { useContext, use } from "react";
import Navigation from "#/components/navigation";

export default function Dashboard() {
  const { user, authLoading } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-xl font-medium text-gray-300">CODAC COMMUNITY</h1>
      {authLoading && <div>Loading...</div>}
      {user && !authLoading && <Navigation />}
    </div>
  );
}

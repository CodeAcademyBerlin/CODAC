import Navigation from "#/components/navigation";
import { useAuth } from "#/contexts/authContext";

export default function Dashboard() {
  const { user, authLoading } = useAuth();
  return (
    <div>
      <h1 className="text-xl font-medium text-gray-300">CODAC QUASSELN</h1>
      {authLoading && <div>Loading...</div>}
      {user && !authLoading && <Navigation />}
    </div>
  );
}

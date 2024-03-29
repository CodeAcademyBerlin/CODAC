import { Button } from "codac-ui";
import { useAuth } from "#/contexts/authContext";
import LoginModal from "./login-modal";

const Auth = () => {
  const { user, logout } = useAuth();

  return (
    <>
      {!user ? (
        <LoginModal />
      ) : (
        <Button
          onClick={() => {
            logout();
          }}
        >
          log out
        </Button>
      )}
    </>
  );
};

export default Auth;

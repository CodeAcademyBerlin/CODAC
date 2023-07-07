import { Button } from "codac-ui";
import { useAuth } from "#/contexts/authContext";
import LoginModal from "./login-modal";
import { useLoginMutation, type UsersPermissionsLoginPayload } from "codac-graphql-types";

const Auth = () => {
  const { user, logout } = useAuth();
  const { onLoginSuccess } = useAuth();

  const [loginMutation, { data, loading, error }] = useLoginMutation();

  return (
    <>
      {!user ? (
        <LoginModal
          loginMutation={loginMutation}
          onLoginSuccess={onLoginSuccess}
          error={error}
          data={data}
        />
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

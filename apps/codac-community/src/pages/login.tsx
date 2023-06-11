import { AuthContext } from "#/contexts/authContext";
import { useLoginMutation } from "codac-graphql-types";
import { Button } from "codac-ui";
import { useRouter } from "next/router";
import { useState, useContext, ChangeEvent } from "react";

interface State {
  password: string;
  email: string;
  error: string;
  showPassword: boolean;
  rememberMe: boolean;
}

const LoginPage = () => {
  const [values, setValues] = useState<State>({
    password: "",
    email: "",
    error: "",
    showPassword: false,
    rememberMe: false,
  });
  const [loginMutation, { data, loading, error }] = useLoginMutation({
    variables: {
      email: values.email,
      password: values.password,
    },
  });
  console.log("data", data);
  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    try {
      loginMutation();
      if (data) {
        const { login } = data;
        console.log("login", login);
      }
    } catch (e) {
      setValues({ ...values, error: "e.message" });
    }
  };

  return (
    <div>
      <form noValidate autoComplete="off">
        <input
          autoFocus
          id="email"
          type="text"
          value={values.email}
          onChange={handleChange("email")}
        />
        <input
          autoFocus
          id="password"
          type="password"
          value={values.password}
          onChange={handleChange("password")}
        />

        {error && <p>{error.message}</p>}
        {loading ? (
          <p>loading</p>
        ) : (
          <Button color="orange" onClick={handleSubmit}>
            Login
          </Button>
        )}
      </form>
    </div>
  );
};

// LoginPage.getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>;

export default LoginPage;

import { useLoginMutation, type UsersPermissionsLoginPayload } from "codac-graphql-types";
import { Boundary, CodacLogo, Modal, SpinnerIcon } from "codac-ui";
import { type ChangeEvent, useState } from "react";

import { useAuth } from "#/contexts/authContext";

interface State {
  password: string;
  email: string;
}
interface Props {
  loginMutation: any;
  onLoginSuccess: any;
  error: any;
  data: any;
}

const LoginModal = ({ loginMutation, onLoginSuccess, error, data }: Props) => {
  // const { onLoginSuccess } = useAuth();

  // const [loginMutation, { data, loading, error }] = useLoginMutation();

  const [values, setValues] = useState<State>({
    password: "",
    email: "",
  });

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    e.preventDefault();
    loginMutation({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
  };
  if (data?.login) {
    const login = data.login as UsersPermissionsLoginPayload;
    onLoginSuccess(login);
  }

  return (
    <Modal buttonTitle="Sign In">
      <Boundary color="pink">
        <div className="relative mx-4 mb-4 grid h-14 place-items-center">
          <CodacLogo className="fill h-20 w-20 fill-gray-200" />
          <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-gray-200 antialiased">
            sign in
          </h3>
        </div>
        <div className="mx-auto mt-10 w-full max-w-md p-6">
          <div className="p-4 sm:p-7">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-50">
                email
              </label>
              <input
                className="focus:border-secondary focus:ring-secondary text-codac-pink block w-full rounded-md bg-transparent shadow-sm sm:text-sm"
                autoFocus
                id="email"
                name="email"
                autoComplete="email"
                type="text"
                value={values.email}
                onChange={handleChange("email")}
              />
              <label htmlFor="password" className="block text-sm font-medium text-gray-50">
                password
              </label>
              <input
                className="focus:border-secondary focus:ring-secondary block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                autoFocus
                autoComplete="current-password"
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange("password")}
              />
            </div>
            <div className="mt-2 text-red-500">{error?.message}</div>
          </div>
          <div className="flex items-center justify-center">
            <button
              name="login"
              onClick={handleSubmit}
              className="bg-codac-pink inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-pink-300"
            >
              <SpinnerIcon className="-ml-1 mr-3 h-5 w-5 text-white" />
              Sign In
            </button>
          </div>

          <div className="text-center">
            <p className="text-codac-blue mt-2 text-sm hover:underline dark:text-gray-400">
              Forgot password? (not implemented)
            </p>
          </div>
        </div>
      </Boundary>
    </Modal>
  );
};

export default LoginModal;

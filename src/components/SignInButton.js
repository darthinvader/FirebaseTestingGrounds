import { signIn } from "../services/firebase-auth";

const SignInButton = () => {
  return <button onClick={() => signIn()}>Sign in</button>;
};
export default SignInButton;

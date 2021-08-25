import { useUpdate } from "../contexts/UserContext";
import { signIn } from "../services/firebase-auth";

const SignInButton = () => {
  const update = useUpdate();
  return <button onClick={() => signIn(update)}>Sign in</button>;
};
export default SignInButton;

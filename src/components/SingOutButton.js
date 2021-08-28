import { useUpdate } from "../contexts/UserContext";
import { signOut } from "../services/firebase-auth";

const SignOutButton = () => {
  const update = useUpdate();
  return <button onClick={() => signOut()}>Sign Out</button>;
};
export default SignOutButton;

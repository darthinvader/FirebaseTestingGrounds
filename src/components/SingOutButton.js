import { signOut } from "../services/firebase-auth";

const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign Out</button>;
};
export default SignOutButton;

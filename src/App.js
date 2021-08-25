import SignInButton from "./components/SignInButton";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <SignInButton />
    </UserProvider>
  );
}

export default App;

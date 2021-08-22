import { signIn } from "./services/firebase-auth";

function App() {
  return <button onClick={signIn}>Sign in</button>;
}

export default App;

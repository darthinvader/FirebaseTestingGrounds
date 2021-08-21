import { signIn } from "./services/firebase-auth";

function App() {
  return <button onClick={signIn}>Login</button>;
}

export default App;

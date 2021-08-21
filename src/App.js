import firebaseApp, { signIn } from "./services/firebase";

function App() {
  return <button onClick={signIn}>Login</button>;
}

export default App;

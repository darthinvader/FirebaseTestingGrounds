import SignInButton from "./components/SignInButton";
import UserProvider from "./contexts/UserContext";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "./services/firebase-auth";
import SignOutButton from "./components/SingOutButton";
function App() {
  (async () => {
    const docRef = doc(db, "books", "bkSXu1FWk7N4NeiINdcY");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  })();

  return (
    <UserProvider>
      <SignInButton />
      <SignOutButton />
    </UserProvider>
  );
}

export default App;

import SignInButton from "./components/SignInButton";
import UserProvider from "./contexts/UserContext";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "./services/firebase-auth";
function App() {
  (async () => {
    const docRef = doc(db, "books", "bkSXu1FWk7N4NeiINdcY");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  })();

  return (
    <UserProvider>
      <SignInButton />
    </UserProvider>
  );
}

export default App;

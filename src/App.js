import SignInButton from "./components/SignInButton";
import UserProvider from "./contexts/UserContext";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { auth, database, db } from "./services/firebase-auth";
import SignOutButton from "./components/SingOutButton";
import { ref, onValue } from "firebase/database";

function App() {
  (async () => {
    const docRef = doc(db, "booksAppended", "bkSXu1FWk7N4NeiINdcY");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  })();

  const starCountRef = ref(database, "books");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val()[0];
    console.log(data);
  });
  return (
    <UserProvider>
      <SignInButton />
      <SignOutButton />
    </UserProvider>
  );
}

export default App;

import SignInButton from "./components/SignInButton";
import UserProvider from "./contexts/UserContext";
import {
  getDocs,
  collection,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  limit,
} from "firebase/firestore";
import { auth, database, firestoreDB } from "./services/firebase-auth";
import SignOutButton from "./components/SingOutButton";
import { ref, onValue } from "firebase/database";

function App() {
  setTimeout(() => {
    if (auth.currentUser != null) {
      (async () => {
        const q = query(
          collection(firestoreDB, "books"),
          where("categories", "array-contains", "base"),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })();
      // (async () =>
      //   await setDoc(doc(firestoreDB, "books"), {
      //     name: "Los Angeles",
      //     state: "CA",
      //     country: "USA",
      //   }))();
      const starCountRef = ref(database, "books");
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
      });
    }
  }, 2000);
  return (
    <UserProvider>
      <SignInButton />
      <SignOutButton />
    </UserProvider>
  );
}

export default App;

import SignInButton from "./components/SignInButton";
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
import { ref, onValue, set } from "firebase/database";
import { useEffect } from "react";

function App() {
  useEffect(() => {
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

        const starCountRef = ref(database, "city");
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
        });
        writeUserData("LAS", "Okss", "Dagfs");
      }
    }, 2000);
  }, []);
  function writeUserData(name, email, imageUrl) {
    const db = database;
    set(ref(db, "city/" + name), {
      email: email,
      profile_picture: imageUrl,
    });
    console.log("I wrote");
  }

  return (
    <>
      <SignInButton />
      <SignOutButton />
      <button
        onClick={() =>
          writeUserData("johnhathanasdasdasd", "johnathan@com", "johnathan.com")
        }
      >
        Click me for data
      </button>
    </>
  );
}

export default App;

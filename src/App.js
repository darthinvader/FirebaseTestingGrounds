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
import faker from "faker";

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

        const starCountRef = ref(database, "users");
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
        });
      }
    }, 2000);
  }, []);
  function writeUserData(city, country, accountName) {
    const db = database;
    set(ref(db, "users/" + city), {
      country: country,
      accountName: accountName,
    });
    console.log("I wrote");
  }

  return (
    <>
      <SignInButton />
      <SignOutButton />
      <button
        onClick={() =>
          writeUserData(
            faker.address.city(),
            faker.address.country(),
            faker.finance.accountName()
          )
        }
      >
        Click me to wrte
      </button>
    </>
  );
}

export default App;

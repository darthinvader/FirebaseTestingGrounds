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
  onSnapshot,
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
            collection(firestoreDB, "users"),
            where("accountName", "!=", null),
            limit(10)
          );
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
              cities.push(doc.data().country);
            });
            console.log("Current countries: ", cities.join(", "));
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
  function writeUserData(name, country, accountName) {
    const db = database;
    set(ref(db, "users/" + name), {
      country: country,
      accountName: accountName,
    });
    console.log("I wrote");
  }

  const addDoc = async (name, country, accountName) => {
    await setDoc(doc(firestoreDB, "users", name), {
      country: country,
      accountName: accountName,
    });
    console.log("firestore Wrote");
  };

  return (
    <>
      <SignInButton />
      <SignOutButton />
      <button
        onClick={() =>
          writeUserData(
            faker.name.firstName(),
            faker.address.country(),
            faker.finance.accountName()
          )
        }
      >
        Realtime write
      </button>
      <button
        onClick={() =>
          addDoc(
            faker.name.firstName(),
            faker.address.country(),
            faker.finance.accountName()
          )
        }
      >
        Firestore wrte
      </button>
    </>
  );
}

export default App;

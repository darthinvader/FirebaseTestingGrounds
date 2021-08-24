import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const UpdateContext = createContext();

export const useUser = () => useContext(UserContext);
export const useUpdate = () => useContext(UpdateContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={user}>
      <UpdateContext value={setUser}>{children}</UpdateContext>
    </UserContext.Provider>
  );
};
export default UserProvider;

import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>
        HomePage <smal>{user?.name}</smal>
      </h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};

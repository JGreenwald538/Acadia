import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <div>{currentUser.email}</div>
      <img className="h-52 w-52 rounded-full" src={currentUser.photoURL} />
    </div>
  );
};

export default Home;

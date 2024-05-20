import { useState } from "react";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import { IUserData } from "./interfaces";

function App() {
  // State to check the user is login or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    name: "",
    password: "",
    phone: "",
    username: "",
    // address: "",
  });
  return (
    <>
      <Navbar
        aboutTxt="About Us"
        companyName="Abdullah"
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      {isLoggedIn ? (
        <h1>Welcome back: {userData.email}</h1>
      ) : (
        <RegisterForm
          userData={userData}
          setUserData={setUserData}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {/* <RegisterForm userData={userData} setUserData={setUserData} /> */}
    </>
  );
}

export default App;

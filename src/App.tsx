import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  // State to check the user is login or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Navbar
        aboutTxt="About Us"
        companyName="Abdullah"
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    </>
  );
}

export default App;

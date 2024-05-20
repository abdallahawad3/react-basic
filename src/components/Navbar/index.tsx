// import { useState } from "react";
import "./index.scss";

interface IProps {
  companyName: string;
  aboutTxt: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

function Navbar({ companyName, aboutTxt, setIsLoggedIn, isLoggedIn }: IProps) {
  // const [login, setLogin] = useState("login".toUpperCase());
  //* -- function to change state of user
  const handelUserClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div className="navbar ">
      <ul className="container">
        <li>
          <a href="/">{companyName}</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">{aboutTxt}</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <button onClick={handelUserClick}>
            {isLoggedIn ? "logout" : "login"}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

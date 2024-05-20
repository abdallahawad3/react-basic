import { ChangeEvent } from "react";
import "./index.scss";
import { IUserData } from "../../interfaces";
interface IChangeUi {
  isLoggedIn: boolean;
  setIsLoggedIn: (v: boolean) => void;
  userData: IUserData;
  setUserData: (user: IUserData) => void;
}

function RegisterForm({
  isLoggedIn,
  setIsLoggedIn,
  setUserData,
  userData,
}: IChangeUi) {
  //* -- Handlers
  //*  ❗❗❗❗ When i send event as a props the type of var is an  🔃 ChangeEvent<HTMLInputElement> 🔃  **//
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // In this case i use name to access the element
    // [name] ==> dynamic key //
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form
      className="container"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="input-wrapper">
        <label htmlFor="email">email</label>
        <input
          placeholder="Enter your email"
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={onChangeHandler}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="name">name</label>
        <input
          onChange={onChangeHandler}
          placeholder="Enter your name"
          type="text"
          name="name"
          id="name"
          value={userData.name}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="username">username</label>
        <input
          value={userData.username}
          onChange={onChangeHandler}
          placeholder="Enter your username"
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">password</label>
        <input
          value={userData.password}
          onChange={onChangeHandler}
          placeholder="Enter password"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="phone">phone</label>
        <input
          value={userData.phone}
          onChange={onChangeHandler}
          placeholder="Enter your phone number"
          type="text"
          name="phone"
          id="phone"
        />
      </div>
      <button
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        {!isLoggedIn ? "Login" : <></>}
      </button>
    </form>
  );
}

export default RegisterForm;

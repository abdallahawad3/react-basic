import "./index.scss";

interface IProps {
  companyName: string;
  aboutTxt: string;
  loginTxt: string;
}

function Navbar({ companyName, aboutTxt, loginTxt }: IProps) {
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
          <button>{loginTxt}</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

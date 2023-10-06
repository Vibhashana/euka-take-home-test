import header from "./Header.module.scss";
import { logo } from "../../assets/images";

const Header = () => {
  return (
    <div className={header.wrapper}>
      <img src={logo} alt="Euka logo" className={header.img} />
      <span>email</span>
    </div>
  );
};

export default Header;

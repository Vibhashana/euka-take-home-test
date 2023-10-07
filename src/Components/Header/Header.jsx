import styles from "./Header.module.scss";
import { logo } from "../../assets/images";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="Euka logo" className={styles.img} />
      <span>email</span>
    </div>
  );
};

export default Header;

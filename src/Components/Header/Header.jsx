import styles from "./Header.module.scss";
import { logo } from "../../assets/images";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="Euka logo" className={styles.img} />
      <span className={styles.email}>sahan@gmail.com</span>
    </div>
  );
};

export default Header;

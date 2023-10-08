import styles from "./Header.module.scss";
import { logo } from "../../assets/images";
import { IconLogout } from "@tabler/icons-react";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="Euka logo" className={styles.img} />
      <span className={styles.controls}>
        <span className={styles.email}>sahan@gmail.com</span>
        <button className={styles.logoutBtn} title="Logout">
          <IconLogout size={16} />
        </button>
      </span>
    </div>
  );
};

export default Header;

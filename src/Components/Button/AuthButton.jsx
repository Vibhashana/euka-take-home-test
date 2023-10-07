import { googleIcon, microsoftIcon, appleIcon } from "../../assets/images";
import styles from "./AuthButton.module.scss";

const AuthButton = ({ provider, label }) => {
  let icon = "";

  switch (provider) {
    case "google":
      icon = googleIcon;
      break;

    case "microsoft":
      icon = microsoftIcon;
      break;

    case "apple":
      icon = appleIcon;
      break;

    default:
      icon = null;
  }

  return (
    <button type="button" className={styles.wrapper}>
      {icon && <img src={icon} alt="" width={16} height={16} />}
      <span>{label}</span>
    </button>
  );
};

export default AuthButton;

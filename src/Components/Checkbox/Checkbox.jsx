import { IconCheck } from "@tabler/icons-react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({
  id,
  type,
  label,
  checked,
  name,
  disabled,
  onChange,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={id} className={styles.outer}>
        <span className={styles.wrapper}>
          <input
            type="checkbox"
            id={id}
            checked={checked}
            name={name}
            onChange={onChange}
            disabled={disabled}
            className={styles.checkbox}
            {...rest}
          />
          <span className={styles.inner}>
            <IconCheck className={styles.icon} />
          </span>
        </span>
        <span className={styles.label}>{label}</span>
      </label>
    </>
  );
};

export default Checkbox;

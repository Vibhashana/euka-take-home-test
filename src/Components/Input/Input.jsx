import styles from "./Input.module.scss";

const Input = ({
  id,
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
};

export default Input;

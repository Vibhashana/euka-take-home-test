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
        className={error ? styles.hasError : styles.input}
        {...rest}
      />
      {error && <span className={styles.error}>{error}</span>}
    </>
  );
};

export default Input;

import styles from "./Pill.module.scss";

const Pill = ({ content, className }) => {
  return <div className={`${styles.wrapper} ${className}`}>{content}</div>;
};

export default Pill;

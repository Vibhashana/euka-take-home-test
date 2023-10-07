import styles from "./Card.module.scss";

const Card = ({ selected, children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Card;

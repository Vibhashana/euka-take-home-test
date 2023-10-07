import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import content from "../../contents/term";
import styles from "./Term.module.scss";

const Term = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(content);
  }, []);

  return (
    <div className="container | flow">
      <h1 className="text-center">{data.title}</h1>
      {data.description && <p>{data.description}</p>}
      <div className={styles.wrapper}>
        {data.terms?.map((term, key) => (
          <button type="button" key={`term-${key}`} className={styles.item}>
            <Card>
              {term.promotion && (
                <span className={styles.promotion}>{term.promotion}</span>
              )}
              <h2 className={styles.title}>{term.title}</h2>
              <div className={styles.period}>{term.period}</div>
              <div className={styles.amount}>{term.amount}</div>
              <ul className={styles.benefits}>
                {term.benefits?.map((benefit, key) => (
                  <li key={`benefit-${key}`}>{benefit}</li>
                ))}
              </ul>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Term;

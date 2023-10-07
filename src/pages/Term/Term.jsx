import { useState, useEffect } from "react";
import content from "../../contents/term";
import styles from "./Term.module.scss";
import Card from "../../Components/Card";
import BottomNav from "../../Components/BottomNav";
import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";

const Term = () => {
  const navigateTo = useNavigate();
  const { term, setTerm, grade } = useStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    // if (grade === "") {
    //   navigateTo("/grade");
    // }

    setData(content);

    const savedTerm = localStorage.getItem("term");

    if (savedTerm) {
      setTerm(savedTerm);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("term", term);
  }, [term]);

  return (
    <div className="container | flow">
      <h1 className="text-center">{data.title}</h1>
      {data.description && <p>{data.description}</p>}
      <div className={styles.wrapper}>
        {data.terms?.map((termItem) => (
          <Card selected={term === termItem.name} key={termItem.name}>
            <button
              type="button"
              className={styles.item}
              onClick={() => setTerm(termItem.name)}
            >
              {termItem.promotion && (
                <span className={styles.promotion}>{termItem.promotion}</span>
              )}
              <h2 className={styles.title}>{termItem.title}</h2>
              <div className={styles.period}>{termItem.period}</div>
              <div className={styles.amount}>{termItem.amount}</div>
              <ul className={styles.benefits}>
                {termItem.benefits?.map((benefit, key) => (
                  <li key={`benefit-${key}`}>{benefit}</li>
                ))}
              </ul>
            </button>
          </Card>
        ))}
      </div>
      <BottomNav back="/grade" next="/success" isNextBlocked={term === ""} />
    </div>
  );
};

export default Term;

import { useState, useEffect } from "react";
import styles from "./Grade.module.scss";
import content from "../../contents/grade";
import Card from "../../Components/Card";
import Pill from "../../Components/Pill";
import BottomNav from "../../Components/BottomNav";

const Grade = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(content);
  }, []);

  return (
    <div className="container | flow">
      <h1 className="text-center">{data.title}</h1>
      {data.description && <p>{data.description}</p>}

      <div className={styles.wrapper}>
        {data.grades?.map((grade) => (
          <button type="button" key={grade.name} className={styles.item}>
            <Card>
              <div className={styles.inner}>
                <h2 className={styles.title}>{grade.title}</h2>
                <p className={styles.description}>{grade.description}</p>
                <img src={grade.icon} alt="" className={styles.icon} />
                <Pill content={grade.label} className="mt-auto" />
              </div>
            </Card>
          </button>
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default Grade;

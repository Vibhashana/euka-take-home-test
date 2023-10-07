import { useState, useEffect } from "react";
import styles from "./Grade.module.scss";
import content from "../../contents/grade";
import Card from "../../Components/Card";
import Pill from "../../Components/Pill";
import BottomNav from "../../Components/BottomNav";
import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";

const Grade = () => {
  const navigateTo = useNavigate();
  const { grade, setGrade, email } = useStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (email === "") navigateTo("/");
    setData(content);
  }, []);

  return (
    <div className="container | flow">
      <h1 className="text-center">{data.title}</h1>
      {data.description && <p>{data.description}</p>}

      <div className={styles.wrapper}>
        {data.grades?.map((gradeItem) => (
          <button
            type="button"
            key={gradeItem.name}
            className={styles.item}
            onClick={() => setGrade(gradeItem.name)}
          >
            <Card selected={grade === gradeItem.name}>
              <div className={styles.inner}>
                <h2 className={styles.title}>{gradeItem.title}</h2>
                <p className={styles.description}>{gradeItem.description}</p>
                <img src={gradeItem.icon} alt="" className={styles.icon} />
                <Pill content={gradeItem.label} className="mt-auto" />
              </div>
            </Card>
          </button>
        ))}
      </div>
      <BottomNav back="/" next="/term" isNextBlocked={grade === ""} />
    </div>
  );
};

export default Grade;

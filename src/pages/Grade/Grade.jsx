import { useState, useEffect } from "react";
import styles from "./Grade.module.scss";
import content from "../../contents/grade";
import Card from "../../Components/Card";
import Pill from "../../Components/Pill";
import BottomNav from "../../Components/BottomNav";
import useStore from "../../store";
import { useNavigate } from "react-router-dom";

const Grade = () => {
  const navigateTo = useNavigate();
  const { userData, setUserData } = useStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(content);
  }, []);

  return (
    <div className="container | flow">
      <h1 className="text-center">{data.title}</h1>
      {data.description && <p>{data.description}</p>}

      <div className={styles.wrapper}>
        {data.grades?.map((gradeItem) => (
          <Card
            selected={userData.grade === gradeItem.name}
            key={gradeItem.name}
          >
            <button
              type="button"
              className={styles.item}
              onClick={() => setUserData("grade", gradeItem.name)}
            >
              <div className={styles.inner}>
                <h2 className={styles.title}>{gradeItem.title}</h2>
                <p className={styles.description}>{gradeItem.description}</p>
                <img
                  src={gradeItem.icon}
                  alt=""
                  className={styles.icon}
                  width={64}
                  height={64}
                />
                <Pill content={gradeItem.label} className="mt-auto" />
              </div>
            </button>
          </Card>
        ))}
      </div>
      <BottomNav back="/" next="/term" isNextBlocked={userData.grade === ""} />
    </div>
  );
};

export default Grade;

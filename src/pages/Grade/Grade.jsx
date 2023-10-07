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
  const {
    email,
    setEmail,
    newsletter,
    setNewsletter,
    grade,
    setGrade,
    term,
    setTerm,
  } = useStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(content);

    const savedGrade = localStorage.getItem("grade");
    const savedEmail = localStorage.getItem("email");

    if (savedGrade) {
      setGrade(savedGrade);
    }

    // if (savedEmail === "") {
    //   navigateTo("/");
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem("grade", grade);
    localStorage.setItem("email", email);
  }, [grade, email]);

  return (
    <div className="container | flow">
      <h1 className="text-center">{data.title}</h1>
      {data.description && <p>{data.description}</p>}

      <div className={styles.wrapper}>
        {data.grades?.map((gradeItem) => (
          <Card selected={grade === gradeItem.name} key={gradeItem.name}>
            <button
              type="button"
              className={styles.item}
              onClick={() => setGrade(gradeItem.name)}
            >
              <div className={styles.inner}>
                <h2 className={styles.title}>{gradeItem.title}</h2>
                <p className={styles.description}>{gradeItem.description}</p>
                <img src={gradeItem.icon} alt="" className={styles.icon} />
                <Pill content={gradeItem.label} className="mt-auto" />
              </div>
            </button>
          </Card>
        ))}
      </div>
      <BottomNav back="/" next="/term" isNextBlocked={grade === ""} />
    </div>
  );
};

export default Grade;

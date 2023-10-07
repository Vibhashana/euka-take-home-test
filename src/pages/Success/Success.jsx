import { useState, useEffect } from "react";
import styles from "./Success.module.scss";
import content from "../../contents/success";
import { Button } from "../../Components/Button";
import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [data, setData] = useState([]);
  const { setEmail, setNewsletter, setGrade, setTerm } = useStore();
  const navigateTo = useNavigate();

  useEffect(() => {
    setData(content);
  }, []);

  const handleOnClick = () => {
    setEmail("");
    setNewsletter(false);
    setGrade("");
    setTerm("");

    localStorage.removeItem("email");
    localStorage.removeItem("newsletter");
    localStorage.removeItem("grade");
    localStorage.removeItem("term");

    navigateTo("/");
  };

  return (
    <div className="container | flow">
      <h1 className="text-center">{data.title}</h1>
      {data.description && (
        <p className={styles.description}>{data.description}</p>
      )}
      <div className={styles.buttonWrapper}>
        <Button variant="secondary" onClick={handleOnClick}>
          Enrol another student
        </Button>
        <Button variant="primary">Begin onboarding</Button>
      </div>
    </div>
  );
};

export default Success;

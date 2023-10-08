import { useState, useEffect } from "react";
import styles from "./Success.module.scss";
import content from "../../contents/success";
import { Button } from "../../Components/Button";
import useStore from "../../store";
import { useNavigate } from "react-router-dom";
import { success } from "../../assets/images";

const Success = () => {
  const [data, setData] = useState([]);
  const { userData, setUserData } = useStore();
  const navigateTo = useNavigate();

  useEffect(() => {
    setData(content);
  }, []);

  const handleOnClick = () => {
    setUserData("email", "");
    setUserData("newsletter", false);
    setUserData("grade", "");
    setUserData("term", "");

    localStorage.removeItem("userData");

    navigateTo("/");
  };

  return (
    <div className="container | flow">
      <img src={success} alt="" height={117} className="mx-auto" />
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

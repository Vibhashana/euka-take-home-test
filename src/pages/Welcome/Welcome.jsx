import styles from "./Welcome.module.scss";
import content from "./../../contents/welcome";
import { useEffect, useState } from "react";
import { Button, AuthButton } from "./../../Components/Button";
import Input from "../../Components/Input";
import { useNavigate } from "react-router-dom";
import useStore from "../../store";
import Checkbox from "../../Components/Checkbox";

const Welcome = () => {
  const navigateTo = useNavigate();
  const { userData, setUserData } = useStore();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setData(content);
  }, []);

  const isValidEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (error === "") {
      navigateTo("/grade");
    }
  };

  const handleEmailChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError("Please enter a valid email address");
      setIsSubmitDisabled(true);
    } else {
      setError("");
      setIsSubmitDisabled(false);
    }
    setUserData("email", e.target.value);
  };

  return (
    <div className={`container | flow ${styles.container}`}>
      <h1 className="text-center">{data.title}</h1>
      <p className="text-center">{data.description}</p>
      <form action="" className="flow">
        <div>
          <Input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            id="email"
            label="Email Address"
            autoComplete="email"
            value={userData.email}
            onChange={handleEmailChange}
            error={error}
          />
        </div>
        <div>
          <Checkbox
            name="newsletter"
            id="newsletter"
            onChange={() => setUserData("newsletter", !userData.newsletter)}
            checked={userData.newsletter == true}
            label="Keep me up to date on news and exclusive offers"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size="full"
          onClick={handleNext}
          disabled={isSubmitDisabled && userData.email === ""}
        >
          Next
        </Button>
      </form>

      <p className="text-center">
        Already have an account? <a href="/">Sign in</a>
      </p>

      <div className={styles.divider}>
        <span className={styles.dividerText}>OR</span>
      </div>

      <AuthButton provider="google" label="Continue with Google" />
      <AuthButton
        provider="microsoft"
        label="Continue with Microsoft account"
      />
      <AuthButton provider="apple" label="Continue with Apple" />
    </div>
  );
};

export default Welcome;

import styles from "./Welcome.module.scss";
import content from "./../../contents/welcome";
import { useEffect, useState } from "react";
import { Button, AuthButton } from "./../../Components/Button";
import Input from "../../Components/Input";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(content);
  }, []);

  const navigateTo = useNavigate();

  const handleNext = () => {
    navigateTo("/grade");
  };

  return (
    <div className="container | flow">
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
          />
        </div>
        <div>
          <input type="checkbox" name="newsletter" id="newsletter" />
          <label htmlFor="newsletter">
            Keep me up to date on news and exclusive offers
          </label>
        </div>
        <Button variant="primary" onClick={handleNext}>
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

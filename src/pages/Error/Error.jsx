import { useState, useEffect } from "react";
import content from "../../contents/error";
import { Button } from "../../Components/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const [data, setData] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    setData(content);
  }, []);

  return (
    <div className="container | flow">
      <h1 className="text-center">{data.title}</h1>
      {data.description && <p className="text-center">{data.description}</p>}
      <div className="text-center">
        <Button variant="primary" onClick={() => navigateTo("/")}>
          Go to home page
        </Button>
      </div>
    </div>
  );
};

export default Error;

import { useNavigate } from "react-router-dom";
import { Button } from "./../Button";

const BottomNav = ({ back, isBackBlocked, next, isNextBlocked }) => {
  const navigateTo = useNavigate();

  return (
    <>
      <div className="flex space-between">
        <Button
          variant="secondary"
          onClick={() => navigateTo(back)}
          disabled={isBackBlocked}
        >
          Back
        </Button>
        <Button
          variant="primary"
          onClick={() => navigateTo(next)}
          disabled={isNextBlocked}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default BottomNav;

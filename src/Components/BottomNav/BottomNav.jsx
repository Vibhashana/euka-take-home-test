import { Button } from "./../Button";

const BottomNav = () => {
  return (
    <>
      <div className="flex space-between">
        <Button variant="secondary">Back</Button>
        <Button variant="primary">Next</Button>
      </div>
    </>
  );
};

export default BottomNav;

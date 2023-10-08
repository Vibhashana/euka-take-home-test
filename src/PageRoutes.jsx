import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import useStore from "./store";
import { useEffect } from "react";
import Welcome from "./pages/Welcome";
import Grade from "./pages/Grade";
import Term from "./pages/Term";
import Success from "./pages/Success";
import Error from "./pages/Error";

const PageRoutes = () => {
  const navigateTo = useNavigate();
  const { userData } = useStore();

  const getStep = () => {
    if (!userData.email) {
      return "/";
    }

    if (!userData.grade) {
      return "/grade";
    }

    if (!userData.term) {
      return "/term";
    }

    return "/success";
  };

  useEffect(() => {
    const step = getStep();
    navigateTo(step);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/grade" element={<Grade />} />
      <Route path="/term" element={<Term />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PageRoutes;

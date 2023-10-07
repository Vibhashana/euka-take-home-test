import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Grade from "./pages/Grade";
import Term from "./pages/Term";
import Congrats from "./pages/Congrats";
import Header from "./Components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="page">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/grade" element={<Grade />} />
          <Route path="/term" element={<Term />} />
          <Route path="/congrats" element={<Congrats />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

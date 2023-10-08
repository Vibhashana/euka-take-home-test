import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./PageRoutes";
import Header from "./Components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="page">
        <PageRoutes />
      </div>
    </Router>
  );
};

export default App;

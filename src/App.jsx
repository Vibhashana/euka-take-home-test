import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./PageRoutes";
import Header from "./Components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="page">
        <PageRoutes />
      </main>
    </Router>
  );
};

export default App;

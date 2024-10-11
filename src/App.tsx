// styles
import "./utils/styles/global.scss";

// types
import { ReactElement } from "react";

// hooks | library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// views
import LandingPage from "./views/landingPage/LandingPage";

function App(): ReactElement {
  return (
    <>
      <Router basename={'/components_demo'}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

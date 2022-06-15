import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Category from "./pages/Category";

const App = () => {
  const [state, setState] = useState({
    items: [],
  });
  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/category/:type" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import './App.css'
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Special from "./pages/Special";
import Service from "./pages/Service";
import About from "./pages/About";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/special" element={<Special />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
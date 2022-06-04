import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import Events from "./components/pages/Events";
import Main from "./components/pages/Main";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="rolunk" element={<AboutUs />} />
          <Route path="esemenyek" element={<Events />} />
          <Route index element={<Main />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;

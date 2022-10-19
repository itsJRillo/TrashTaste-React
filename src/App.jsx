import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Inicio from "./pages/Inicio";
import AfterDark from "./pages/AfterDark";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence wait>
        <Routes>
          <Route>
            <Route index element={<Inicio />} />
            <Route path="after-dark" element={<AfterDark />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;

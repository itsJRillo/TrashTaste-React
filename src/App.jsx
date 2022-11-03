import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import AfterDark from "./pages/AfterDark";
import { AnimatePresence } from "framer-motion";
import { VideoProvider } from "./context/VideoProvider";

const App = () => {
  return (
    <VideoProvider>
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
    </VideoProvider>
  );
};

export default App;

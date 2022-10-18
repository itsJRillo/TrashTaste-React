import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import AfterDark from "./pages/AfterDark"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route index element={<Inicio/>}/>
          <Route path="after-dark" element={<AfterDark/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Carrinho from "./pages/carrinho";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
        </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Logger from "./pages/Logger";

function App() {
  return (
    <Router>
    <div className="App">      
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/:name' element={<Logger />} />
          <Route path='logger' element={<Logger />} />
            
        </Routes>     
    </div>
    </Router>
  );
}

export default App;

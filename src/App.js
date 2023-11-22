import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddLink from "./components/AddLink";
import Redirecter from './components/Redirecter'
import NotFound from './components/NotFound'

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="add" element={<AddLink/>} />
                  <Route path="/" element={<AddLink/>} />
                  <Route path="404" element={<NotFound/>} />
                  <Route path="*" element={<Redirecter/>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

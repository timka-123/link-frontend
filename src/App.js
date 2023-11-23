import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddLink from "./components/AddLink";
import Redirecter from './components/Redirecter'
import NotFound from './components/NotFound'
import {React} from "react";

function App() {
  return (
      <div className="App">
          <h3 className="title"><a href="/" className="href">Timka ShortLink</a></h3>
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

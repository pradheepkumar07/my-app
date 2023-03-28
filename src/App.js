import React from "react";
import Home from "./Home";
import About from "./About";
import SignIn from "./Signin";
import Career from "./Career";
import { Route,Routes,BrowserRouter} from "react-router-dom";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";

function App(){
    return(
      <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />}>
          <Route exact path="/content1" element={<Content1 />} />
          <Route exact path="/content2" element={<Content2 />} />
          <Route exact path="/content3" element={<Content3 />} />
        </Route>
      </Routes>
      </div>
    );
}

export default App;
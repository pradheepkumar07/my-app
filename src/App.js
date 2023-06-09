import React from "react";
import Home from "./Home";
import About from "./About";
import SignIn from "./SignIn";
import Career from "./Career";
import { Route,Routes} from "react-router-dom";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import BasicForm from "./Form";
import ReduxSample from './redux';

function App(){
    return(
      <div className="app">
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="login" element={<SignIn />} />
        <Route path="career" element={<Career />} />
        <Route path="form" element={<BasicForm />}/>
        <Route path="redux" element={<ReduxSample />} />
        <Route path="about" element={<About />}>
          <Route exact path="content1" element={<Content1 />} />
          <Route exact path="content2" element={<Content2 />} />
          <Route exact path="content3" element={<Content3 />} />
          </Route>
          </Route>
          <Route path="*" element={<h2>404 Page not found </h2>}/>
      </Routes>
      </div>
    );
}

export default App;
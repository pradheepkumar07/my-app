import React from "react";
import { Link,Outlet } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h2> Welcome to the homepage</h2>
            <li><Link to="career">Career</Link></li>
            <li><Link to="signin">SignIn</Link></li>
            <li><Link to="form">Form</Link></li>
            <li><Link to="about">About</Link></li>
            <Outlet/>
        </div>   
    );
}

export default Home;
import React from "react";
import { Link,Outlet } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h2> Welcome to the homepage</h2>
            <li><Link to="career">career</Link></li>
            <li><Link to="form">form</Link></li>
            <li><Link to="about">about</Link></li>
            <Outlet/>
        </div>   
    );
}

export default Home;
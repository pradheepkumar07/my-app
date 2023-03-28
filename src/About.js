import React from "react";
import { Link,Outlet } from "react-router-dom";


const About = () => {
    return(
        <div>
            <h2> Welcome to the Aboutpage</h2>
            <ul>
                <li><Link to="/content1">Content1</Link></li>
                <li><Link to="/content2">Content1</Link></li>
                <li><Link to="/content3">Content1</Link></li>
            </ul>
            <Outlet/>
        </div>   
    );
}

export default About;
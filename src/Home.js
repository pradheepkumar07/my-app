import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
        <>
        <main>
            <h2> Welcome to the homepage</h2>
            
        </main>
        <nav>
            <Link to="/Home">Home</Link>
        </nav>
        </>
    );
}

export default Home;
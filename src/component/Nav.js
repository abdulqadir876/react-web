import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style/navbar.css";
const Nav = () =>{
    const [showLinks, setShowLinks] = useState(false);
    return(
        <header>
        <div className="navbar">
        <div className="logo">
            <h2>Abdikadir Mohamed</h2>
        </div>
        <div className="leftSide">
            <div className="links" id={showLinks ? "hidden" : ""}>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
            </div>
           
            
        </div> <i className="fa fa-bars burger" onClick={()=> setShowLinks(!showLinks)}></i>
    </div>
    </header>
    );
}
export default Nav;

{/* <Link to="/">Home</Link>
<Link to="/resume">Resume</Link>
<Link to="/contact">Contact</Link> */}
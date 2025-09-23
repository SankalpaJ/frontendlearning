import { Link, Routes } from "react-router-dom";

export default function Navbar() {
    return (
// linking like <a href="url">Home</a>
<div>
        <nav className="nav"> 
                <Link to="/home">Home</Link> 
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
        </nav>  
    </div>  
    )
}
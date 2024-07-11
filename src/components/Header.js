import { LOGO_URL } from "../utils/constants";
import '../../Index.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
const Header = () => {

    const [btnName, setBtnName] = useState("Login")
    console.log("Header Renders");
    useEffect(() => {
        console.log("useEffect called");
    }, [btnName])
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About Us</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact Us</li>
                    </Link>
                    <li>Cart</li>
                    <button className="login"
                        onClick={() =>
                            btnName === "Login" ? setBtnName("Logout")
                                : setBtnName("Login")}>
                        {btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;



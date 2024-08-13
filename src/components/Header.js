import { LOGO_URL } from "../utils/constants";
import '../../Index.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useOnlinestatus from "../utils/useOnlinestatus";
const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlinestatus = useOnlinestatus();

    console.log("Header Renders");
    useEffect(() => {
        console.log("useEffect called");
    }, [btnName])
    return (
        <div className="flex justify-between bg-pink-100 drop-shadow-md border border-r-2 sm:bg-yellow-50 lg:bg-green-50">
            <div className='logo-container bg-pink-100'>
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className='nav-items p-5'>
                <ul className="flex p-4 m-4">
                    <li className="pl-4 pr-4">Online Status : {onlinestatus? "🟩": "🔴"}</li>
                    <Link to="/">
                        <li className="pl-4 pr-4">Home</li>
                    </Link>
                    <Link to ="/grocery">
                        <li className="pl-2 pr-4">Grocery</li> 
                    </Link>
                    <Link to="/about">
                        <li className="pl-2 pr-2">About Us</li>
                    </Link>
                    <Link to="/contact">
                        <li className="pl-2 pr-2">Contact Us</li>
                    </Link>
                    <li className="pl-2 pr-4">Cart</li>
                    <button className="login"
                        onClick={() => btnName === "Login" ? setBtnName("Logout"): setBtnName("Login")}>{btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;



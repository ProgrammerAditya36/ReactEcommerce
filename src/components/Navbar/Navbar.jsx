import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
    // navList Data
    const user = JSON.parse(localStorage.getItem("users"));
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear("users");
        navigate("/login");
    };
    const cartItems = useSelector((state) => state.cart);
    const navList = (
        <ul className="text-md flex space-x-3 px-5 font-medium text-white">
            {/* Home */}
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            {/* All Product */}
            <li>
                <Link to={"/allproduct"}>All Product</Link>
            </li>
            {/* Signup */}
            {!user ? (
                <li>
                    <Link to={"/signup"}>Signup</Link>
                </li>
            ) : (
                ""
            )}

            {!user ? (
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
            ) : (
                ""
            )}
            {user?.role === "user" && (
                <li>
                    <Link to={"/user-dashboard"}>User:{user?.name}</Link>{" "}
                </li>
            )}
            {user?.role === "admin" && (
                <li>
                    <Link to={"/admin-dashboard"}>Admin:{user?.name}</Link>{" "}
                </li>
            )}
            {user && (
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            )}

            <li>
                <Link to={"/cart"}>Cart ({cartItems.length})</Link>
            </li>
        </ul>
    );
    return (
        <nav className="sticky top-0 bg-blue-600">
            {/* main  */}
            <div className="items-center py-3 lg:flex lg:justify-between lg:px-3">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={"/"}>
                        <h2 className="text-center text-2xl font-bold text-white">
                            E-Bharat
                        </h2>
                    </Link>
                </div>
                {/* right  */}
                <div className="right mb-4 flex justify-center lg:mb-0">
                    {navList}
                </div>
                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
};
export default Navbar;

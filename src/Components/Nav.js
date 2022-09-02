import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className="navbar rounded-pill bg-black">
                <form className="container-fluid  justify-content-start">
                    <Link className="btn rounded-pill border border-0 btn-outline-success" to="/" type="button">
                        FAN SIGNUP
                    </Link>
                    <Link className="btn rounded-pill border border-0 btn-outline-success btn-sm" to="/Talent" type="button">
                        TALENT SIGNUP
                    </Link>
                </form>
            </nav>
        </>
    );
};

export default Nav;

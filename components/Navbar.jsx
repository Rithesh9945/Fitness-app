import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    let [menu, setMenu] = useState(false)
    let dispatch = useDispatch();

    let { pathname: path } = useLocation();

    return (
        <nav>
            <Link to="/home">
                <div id="logo">
                    <h2>Fit-Bit  </h2>
                    <i class='bx bx-dumbbell'></i>
                </div>
            </Link>
            <div className="nav-links">

                {path == "/trainerdashboard" && <Link to="/workouts">Workouts</Link>}

                {path !== "/trainerdashboard" &&
                    <>
                        <Link to="">Trainer</Link>
                        <Link to="/workouts">Workouts</Link>
                        <Link to="/myworkouts">My workouts</Link>
                        <Link to="/bmi">BMI Calculator</Link>
                        <Link to="/profile">Profile</Link>
                    </>
                }
            </div>

            <div className="logout-btn">
                <button onClick={() => { dispatch({ type: "logout", payload: null }) }}>Logout</button>
            </div>

            <div className="hamberger"
                onClick={() => { setMenu(!menu) }}
            >
                <i class='bx bx-menu'></i>
            </div>

            {menu && <div className="menu">
                <Link to="/workouts">Trainer</Link>
                <Link to="">Workouts</Link>
                <Link to="">My workouts</Link>
                <Link to="/bmi">BMR Calculator</Link>
                <Link to="">Profile</Link>
                <button>Logout</button>
            </div>}
        </nav>
    );
}

export default Navbar;
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {

    let user = useSelector((state) => { return state.user });

    let dispatch = useDispatch();

    return (
            <div className="profile-page-cont">
                <div className="profile-page">
                    <div className="avatar">
                        <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1683041582~exp=1683042182~hmac=2e167fd215ada580351570949b79fcf35309c6ab68eef8cf145a479000786ea1" alt="" />
                        <h1>{user.username} </h1>
                        <button onClick={() => { dispatch({ type: "logout", payload: null }) }} >
                            logout
                        </button>
                    </div>
                    <div className="info">
                        <h2>information</h2>
                        <hr />
                        <div className="details-1">

                            <label><span>Name</span>{user.username}</label>
                            <label><span>Email</span>{user.email}</label>
                            <label><span>Gender</span>{user.gender}</label>
                            <label><span>Age</span>{user.age}</label>
                        </div>
                        <hr />
                        <Link to="/home">&lt; go back to dashboard</Link>
                    </div>
                </div>
            </div>
    );
}

export default Profile;
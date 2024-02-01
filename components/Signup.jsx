import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const [userkind, setUserkind] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    let navigate =  useNavigate();


    let handleSignup = (e)=>{
        e.preventDefault();

        let accountDetails = {
            username , email , password , age , gender
        }

        let config =  { 
            method : "POST",
            headers : {"Content-Type" : "application/json"} ,
            body : JSON.stringify(accountDetails)
        } 

        let api = userkind==="user" ? "http://localhost:4000/users" : 
                                      "http://localhost:4000/trainers"

        fetch( api , config)
        .then(()=>{ 
            alert("Signup successfull");
            navigate("/login")

        })

    }


    return ( 
        <div className="signup-cont">
            <div className='form-cont'>
                <h1>Register</h1>
                <form onSubmit={handleSignup}>
                    <input type="text" placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                    <input type="text" placeholder='Confirm password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} required/>
                    <input type="number" placeholder='Age' value={age} onChange={(e)=>{setAge(e.target.value)}} min="18" max="99" required/>
                    
                    <fieldset>
                        <legend align="center">Gender</legend>
                        <label htmlFor='male'><input type="radio" id='male' name='gender' onClick={()=>{setGender("male")}}/> Male</label>
                        <label htmlFor='female'><input type="radio" id="female" name='gender' onClick={()=>{setGender("female")}}/> Female</label>
                    </fieldset>

                    <fieldset>
                        <legend align="center">Signup as</legend>
                        <label htmlFor='user'><input type="radio" id='user' name='kind'  onClick={()=>{setUserkind("user")}}/> User</label>
                        <label htmlFor='trainer'><input type="radio" id="trainer"  name='kind' onClick={()=>{setUserkind("trainer")}}/> Trainer</label>
                    </fieldset>

                    <input type="submit" value="Signup"/>
                </form>
            </div>
            <span>Already have an account ? <Link to="/login">Signin here </Link></span>
        </div>
    );
}
 
export default Signup;
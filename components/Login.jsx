import { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = ( {add_user} ) => {

    const [userkind, setUserkind] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    let handleLogin = (e)=>{
        e.preventDefault();

        let api = userkind==="user" ? "http://localhost:4000/users" : 
                                      "http://localhost:4000/trainers"
        
        async function fetchCode()
        {
           let res = await fetch(api)
           let data =  await res.json()


           let userdetails = data.find((user)=>{  return email === user.email  });

           if(userdetails==undefined)
           {
                alert("invalid email !")
           }
           else if(userdetails.password != password)
           {
                alert("wrong password ! please type valid password");
           }
           else
           {
            add_user(userdetails);
            alert("login successfull");
            navigate( userkind== "user" ? "/home" : "/trainerdashboard");
           }
        }
        fetchCode();
    
    }


    return ( 
        <div className="signup-cont">
            <div className='form-cont'>
                <h1>Register</h1>
                <form onSubmit={handleLogin}>
                    <input  type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>

                    <fieldset>
                        <legend align="center">Signup as</legend>
                        <label htmlFor='user'><input type="radio" id='user' name='kind'  onClick={()=>{setUserkind("user")}}/> User</label>
                        <label htmlFor='trainer'><input type="radio" id="trainer"  name='kind' onClick={()=>{setUserkind("trainer")}}/> Trainer</label>
                    </fieldset>

                    <input type="submit" value="Login"/>
                </form>
            </div>
            <span>Dont Have an account ? <Link to="/">Signup here </Link></span>
        </div>
     );
}

let mapStateToProps = (state)=>{
    return {...state};
}

let mapdispatchToProps = (dispatch)=>{
    return{
        add_user : (user)=>{ dispatch( {type : "add_user" , payload : user }  )}
    }
}


 
export default  connect(mapStateToProps,mapdispatchToProps)(Login);
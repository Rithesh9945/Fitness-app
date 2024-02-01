import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";

const Fitness = () => {

    let dispatch = useDispatch();
    let user = useSelector((state)=>{ return state.user});

    console.log(user);

    let age = useRef();
    let weight = useRef();
    let height = useRef();
    let[calc , setCalc] = useState(false);
    let[healthdata , setHealthData] = useState(null);


    let handleCalculate = (e)=>{
        e.preventDefault();
        setCalc(true);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'da3e9d6194msh99ca5a70f09bf66p1531afjsncb0199344067',
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
        };
        
        fetch(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age.current.value}&weight=${weight.current.value}&height=${height.current.value}`, options)
        .then(response => response.json())
        .then(data =>{ setHealthData(data.data); setCalc(false)})
        .catch(err => console.error(err));
    }

    let handleUpdateHealth = ()=>{
        dispatch(
            {
                type : "updateHealth" ,
                payload : { bmi : healthdata.bmi , health : healthdata.health }
            }
        )

        fetch("http://localhost:4000/users/" + user.id , 
        {
            method : "PUT" ,
            headers : { "Content-Type" : "application/json" } ,
            body : JSON.stringify( {...user , bmi : healthdata.bmi , health : healthdata.health} )
        })

    }

    return ( 
        <div>
            <Navbar/>
            <div className='form-cont'>
                <h1>BMI Calculator</h1>
                <form onSubmit={handleCalculate} >
                    <input type="number" min="18" max="99" ref={age} placeholder='Age' required/>
                    <input type="number" ref={weight} placeholder='Weight' required/>
                    <input type="number" ref={height} placeholder='Height' required/>

                    <input type="submit" value={calc ? "Calculating......."  : "Calculate"}/>
                </form>
            </div>


            {healthdata && <div className="health">

                                <h1>BMI Rating : {healthdata.bmi} </h1>

                                <h1>Health : {healthdata.health} </h1>

                                <button onClick={handleUpdateHealth}>Save health details</button>

                            </div>}
        </div>
    );
}
 
export default Fitness;
import { useRef } from "react";
import Navbar from "./Navbar";

const Trainerdashboard = () => {

	let wName =  useRef();
    let muscle =  useRef();
    let part =  useRef();
    let eqp =  useRef();
    let gif =  useRef();


	let handleAddworkout = (e)=>{
        e.preventDefault();

        let workout = { 
            bodyPart : part.current.value ,
            equipment : eqp.current.value,
            gifUrl : gif.current.value,
            name : wName.current.value,
            target : muscle.current.value
         }

        let config = { 
            method : "POST",
            headers : { "content-Type" : "application/json" },
            body : JSON.stringify(workout)
        }

        fetch("http://localhost:4000/workouts" , config)
        .then(()=>{
            alert("New workout added succesfully");
            window.location.reload();
        })

    }
	return ( 
		<div className="trainer-dashboard">
		<Navbar/>
			<div className="form-cont">
				<h1>Add New Workouts</h1>
				<form onSubmit={handleAddworkout}>
					<input type="text" ref={wName} placeholder="Work name" />
					<input type="text" ref={muscle} placeholder="Muscle" />
					<input type="text" ref={part} placeholder="Body Part" />
					<input type="text" ref={eqp} placeholder="Equipment" />
					<input type="url" ref={gif} placeholder="Workout gif Reference" />

					<input type="submit" value="Add Workouts" />

				</form>
			</div>
		</div>
	 );
}
 
export default Trainerdashboard;
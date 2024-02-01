import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";

const Workouts = () => {

    let [workouts, setWorkouts] = useState(null);

    let user = useSelector((state) => { return state.user })
    let userdetails = { ...user }
    if (userdetails.workouts == undefined) {
        userdetails.workouts = [];
    }
    let dispatch = useDispatch()

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'da3e9d6194msh99ca5a70f09bf66p1531afjsncb0199344067',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        fetch('https://exercisedb.p.rapidapi.com/exercises', options)
            .then(response => response.json())
            .then(data => { console.log(data); setWorkouts(data) })
            .catch(err => console.error(err));
    }, [])

    let handleWorkouts = (workout) => {
        userdetails.workouts.push(workout);
        dispatch(
            {
                type: "work_added",
                payload: userdetails
            }
        )
        fetch("http://localhost:4000/users/" + user.id,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userdetails)
            })
            .then(() => { alert("workout added") })
    }

    let handleRemoveWorkouts = (wid) => {
        let start = userdetails.workouts.findIndex((w) => { return w.id == wid })
        userdetails.workouts.splice(start, 1);
        dispatch(
            {
                type: "work_added",
                payload: userdetails
            }
        )
        fetch("http://localhost:4000/users/" + user.id,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userdetails)
            })
            .then(() => { alert("remove workouts") })
    }
    return (
        <div>
            <Navbar />

            <h1>All workouts</h1>
            {workouts && <div className="all-workouts">
                {
                    workouts.map((workout) => {
                        return (
                            <div>
                                <img src={workout.gifUrl} alt="image not found" />
                                <h4>Workout name : {workout.name} </h4>
                                <p>Body part : {workout.bodyPart}</p>
                                <p>Equipment : {workout.equipment}</p>
                                {
                                    !userdetails.workouts.some((w) => { return w.id == workout.id })
                                    && <button onClick={() => { handleWorkouts(workout) }}>Add</button>
                                }
                                {
                                    userdetails.workouts.some((w) => { return w.id == workout.id })
                                    && <button onClick={() => { handleRemoveWorkouts(workout.id) }}>Remove</button>
                                }
                            </div>
                        )
                    })
                }
            </div>
            }

        </div>);
}

export default Workouts;
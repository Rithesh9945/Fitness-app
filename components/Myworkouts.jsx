import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Myworkouts = () => {

    let user = useSelector((state) => { return state.user })


    return (
        <div>
            <Navbar />

            {user && <div className="all-workouts">
                {
                    user.workouts.map((workout) => {
                        return (
                            <div>
                                <img src={workout.gifUrl} alt="image not found" />
                                <h4>Workout name : {workout.name} </h4>
                                <p>Body part : {workout.bodyPart}</p>
                                <p>Equipment : {workout.equipment}</p>
                            </div>
                        )
                    })
                }
            </div>}

        </div>);
}

export default Myworkouts;
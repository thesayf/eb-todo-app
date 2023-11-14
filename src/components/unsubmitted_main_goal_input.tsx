import React from "react";
import { useAppContext } from "../app_context";

function UnsubmittedMainGoalInput() {

    const { mainGoal, setMainGoal } = useAppContext();

    const handleLockIn = () => {
        setMainGoal((prevMainGoal) => ({
            ...prevMainGoal,
            submited: true
        }))
    }

    return(
        <div className="col-span-full md:col-span-4 h-full join">
            <input 
                className="w-full input input-lg input-bordered text-xl join-item" 
                type="text" 
                placeholder="Enter your main goal"
                value={mainGoal.description}
                onChange={(e) => setMainGoal((prevMainGoal) => ({
                    ...prevMainGoal,
                    description: e.target.value
                }))}
                 />
            <label className="label input-bordered join-item border bg-bass-100 w-40 flex justify-center items-center">
                <button onClick={handleLockIn} className="btn btn-sm btn-primary">Submit</button>
            </label>
        </div>
    )
}

export default UnsubmittedMainGoalInput;
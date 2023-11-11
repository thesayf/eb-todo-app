import React from "react";
import { useAppContext } from "../app_context";

const MainGoal: React.FC = () => {
    const { mainGoal, setMainGoal } = useAppContext();

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
            <label className="label input-bordered join-item border bg-bass-100 w-20 flex justify-center items-center">
                <input 
                    type="checkbox" 
                    className="checkbox checkbox-md checkbox-primary bg-base-100"
                    checked={mainGoal.completed}
                    onChange={(e) => setMainGoal((prevMainGoal) => ({
                        ...prevMainGoal,
                        completed: e.target.checked
                    }))} />
            </label>
        </div>
    )
}

export default MainGoal;
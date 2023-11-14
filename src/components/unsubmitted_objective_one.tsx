import React from "react"; 
import { useAppContext } from "../app_context";

function UnsubmittedObjectiveOneComponent() {

    const { objective_one, set_objective_one } = useAppContext();
    const handleSubmit = () => {
        set_objective_one((prevObjective) => ({
            ...prevObjective,
            submited: true
        }))
    }

    return(

        <label className="join w-full">
        <span className="join-item border bg-base-200 flex justify-center items-center text-xxl w-16 font-semibold">1.</span>
        <input 
            type="text" 
            placeholder="Type here" 
            className="w-full input input-bordered input-lg join-item"
            value={objective_one.description}
            onChange={(e) => set_objective_one((prevObjective) => ({
                ...prevObjective,
                description: e.target.value
            }))}
            />
            <label className="label input-bordered join-item border bg-bass-100 w-40 flex justify-center items-center">
                    <button onClick={handleSubmit} className="btn btn-sm btn-primary">Submit</button>   
            </label>
  </    label>
    )
}

export default UnsubmittedObjectiveOneComponent;
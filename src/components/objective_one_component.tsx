import React from 'react';
import { useAppContext } from '../app_context';

const ObjectiveOne: React.FC = () => {
    const { objective_one, set_objective_one } = useAppContext();

    return(
        <label className="join">
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
            <label className="label input-bordered join-item border bg-bass-100 w-20 flex justify-center items-center">
                <input 
                    type="checkbox" 
                    className="checkbox checkbox-md checkbox-primary bg-base-100"
                    onChange={(e) => set_objective_one((prevObjective) => ({
                        ...prevObjective,
                        completed: e.target.checked
                    }))}
                    />
            </label>
  </    label>
    )
}

export default ObjectiveOne;
import React from 'react';
import { useAppContext } from '../app_context';

const ObjectiveOne: React.FC = () => {

    const { objective_one, set_objective_one } = useAppContext();

    return(
        <label className="input-group input-group-lg">
        <span>1.</span>
        <input 
            type="text" 
            placeholder="Type here" 
            className="w-full input input-bordered input-lg"
            value={objective_one}
            onChange={(e) => set_objective_one(e.target.value)}
            />
  </    label>
    )
}

export default ObjectiveOne;
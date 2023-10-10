import React from 'react';
import { useAppContext } from '../app_context';

const ObjectiveThree: React.FC = () => {

    const { objective_three, set_objective_three } = useAppContext();

    return(
        <label className="input-group input-group-lg">
        <span>3.</span>
        <input 
            type="text" 
            placeholder="Type here" 
            className="w-full input input-bordered input-lg"
            value={objective_three}
            onChange={(e) => set_objective_three(e.target.value)}
            />
  </    label>
    )
}

export default ObjectiveThree;

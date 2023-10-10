import React from 'react';
import { useAppContext } from '../app_context';

const ObjectiveTwo: React.FC = () => {

    const { objective_two, set_objective_two } = useAppContext();

    return(
        <label className="input-group input-group-lg">
        <span>2.</span>
        <input 
            type="text" 
            placeholder="Type here" 
            className="w-full input input-bordered input-lg"
            value={objective_two}
            onChange={(e) => set_objective_two(e.target.value)}
            />
  </    label>
    )
}

export default ObjectiveTwo;
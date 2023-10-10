import React from "react";
import { useAppContext } from "../app_context";

const ObjectiveFour: React.FC = () => {

    const { objective_four, set_objective_four } = useAppContext();

    return(
        <label className="input-group input-group-lg">
        <span>4.</span>
        <input 
            type="text" 
            placeholder="Type here" 
            className="w-full input input-bordered input-lg"
            value={objective_four}
            onChange={(e) => set_objective_four(e.target.value)}
            />
  </    label>
    )
}

export default ObjectiveFour;
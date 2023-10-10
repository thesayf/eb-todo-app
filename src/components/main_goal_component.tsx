import React from "react";
import { useAppContext } from "../app_context";

const MainGoal: React.FC = () => {
    const { mainGoal, setMainGoal } = useAppContext();

    return(
        <div className="col-span-full md:col-span-4 h-full">
            <input 
                className="w-full input input-lg input-bordered text-xl" 
                type="text" 
                placeholder="Enter your main goal"
                value={mainGoal}
                onChange={(e) => setMainGoal(e.target.value)}
                 />
        </div>
    )
}

export default MainGoal;
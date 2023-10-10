import React from "react";

const MainGoal: React.FC = () => {
    return(
        <div className="col-span-full md:col-span-4 h-full">
            <input className="w-full input input-lg input-bordered text-xl" type="text" placeholder="Enter your main goal" />
        </div>
    )
}

export default MainGoal;
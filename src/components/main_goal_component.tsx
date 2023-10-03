import React from "react";

const MainGoal: React.FC = () => {
    return(
        <div className="col-span-full md:col-span-3 h-full">
            <input type="text" placeholder="Enter Main Goal" className="input input-ghost w-full max-w-xs" />
        </div>
    )
}

export default MainGoal;
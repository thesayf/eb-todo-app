import React from 'react';

const ObjectiveOne: React.FC = () => {
    return(
        // <div className="col-span-full md:col-span-1 border row-span-1 h-12">Objective 1</div>
        <label className="input-group input-group-lg">
        <span>1.</span>
        <input type="text" placeholder="Type here" className="w-full input input-bordered input-lg" />
  </    label>
    )
}

export default ObjectiveOne;
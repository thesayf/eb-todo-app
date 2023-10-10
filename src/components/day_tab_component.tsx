import React from "react";

const DAYTAB: React.FC = () => {
    return(
        <div className="flex justify-end mb-4">
            <div className="btn-group">
                <button className="btn btn-sm btn-active">Today</button>
                <button className="btn btn-sm">Tommorow</button>
            </div>
        </div>

    );
}  

export default DAYTAB;
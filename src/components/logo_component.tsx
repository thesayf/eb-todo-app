import React from "react";

const Logo: React.FC = () => {

    return(
        <div className="stats shadow">

                <div className="stat place-items-center">
                    <div className="stat-title">Time Slots Completed</div>
                    <div className="stat-value">0/0</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>
                
                <div className="stat place-items-center">
                    <div className="stat-title">Tasks Completed</div>
                    <div className="stat-value text-secondary">0/0</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Main Goal Completed</div>
                    <div className="stat-value text-secondary">Yes</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>
                
                <div className="stat place-items-center">
                    <div className="stat-title">Key Objectives Completed</div>
                    <div className="stat-value">0/4</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Performance Rating</div>
                    <div className="stat-value">Elite</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                
        </div>
    )
}

export default Logo
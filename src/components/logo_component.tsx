import React from "react";
import { useAppContext } from "../app_context";

const Logo: React.FC = () => {

    const { timeSlots } = useAppContext();
    const { mainGoal } = useAppContext();
    const { objective_one } = useAppContext();
    const { objective_two } = useAppContext();
    const { performanceRating } = useAppContext();
    const submitedTimeSLotCount = timeSlots.filter((timeSlot) => timeSlot.isSubmitted === true).length
    const completedTimeSlotCount = timeSlots.filter((timeSlot) => timeSlot.status === "completed").length
    const tasksCount = timeSlots.map(timeSlot => timeSlot.tasks.length).reduce((a, b) => a + b, 0);
    const mainGoalCompleted = mainGoal.completed ? "Yes" : "No"
    const tasksCompleted = timeSlots.filter((slot) => slot.isSubmitted === true).map((slot) => slot.tasks.filter((task) => task.completed === true).length).reduce((a, b) => a + b, 0)
    const objectivesCompletedCount = [objective_one, objective_two].filter((objective) => objective.completed === true).length
    return(
        <div className="stats shadow">

                <div className="stat place-items-center">
                    <div className="stat-title">Time Slots Completed</div>
                    <div className="stat-value">{completedTimeSlotCount}/{submitedTimeSLotCount}</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>
                
                <div className="stat place-items-center">
                    <div className="stat-title">Tasks Completed</div>
                    <div className="stat-value text-secondary">{tasksCompleted}/{tasksCount}</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Main Goal Completed</div>
                    <div className="stat-value text-secondary">{mainGoalCompleted}</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>
                
                <div className="stat place-items-center">
                    <div className="stat-title">Key Objectives Completed</div>
                    <div className="stat-value">{objectivesCompletedCount}/2</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Performance Rating</div>
                    <div className="stat-value">{performanceRating}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                
        </div>
    )
}

export default Logo
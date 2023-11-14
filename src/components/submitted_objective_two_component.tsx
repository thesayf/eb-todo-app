import React from "react";
import { useAppContext } from "../app_context";

function SubmittedObjectiveTwoComponent() {

    const { objective_two, set_objective_two } = useAppContext();
    const { timeSlots} = useAppContext();

    const objectiveTwoTasks = timeSlots.flatMap(timeSlot => timeSlot.tasks.filter((task) => task.assignment.type === "Objective Two"))
    const totalObjectiveTwoTasks = objectiveTwoTasks.length
    const completedObjecteveTwoTasks = objectiveTwoTasks.filter(task => task.completed).length
    const mainGoalProgress = (completedObjecteveTwoTasks / totalObjectiveTwoTasks) * 100


    const handleEdit = () => {
        set_objective_two((prevObjTwo) => ({
            ...prevObjTwo,
            submited: false
        }))
    }

    const handleButtonDisplay = (): boolean => {
        return mainGoalProgress !== 100
    }

    return(
        <div className="p-4 border rounded-md flex flex-col space-y-4">
    {/* Main Content */}
    <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
            {/* Time Slot Name */}
            <div className="flex flex-1 items-center mr-4" onClick={handleEdit}>
                <h3 className="font-semibold truncate">{objective_two.description}</h3>
            </div>
            {/* Progress Bar */}
            <div className="flex flex-1 items-center mr-4">
                {
                    totalObjectiveTwoTasks === 0 ? <p className="text-gray-600">No tasks assigned</p> : <progress className="progress progress-primary w-56" value={mainGoalProgress} max="100"></progress>
                }
            </div>
            {/* Button */}
            <div className="flex items-center">
                <button onClick={() => {}} className="btn btn-sm btn-primary" disabled={handleButtonDisplay()}>Complete</button>
            </div>
        </div>
    </div>
</div>
    )
}

export default SubmittedObjectiveTwoComponent;
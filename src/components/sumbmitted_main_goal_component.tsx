import React from "react";
import { useAppContext } from "../app_context";

function SubmittedMainGoalComponent() {

    const { mainGoal, setMainGoal } = useAppContext();
    const { timeSlots} = useAppContext();

    const mainGoalTasks = timeSlots.flatMap(timeSlot => timeSlot.tasks.filter((task) => task.assignment.type === "Main Goal"))
    const totalMainGoalTasks = mainGoalTasks.length
    const completedMainGoalTasks = mainGoalTasks.filter(task => task.completed).length
    const mainGoalProgress = (completedMainGoalTasks / totalMainGoalTasks) * 100

    const handleEdit = () => {
        setMainGoal((prevMainGoal) => ({
            ...prevMainGoal,
            submited: false
        }))
    }

    const handleButtonDisplay = (): boolean => {
        return mainGoalProgress !== 100
    }
    
    return(
    <div className="col-span-full p-4 border rounded-md flex flex-col space-y-4">

    {/* Main Content */}
    <div className="flex-grow space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
            {/* Time Slot Name */}
            <div className="flex-grow mr-4 text text-lg " onClick={handleEdit}>
                <h3 className="font-semibold">{mainGoal.description}</h3>
            </div>
            <div className="flex-grow mr-4">
                {
                    totalMainGoalTasks === 0 ? <p className="text-gray-600">No tasks assigned</p> : <progress className="progress progress-primary w-56" value={mainGoalProgress} max="100"></progress>
                }
                
            </div>
            {/* Time Interval */}
            <div className="text-gray-600">
            <button onClick={() => setMainGoal((prevMainGoal) => ({
                    ...prevMainGoal,
                    completed: true
                }))} className="btn btn-sm btn-primary" disabled={handleButtonDisplay()}>Complete</button>
            </div>
        </div>
    </div>
    </div>
        )
}

export default SubmittedMainGoalComponent;
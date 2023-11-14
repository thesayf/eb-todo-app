import React from 'react'
import { Task } from '../app_context'
import { useAppContext } from '../app_context'

type SubmittedTimeSlotProps = {
    index: number;
    slotName: string;
    startTime: string;
    endTime: string;
    tasks: Task[];  
}

const SubmittedTimeSlot: React.FC<SubmittedTimeSlotProps>  = ({index, slotName, startTime, endTime, tasks}) => {
    const { timeSlots, setTimeSlots } = useAppContext();
    const tasksCompleted = tasks.filter(task => task.completed).length
    const totalTasks = tasks.length
    const calculateProgress = (tasks: Task[]) => {
        const completedTasks = tasks.filter(task => task.completed).length
        return (completedTasks / tasks.length) * 100    
    }
    const [progress, setProgress] = React.useState<number>(calculateProgress(tasks));
    const handleEdit = () => {
        const updatedTimeSlots = [...timeSlots];
        updatedTimeSlots[index].isSubmitted = false;
        setTimeSlots(updatedTimeSlots);
    }

    const handleAssignmentDisplay = (task: Task ) => {
        if (task.assignment.type === "Stand Alone Task") {
            return "Stand Alone Task";
        } else {
            return `${task.assignment.type}: ${task.assignment.description}`;
        }
    }

    const completedSlotCheck = () => {
        if (calculateProgress(tasks) === 0) {
            return "incomplete"
        } else if (calculateProgress(tasks) === 100) {
            return "completed"
        } else {
            return "partiallyCompleted"
        }
    }
    
    const handleComplete = () => {
        const updatedTimeSlots = [...timeSlots];
        updatedTimeSlots[index].status = completedSlotCheck()
        setTimeSlots(updatedTimeSlots);
    }

    const handleTaskToggle = (taskIndex: number) => {
        const updatedTimeSlots = [...timeSlots];
        updatedTimeSlots[index].tasks[taskIndex].completed = !updatedTimeSlots[index].tasks[taskIndex].completed;
        setProgress(calculateProgress(updatedTimeSlots[index].tasks));
        setTimeSlots(updatedTimeSlots);
    }
    
    return (
        <div className="col-span-full p-4 border rounded-md flex flex-col space-y-4 mt-2">
            {/* Main Content */}
            <div className="flex-grow space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    {/* Time Slot Name */}
                    <div className="flex-grow mr-4">
                        <h3 className="font-semibold">{slotName}</h3>
                    </div>
                    <div className="flex-grow mr-4">
                        <progress className="progress progress-primary w-56" value={progress} max="100"></progress>
                    </div>
                    {/* Time Interval */}
                    <div className="text-gray-600">
                        Start: {startTime}- End: {endTime}
                    </div>
                </div>

                {/* Tasks */}
                <div className="space-y-4">
                    {tasks.map((task, idx) => (
                        <div key={idx} className="card border w-full h-16 bg-base-100 shadow-xl p-2 flex flex-row items-center">
                            <span className="border-r px-2 py-1 mr-2">{idx + 1}</span>
                            <span className="flex-grow">{task.name}</span>
                            <div className="badge badge-primary">{handleAssignmentDisplay(task)}</div>
                            <div className="border-l px-2 py-1 ml-2">
                                <input 
                                    type="checkbox" 
                                    className="checkbox checkbox-primary" 
                                    checked={task.completed}
                                    onChange={() => handleTaskToggle(idx)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Edit Button */}
            <div className="mt-2 flex justify-end">
                <button 
                    className="btn btn-outline btn-primary mr-2"
                    onClick={handleEdit}
                    >
                    Edit Slot
                </button>
                {
                    progress === 100 ? <button className="btn btn-outline btn-success" onClick={handleComplete}>All Tasks Complete</button> : <button className="btn btn-outline btn-info " onClick={handleComplete}>{tasksCompleted}/{totalTasks} Tasks Complete</button>
                }
                
            </div>
        </div>

    )
}

export default SubmittedTimeSlot
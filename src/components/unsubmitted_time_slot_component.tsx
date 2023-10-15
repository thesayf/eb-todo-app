import React, {useState} from "react";
import { useAppContext } from "../app_context";
import { Task } from "../app_context";

type TimeSlotProps = {
    index: number;
    slotName: string;
    startTime: string;
    endTime: string;
    tasks: Task[];
}

const UnsubmittedTimeSlot: React.FC<TimeSlotProps> = ({index, slotName:initialSlotName, startTime:initialStartTime, endTime:initialEndTime, tasks:initialTasks }) => {
    const { timeSlots, setTimeSlots } = useAppContext();
    const [localTasks, setLocalTasks] = useState<string[]>(initialTasks.map(task => task.name));
    const [localSlotName, setLocalSlotName] = useState(initialSlotName);
    const [localStartTime, setLocalStartTime] = useState(initialStartTime);
    const [localEndTime, setLocalEndTime] = useState(initialEndTime);


    const handleSubmit = () => {
        const updatedTimeSlots = [...timeSlots];
        
        updatedTimeSlots[index].isSubmitted = true;
        updatedTimeSlots[index].name = localSlotName; // Update slot name
        updatedTimeSlots[index].startTime = localStartTime; // Update start time
        updatedTimeSlots[index].endTime = localEndTime; // Update end time
        updatedTimeSlots[index].tasks = localTasks.map((name, idx) => ({ number: idx + 1, name, completed: false }));
        
        setTimeSlots(updatedTimeSlots);
    }

    const handleTaskChange = (idx: number, value: string) => {
        const updatedTasks = [...localTasks];
        updatedTasks[idx] = value;
        setLocalTasks(updatedTasks);
    };

    const handleAddTask = () => {
        setLocalTasks([...localTasks, ""]);
    };

    const handleDeleteTask = (idx: number) => {
        const updatedTasks = [...localTasks];
        updatedTasks.splice(idx, 1);  // remove the task from the list
        setLocalTasks(updatedTasks);
    }


    return (
        <div className="col-span-full p-4 border rounded-md flex flex-col space-y-4 mt-2">
            {/* Main Content */}
            <div className="flex-grow space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    {/* Time Slot Name */}
                    <div className="flex-grow mr-4">
                        <input 
                            type="text" 
                            name="slotName" 
                            placeholder="Time Slot Name" 
                            className="border rounded-md w-full p-1"
                            value={localSlotName}
                            onChange={(e) => setLocalSlotName(e.target.value)}
                            />
                    </div>
                    {/* Time Pickers */}
                    <div className="flex space-x-4 items-center">
                        <label>Start:</label>
                        <input 
                            type="time" 
                            name="startTime" 
                            className="border rounded-md p-1" 
                            value={localStartTime}
                            onChange={(e) => setLocalStartTime(e.target.value)}
                            />
                        <label>End:</label>
                        <input 
                            type="time" 
                            name="endTime" 
                            className="border rounded-md p-1" 
                            value={localEndTime}
                            onChange={(e) => setLocalEndTime(e.target.value)}
                            />
                    </div>
                </div>

                {/* Tasks */}
                <div className="space-y-2">
                    <ul className="list-decimal pl-5">
                        {
                            localTasks.map((taskName, idx) => {
                                return (
                                    <li key={idx}>
                                        <div className="flex items-center">
                                            <input 
                                                type="text" 
                                                placeholder={`Task ${idx + 1}`} 
                                                className="border rounded-md w-full p-1 mt-2" 
                                                value={taskName}
                                                onChange={(e) => handleTaskChange(idx, e.target.value)}
                                            />
                                            <button 
                                                className="btn btn-circle ml-2 btn-xs btn-primary"
                                                onClick={() => handleDeleteTask(idx)}
                                            >
                                                x
                                            </button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button 
                        className="btn btn-outline btn-primary mt-2"
                        onClick={handleAddTask}
                        >
                        + Add Task
                    </button>
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-2 flex justify-end">
                <button 
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}



export default UnsubmittedTimeSlot;


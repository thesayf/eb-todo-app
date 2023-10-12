import React, {useState} from "react";
import { useAppContext } from "../app_context";
import SubmittedTimeSlot from "./submitted_time_slot_component";

const TimeSlot: React.FC = () => {
    const { timeSlots, setTimeSlots } = useAppContext();
    const [slotName, setSlotName] = useState<string>("");
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([]);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const handleSubmit = () => {
        const newSlot = {
            name: slotName,
            startTime: startTime,
            endTime: endTime,
            tasks: tasks.map((task, index) => {
                return {
                    number: index + 1,
                    name: task,
                    completed: false
                };
            }),
            isSubmitted: true
        };
    
        // Replace the last slot (the unsubmitted one) with the new submitted slot.
        const newTimeSlots = [...timeSlots];
        newTimeSlots[newTimeSlots.length - 1] = newSlot;
    
        setTimeSlots(newTimeSlots);
    };

    if (isSubmitted) {
        const taskObjects = tasks.map((taskName, index) => ({
            number: index + 1,
            name: taskName,
            completed: false,
        }));
    
        return (
            <SubmittedTimeSlot 
                slotName={slotName} 
                startTime={startTime} 
                endTime={endTime} 
                tasks={taskObjects} 
                onEdit={() => setIsSubmitted(false)} 
            />
        );
    }


    return (
        <div className="col-span-full p-4 border rounded-md flex flex-col space-y-4">
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
                            value={slotName}
                            onChange={(e) => setSlotName(e.target.value)}
                            />
                    </div>
                    {/* Time Pickers */}
                    <div className="flex space-x-4 items-center">
                        <label>Start:</label>
                        <input 
                            type="time" 
                            name="startTime" 
                            className="border rounded-md p-1" 
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            />
                        <label>End:</label>
                        <input 
                            type="time" 
                            name="endTime" 
                            className="border rounded-md p-1" 
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            />
                    </div>
                </div>

                {/* Tasks */}
                <div className="space-y-2">
                    <ul className="list-decimal pl-5">
                        {
                            tasks.map((task, index) => {
                                return (
                                    <li key={index}>
                                        <input 
                                            type="text" 
                                            placeholder={`Task ${index + 1}`} 
                                            className="border rounded-md w-full p-1 mt-2" 
                                            value={task}
                                            onChange={(e) => {
                                                const newTasks = [...tasks];
                                                newTasks[index] = e.target.value;
                                                setTasks(newTasks);
                                            }}
                                            />
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button 
                        className="btn btn-outline btn-primary mt-2"
                        onClick={() => setTasks([...tasks, ""])}
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



export default TimeSlot;


import React, {useState, useRef} from "react";
import { useAppContext } from "../app_context";
import { Task, Assignment } from "../app_context";

type TimeSlotProps = {
    index: number;
    slotName: string;
    startTime: string;
    endTime: string;
    tasks: Task[];
}

const UnsubmittedTimeSlot: React.FC<TimeSlotProps> = ({index, slotName:initialSlotName, startTime:initialStartTime, endTime:initialEndTime, tasks:initialTasks }) => {
    const { timeSlots, setTimeSlots } = useAppContext();
    const [localTasks, setLocalTasks] = useState<Task[]>(initialTasks);
    const [localSlotName, setLocalSlotName] = useState(initialSlotName);
    const [localStartTime, setLocalStartTime] = useState(initialStartTime);
    const [localEndTime, setLocalEndTime] = useState(initialEndTime);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const { mainGoal, objective_one, objective_two } = useAppContext();

    const handleDeleteSlot = () => {
        const updatedTimeSlots = [...timeSlots];
        updatedTimeSlots.splice(index, 1);
        setTimeSlots(updatedTimeSlots);
    }

    const assignmentOptions: Assignment[] = [
        { type: "Stand Alone Task", description: "Stand Alone Task" },
        { type: "Main Goal", description: mainGoal.description },
        { type: "Objective One", description: objective_one.description },
        { type: "Objective Two", description: objective_two.description },
    ]
    
    
    const handleSubmit = () => {
        const updatedTimeSlots = [...timeSlots];
        
        const updatedTasks = localTasks.map((task) => {
            // Assuming that each task in localTasks now has an 'id' property
            const existingTask = updatedTimeSlots[index].tasks.find(existing => existing.id === task.id);
            
            if (existingTask) {
                // If there's an existing task with the same ID, copy its completed state and other attributes
                return {
                    id: existingTask.id,
                    number: existingTask.number,
                    name: existingTask.name,
                    completed: existingTask.completed,
                    assignment: existingTask.assignment,
                                    
                };
            } else {
                // If it's a new task, set completed as false by default
                const newNumber = (updatedTimeSlots[index].tasks.length > 0) ? 
                    updatedTimeSlots[index].tasks[updatedTimeSlots[index].tasks.length - 1].number + 1 : 1;
                return {
                    id: task.id, // Assuming that the new task also comes with an ID
                    number: newNumber,
                    name: task.name,
                    completed: false,
                    assignment: task.assignment,
                };
            }
        });
        
        updatedTimeSlots[index].isSubmitted = true;
        updatedTimeSlots[index].status = "default";
        updatedTimeSlots[index].name = localSlotName; // Update slot name
        updatedTimeSlots[index].startTime = localStartTime; // Update start time
        updatedTimeSlots[index].endTime = localEndTime; // Update end time
        updatedTimeSlots[index].tasks = updatedTasks; // Assign the updated tasks
        
        setTimeSlots(updatedTimeSlots);
    }

    const handleAssignmentChange = (idx: number, value: Assignment) => {
        const updatedTasks = [...localTasks];
        updatedTasks[idx].assignment = value;
        setLocalTasks(updatedTasks);
    }

    const handleTaskChange = (idx: number, value: string) => {
        const updatedTasks = [...localTasks];
        updatedTasks[idx].name = value;
        setLocalTasks(updatedTasks);
    };

    const handleAddTask = () => {
        const newTaskId = localTasks.length > 0 ? Math.max(...localTasks.map(task => task.id)) + 1 : 1;
        setLocalTasks([...localTasks, { 
            id: newTaskId, name: "", 
            number: localTasks.length + 1, 
            completed: false, 
            assignment: assignmentOptions[0] }]);
    };

    const handleDeleteTask = (idx: number) => {
        const updatedTasks = [...localTasks];
        updatedTasks.splice(idx, 1);  // remove the task from the list
        setLocalTasks(updatedTasks);
    }

    const insertTaskBelow = (idx: number) => {
        const newTaskId = localTasks.length > 0 ? Math.max(...localTasks.map(task => task.id)) + 1 : 1;
        const updatedTasks = [...localTasks];
        updatedTasks.splice(idx + 1, 0, { 
            id: newTaskId, name: "", 
            number: idx + 2, 
            completed: false, 
            assignment: assignmentOptions[0] });
        setLocalTasks(updatedTasks);
        setTimeout(() => {
            inputRefs.current[idx + 1]?.focus();
        }, 0);
    }
    
    const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
        if (e.key === 'Enter') {  // Check if Enter key was pressed
            e.preventDefault();   // Prevent any default behavior
            insertTaskBelow(idx);
        }
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
                <div className="space-y-2 ">
                <ul className="list-decimal pl-5">
            {
                localTasks.map((task, idx) => {
                    return (
                        <li key={idx}>
                            <div className="flex items-center mt-2">
                                <input 
                                    type="text" 
                                    placeholder={`Task ${idx + 1}`} 
                                    className="border rounded-md w-full p-1" 
                                    value={task.name}
                                    onChange={(e) => handleTaskChange(idx, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(e, idx)}
                                    ref={el => inputRefs.current[idx] = el}
                                />
                                <select 
                                    className="select select-bordered select-sm ml-2"
                                    value={task.assignment.type}
                                    onChange={(e) => {
                                        const option = assignmentOptions.find(option => option.type === e.target.value);
                                        if (option) {
                                            handleAssignmentChange(idx, option);
                                        }
                                    }}
                                >
                                    {
                                        assignmentOptions.map((option, idx) => {
                                            return (
                                                <option key={idx} value={option.type}>{option.description}</option>
                                            )
                                        })
                                    }
                                </select>
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
                    className="btn btn-outline btn-error mr-2"
                    onClick={handleDeleteSlot}
                >
                    Delete
                </button>
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


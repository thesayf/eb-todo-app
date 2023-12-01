import React from 'react'
import { Task } from '../app_context'
import { useAppContext } from '../app_context'
import SubmittedTaskComponent from './submitted_task_component';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type SubmittedTimeSlotProps = {
    id: string;
    slotName: string;
    startTime: string;
    endTime: string;
    tasks: Task[];  
}

const SubmittedTimeSlot: React.FC<SubmittedTimeSlotProps>  = ({id, slotName, startTime, endTime, tasks}) => {
    const { timeSlots, setTimeSlots } = useAppContext();
    const tasksCompleted = tasks.filter(task => task.completed).length
    const totalTasks = tasks.length
    const calculateProgress = (tasks: Task[]) => {
        const completedTasks = tasks.filter(task => task.completed).length
        return (completedTasks / tasks.length) * 100    
    }
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: id,
        data: {
            type: "slot",
            slot: { id, slotName, startTime, endTime, tasks}
        }
    });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const [progress, setProgress] = React.useState<number>(calculateProgress(tasks));
    const handleEdit = () => {
        const updatedTimeSlots = timeSlots.map(slot => 
            slot.id === id ? { ...slot, isSubmitted: false } : slot
        );
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
        const updatedTimeSlots = timeSlots.map(slot =>
            slot.id === id ? { ...slot, status: completedSlotCheck() } : slot
        );
        setTimeSlots(updatedTimeSlots);
    }

    const handleTaskToggle = (taskIndex: number) => {
        const updatedTimeSlots = timeSlots.map(slot => {
            if (slot.id === id) {
                const updatedTasks = slot.tasks.map((task, idx) => 
                    idx === taskIndex ? { ...task, completed: !task.completed } : task
                );
                return { ...slot, tasks: updatedTasks };
            }
            return slot;
        });
        setTimeSlots(updatedTimeSlots);
        setProgress(calculateProgress(updatedTimeSlots.find(slot => slot.id === id)?.tasks || []));
    };
    
    return (
        <div style={style} className="col-span-full p-4 border rounded-md flex flex-col space-y-4 mt-2">
             <div ref={setNodeRef} {...attributes} {...listeners} className="drag-handle">
                <span>☰</span> {/* Drag handle icon */}
            </div>
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
                <div className="space-y-4">
                    {tasks.map((task, idx) => (
                        <SubmittedTaskComponent
                            key={idx}
                            task={task}
                            index={idx}
                            handleTaskToggle={handleTaskToggle}
                            handleAssignmentDisplay={handleAssignmentDisplay}/>
                    ))
                    }
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
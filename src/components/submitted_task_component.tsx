import React from "react";
import { Task } from "../app_context";
import { useSortable } from "@dnd-kit/sortable";
import{ CSS } from "@dnd-kit/utilities";

type SubmittedTaskComponentProps = {
    task: Task;
    index: number;
    handleTaskToggle: (taskIndex: number) => void;
    handleAssignmentDisplay: (task: Task) => string;
    slotIndex: number;
}

const SubmittedTaskComponent: React.FC<SubmittedTaskComponentProps> = ({ task, index, slotIndex, handleTaskToggle, handleAssignmentDisplay }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: task.id }); // Corrected id for useSortable

    // Style for the draggable state
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        // <div 
        //     ref={setNodeRef}
        //     {...attributes}
        //     {...listeners}
        //     style={style}
        //     className="card border w-full h-16 bg-base-100 shadow-xl p-2 flex flex-row items-center">
        //     <span className="border-r px-2 py-1 mr-2">{index + 1}</span>
        //     <span className="flex-grow">{task.name}</span>
        //     <div className="badge badge-primary">{handleAssignmentDisplay(task)}</div>
        //     <div className="border-l px-2 py-1 ml-2">
        //         <input 
        //             type="checkbox" 
        //             className="checkbox checkbox-primary" 
        //             checked={task.completed}
        //             onChange={() => handleTaskToggle(index)}
        //         />
        //     </div>
        // </div>
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
        >{task.name}
        </div>
    );
}

export default SubmittedTaskComponent;

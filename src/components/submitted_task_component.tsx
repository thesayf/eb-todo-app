import React from "react";
import { Task } from "../app_context";

type SubmittedTaskComponentProps = {
    task: Task;
    index: number;
    handleTaskToggle: (taskIndex: number) => void;
    handleAssignmentDisplay: (task: Task) => string;
}

const SubmittedTaskComponent: React.FC<SubmittedTaskComponentProps> = ({ task, index, handleTaskToggle, handleAssignmentDisplay }) => {


    return (
        <div 
            className="card border w-full h-16 bg-base-100 shadow-xl p-2 flex flex-row items-center">
            <span className="border-r px-2 py-1 mr-2">{index + 1}</span>
            <span className="flex-grow">{task.name}</span>
            <div className="badge badge-primary">{handleAssignmentDisplay(task)}</div>
            <div className="border-l px-2 py-1 ml-2">
                <input 
                    type="checkbox" 
                    className="checkbox checkbox-primary" 
                    checked={task.completed}
                    onChange={() => handleTaskToggle(index)}
                />
            </div>
        </div>
    );
}

export default SubmittedTaskComponent;

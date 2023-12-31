import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TestTaskComponentProps {
        id: string;
        task: any;
}

const TestTaskComponent: React.FC<TestTaskComponentProps> = ({id , task} ) => {

    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id, data: { task, type: "Task" }   });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    if (isDragging) {
        return (
            <div className=" border rounded w-full h-16 bg-base-300 flex flex-row items-center mt-2 " ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}></div>
        )
    }

    return (
        <div ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners} className="col-span-full p-4 border rounded-md bg-white mt-2 ">
            <div className="text-lg font-bold">{task.content}</div>
        </div>
    )
}


export default TestTaskComponent;
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import{ CSS } from "@dnd-kit/utilities";

type SubmittedTaskComponentProps = {
    item: string;
    id: string
}

const TestTaskComponent: React.FC<SubmittedTaskComponentProps> = ({ item, id }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id }); // Corrected id for useSortable

    // Style for the draggable state
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    console.log(item)
    console.log(id)
    return (
        <div className="card border w-full h-16 bg-base-100 shadow-xl p-2 flex flex-row items-center"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
        >{item}
        </div>
    );
}

export default TestTaskComponent;

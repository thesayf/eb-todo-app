import React from "react"
import { useSortable } from "@dnd-kit/sortable"; 
import { CSS } from "@dnd-kit/utilities";

interface TestSlotComponentProps {
        id: string;
        slotName: string;
        startTime: string;
        endTime: string;
}

const TestSlotComponent: React.FC<TestSlotComponentProps> = ({id , slotName, startTime, endTime} ) => {

    const { attributes, listeners, setNodeRef, transform, transition ,isDragging} = useSortable({ 
        id: id,
        data: {
            timeSlot:{
                id: id,
                slotName: slotName,
                startTime: startTime,
                endTime: endTime,
            },
            type: "timeSlot"
        }
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    };


    if(isDragging){
        return <div ref={setNodeRef}
        style={style} className="col-span-full p-4 border rounded-md bg-white">hello</div>;
    }

    return (
        <div 
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="col-span-full p-4 border rounded-md bg-white">
            <div className="text-lg font-bold">{slotName}</div>
            <div className="text-sm italic">{startTime} - {endTime}</div>
            <div className="text-sm italic">ID: {id}</div>
        </div>
    )
}

export default TestSlotComponent;
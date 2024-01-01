import React from "react";
import SubmittedTimeSlot from "./submitted_time_slot_component";
import UnsubmittedTimeSlot from "./unsubmitted_time_slot_component";
import TestTaskComponent from "../testcomponents/testTaskCoponent";
import { SortableContext } from "@dnd-kit/sortable";
// import { useDroppable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


interface DragagableSlotPtrops {
    slot: any;
    id: string;
    tasks: Array<any>;
}

const DragableSlot: React.FC<DragagableSlotPtrops> = ({slot, tasks}) => {

    // const { setNodeRef, isOver, over } = useDroppable({
    //     id: slot.id,
    //     data: {
    //         type: 'Column',
    //     },
    // });

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: slot.id });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition: transition,
    };

    

    return (
        // <div>
        //     {
        //         slot.isSubmitted ? <SubmittedTimeSlot key={slot.id} id={slot.id} slotName={slot.name} startTime={slot.startTime} endTime={slot.endTime} tasks={slot.tasks} /> 
        //         : <UnsubmittedTimeSlot key={slot.id} id={slot.id} slotName={slot.name} startTime={slot.startTime} endTime={slot.endTime} tasks={slot.tasks} />  
        //     }
        // </div>
        <>
        <div ref={setNodeRef} style={style} className="col-span-full p-4 border rounded-md bg-white mt-2">
            <div {...listeners} {...attributes} className="handle">Drag</div>
            <div className="text-lg font-bold">{slot.title}</div>
            <SortableContext items={tasks.map(task => task.id)}>
            {
                tasks.map((task) => {
                    return (
                        <TestTaskComponent key={task.id} id={task.id} task={task} />
                )
            })
            }
            </SortableContext>
        </div>
        </>

    )
}

export default DragableSlot;    
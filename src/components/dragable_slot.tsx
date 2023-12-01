import React from "react";
import SubmittedTimeSlot from "./submitted_time_slot_component";
import UnsubmittedTimeSlot from "./unsubmitted_time_slot_component";

interface DragagableSlotPtrops {
    slot: any;
    id: string;
}

const DragableSlot: React.FC<DragagableSlotPtrops> = ({slot}) => {
    return (
        <div>
            {
                slot.isSubmitted ? <SubmittedTimeSlot key={slot.id} id={slot.id} slotName={slot.name} startTime={slot.startTime} endTime={slot.endTime} tasks={slot.tasks} /> 
                : <UnsubmittedTimeSlot key={slot.id} id={slot.id} slotName={slot.name} startTime={slot.startTime} endTime={slot.endTime} tasks={slot.tasks} />  
            }
        </div>
    )
}

export default DragableSlot;    
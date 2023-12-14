import React from "react";
import { TimeSlot } from "../app_context";
import TimeSlotAdder from "../components/time_slot_adder_component";
import DragableSlot from "../components/dragable_slot";

interface ActiveSlotContainerProps {
    slots: TimeSlot[];
}

const  ActiveSlotContainer: React.FC<ActiveSlotContainerProps> =  ({slots}) =>  {

    return (
        <>
            {
                slots.map((slot) => (
                    <DragableSlot key={slot.id} id={slot.id} slot={slot} />                
                ))
            }
            <TimeSlotAdder /> 
        </>

    )
}

export default ActiveSlotContainer;
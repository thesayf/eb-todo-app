import React, { useState } from "react";
import { createPortal } from "react-dom";
import { TimeSlot } from "../app_context";
import TimeSlotAdder from "../components/time_slot_adder_component";
import { DndContext, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import DragableSlot from "../components/dragable_slot";
import { SortableContext } from "@dnd-kit/sortable";

interface ActiveSlotContainerProps {
    slots: TimeSlot[];
}

const  ActiveSlotContainer: React.FC<ActiveSlotContainerProps> =  ({slots}) =>  {
    const slotIds = slots.map(slot => slot.id);
    const [activeSlot, setActiveSlot] = useState<TimeSlot | null>(null);

    const onDragStart = (event: DragStartEvent) => {
        if(event.active.data.current?.type === "slot") {
            setActiveSlot(event.active.data.current.slot);
            return
        }
    }

    return (
        <DndContext onDragStart={onDragStart}>
            <SortableContext items={slotIds}>
            {
                slots.map((slot) => (
                    <DragableSlot key={slot.id} id={slot.id} slot={slot} />                
                ))}
            </SortableContext>
            <TimeSlotAdder /> 

            <DragOverlay>
                {
                    activeSlot && <DragableSlot id={activeSlot.id} slot={activeSlot}  />
                }
            </DragOverlay>

        </DndContext>
    )
}

export default ActiveSlotContainer;
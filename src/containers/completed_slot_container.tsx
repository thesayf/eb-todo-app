import React from "react";
import { TimeSlot } from "../app_context";
import CompletedSlotComponent from "../components/completed_slot_component";
import PartialCompletedSlotComponent from "../components/partial_completed_slot_component";
import InCompleteSlotComponent from "../components/incomplete_slot_component";

interface CompletedSlotContainerProps {
    slots: TimeSlot[];
}

const CompletedSlotContainer: React.FC<CompletedSlotContainerProps> = ({ slots }) => {
    return (
        <div>
            {slots.length === 0 ? (
                <div className="text-center text-gray-400">No completed slots yet</div>
            ) : (
                slots.map((slot, index) => {
                    const { name, startTime, endTime, tasks } = slot; // Destructuring each slot

                    if (slot.status === "completed") {
                        return <CompletedSlotComponent
                                    key={index}
                                    index={index} 
                                    slotName={name}
                                    startTime={startTime}
                                    endTime={endTime}
                                    tasks={tasks}
                                />;
                    } else if (slot.status === "partiallyCompleted") {
                        return <PartialCompletedSlotComponent
                                    key={index}
                                    index={index} 
                                    slotName={name}
                                    startTime={startTime}
                                    endTime={endTime}
                                    tasks={tasks}
                                />;
                    } else if (slot.status === "incomplete") {
                        return <InCompleteSlotComponent
                                    key={index}
                                    index={index} 
                                    slotName={name}
                                    startTime={startTime}
                                    endTime={endTime}
                                    tasks={tasks}
                                />;
                    }

                    return null; // Handle unexpected cases
                })
            )}
        </div>
    );
}

export default CompletedSlotContainer;

import React from "react";
import { useAppContext } from "../app_context";
import ActiveSlotContainer from "./active_slot_container";
import CompletedSlotContainer from "./completed_slot_container";

const TimeSlotContainer: React.FC = () => {

    const { timeSlots } = useAppContext();
    const { activeSlots } = useAppContext();

    // Filter for active slots: all slots that are not completed (including unsubmitted and submitted but not completed)
    const activeSlotComponents = timeSlots.filter(slot => 
        slot.status === "default"
    );

    // Filter for completed slots: slots that are completed, partially completed, or incomplete but submitted
    const completedSlotComponents = timeSlots.filter(slot => 
        slot.status === "completed" || slot.status === "partiallyCompleted" || (slot.isSubmitted && slot.status === "incomplete")
    );

    return (
        <div>
            {
                activeSlots ? <ActiveSlotContainer slots={activeSlotComponents}/> : <CompletedSlotContainer slots={completedSlotComponents} />
            }
        </div>
    );


};

export default TimeSlotContainer;

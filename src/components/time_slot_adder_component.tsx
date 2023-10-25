import React from "react";
import { useAppContext } from "../app_context";

const TimeSlotAdder: React.FC = () => {
    const { timeSlots, setTimeSlots } = useAppContext();

    const handleAddTimeSlot = () => {
        const newUnsubmittedSlot = {
            // Assuming all these properties exist on the time slot object.
            name: "", 
            startTime: "",
            endTime: "",
            tasks: [],
            isSubmitted: false,
            status: "default"
        };
    
        setTimeSlots([...timeSlots, newUnsubmittedSlot]);
    };

    return(
        <button 
            className="btn btn-primary w-full mt-2"
            onClick={handleAddTimeSlot}
        >Add Time Slot +
        
        </button>
    )
}

export default TimeSlotAdder;
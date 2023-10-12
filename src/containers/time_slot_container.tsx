import React from "react";
import { useAppContext } from "../app_context";
import TimeSlot from "../components/time_slot_component";
import TimeSlotAdder from "../components/time_slot_adder_component";
import SubmittedTimeSlot from "../components/submitted_time_slot_component";

const TimeSlotContainer: React.FC = () => {

    const { timeSlots, setTimeSlots } = useAppContext();

    const handleEdit = (indexToEdit: number) => {
        // Create a new array of time slots where the selected slot's isSubmitted property is set to false
        const newTimeSlots = timeSlots.map((slot, idx) => 
            idx === indexToEdit ? { ...slot, isSubmitted: false } : slot
        );
    
        setTimeSlots(newTimeSlots);
    }

    return(
        <div>
            {/* Render a TimeSlot form for each entry in timeSlots */}
            {timeSlots.map((slot, index) => (
                slot.isSubmitted 
                ? (
                    <SubmittedTimeSlot 
                        key={index}
                        slotName={slot.name}
                        startTime={slot.startTime}
                        endTime={slot.endTime}
                        tasks={slot.tasks}
                        onEdit={() => handleEdit(index)}
                    />
                )
                : <TimeSlot key={index} />
            ))}

            {/* Button to add a new time slot */}
            <TimeSlotAdder/>
        </div>
    )
};

export default TimeSlotContainer;
import React from "react";
import { useAppContext } from "../app_context";
import UnsubmittedTimeSlot from "../components/unsubmitted_time_slot_component";
import TimeSlotAdder from "../components/time_slot_adder_component";
import SubmittedTimeSlot from "../components/submitted_time_slot_component";
import CompletedSlotComponent from "../components/completed_slot_component";

const TimeSlotContainer: React.FC = () => {
    const { timeSlots } = useAppContext();
    
    return (
        <div>
            {timeSlots.map((slot, index) => {
            if (slot.isSubmitted) {
                return slot.isCompleted ? (
                    <CompletedSlotComponent
                        key={index}
                        index={index} 
                        slotName={slot.name}
                        startTime={slot.startTime}
                        endTime={slot.endTime}
                        tasks={slot.tasks}
                    />
                ) : (
                    <SubmittedTimeSlot
                        key={index} 
                        index={index}
                        slotName={slot.name}
                        startTime={slot.startTime}
                        endTime={slot.endTime}
                        tasks={slot.tasks}
                    />
                );
            } else {
                return (
                    <UnsubmittedTimeSlot
                        key={index} 
                        index={index}
                        slotName={slot.name}
                        startTime={slot.startTime}
                        endTime={slot.endTime}
                        tasks={slot.tasks}
                    />
                );
            }
        })}
            <TimeSlotAdder />
        </div>
    );
};

export default TimeSlotContainer;

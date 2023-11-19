import React from "react";
import { useAppContext } from "../app_context";
import UnsubmittedTimeSlot from "../components/unsubmitted_time_slot_component";
import TimeSlotAdder from "../components/time_slot_adder_component";
import SubmittedTimeSlot from "../components/submitted_time_slot_component";
import CompletedSlotComponent from "../components/completed_slot_component";
import PartialCompletedSlotComponent from "../components/partial_completed_slot_component";
import InCompleteSlotComponent from "../components/incomplete_slot_component";

const TimeSlotContainer: React.FC = () => {
    const { timeSlots, setTimeSlots } = useAppContext();
    
    return (
     
        <div>
            {timeSlots.map((slot, index) => {
                
                const { name, startTime, endTime, tasks } = slot;

                if(slot.isSubmitted) {
                    switch (slot.status) {
                        case "completed": 
                            return(<CompletedSlotComponent
                                        key={index}
                                        index={index} 
                                        slotName={name}
                                        startTime={startTime}
                                        endTime={endTime}
                                        tasks={tasks}
                                    />)
                        case "partiallyCompleted": 
                            return(<PartialCompletedSlotComponent
                                        key={index}
                                        index={index} 
                                        slotName={name}
                                        startTime={startTime}
                                        endTime={endTime}
                                        tasks={tasks}
                                    />)
                        case "incomplete": 
                            return(<InCompleteSlotComponent
                                        key={index}
                                        index={index} 
                                        slotName={name}
                                        startTime={startTime}
                                        endTime={endTime}
                                        tasks={tasks}
                                    />)
                        default: 
                            return(<SubmittedTimeSlot
                                        key={index} 
                                        index={index}
                                        slotName={name}
                                        startTime={startTime}
                                        endTime={endTime}
                                        tasks={tasks}
                                    />)
                    }    
                } else {
                    return (
                        <UnsubmittedTimeSlot
                            key={index} 
                            index={index}
                            slotName={name}
                            startTime={startTime}
                            endTime={endTime}
                            tasks={tasks}
                        />
                    );
                }
})}
            <TimeSlotAdder />
        </div>
    );
};

export default TimeSlotContainer;

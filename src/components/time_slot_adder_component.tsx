import React from "react";
import { useAppContext } from "../app_context";
import { v4 as uuidv4 } from "uuid";

const TimeSlotAdder: React.FC = () => {
  const { timeSlots, setTimeSlots } = useAppContext();

  const handleAddTimeSlot = () => {
    console.log("Adding a new time slot");
    const newUnsubmittedSlot = {
      // Assuming all these properties exist on the time slot object.
      id: uuidv4(),
      name: "",
      startTime: "",
      endTime: "",
      tasks: [],
      isSubmitted: false,
      status: "default",
    };

    setTimeSlots([...timeSlots, newUnsubmittedSlot]);
  };

  return (
    <button className="btn btn-primary w-full mt-2" onClick={handleAddTimeSlot}>
      Add Time Block +
    </button>
  );
};

export default TimeSlotAdder;

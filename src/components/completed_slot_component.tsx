import React from "react"
import { useAppContext } from "../app_context"
import { Task } from "../app_context"

type CompletedSlotProps = {
    index: number;
    slotName: string;
    startTime: string;
    endTime: string;
    tasks: Task[]; 
}

const CompletedTimeSlot: React.FC<CompletedSlotProps> = ({index, slotName, startTime, endTime, tasks }) => {
    const { timeSlots, setTimeSlots } = useAppContext();


    const handleActivate = () => {
        const updatedTimeSlots = [...timeSlots];
        console.log(updatedTimeSlots[index])
        updatedTimeSlots[index].isCompleted = false;
        setTimeSlots(updatedTimeSlots);
    }

    return(
        <div className="col-span-full p-4 border rounded-md flex flex-col space-y-4 mt-2 bg-neutral text-white">
        <div className="flex-grow space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                {/* Time Slot Name */}
                <div className="flex-grow mr-4">
                    <h3 className="font-semibold">{slotName}- Completed!</h3>
                </div>
                <div className="text-gray-200">
                    Start: {startTime} - End: {endTime}
                </div>
            </div>
            {/* Tasks */}
            {
                tasks.map((task, taskIndex) => (
                    <div className="flex items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"></path>
                        </svg>
                        <span className="ml-1">{task.name}</span>
                    </div>

                ))
            }
                
                {/* // <div className="flex items-center">
                //     <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current h-6 w-6" fill="none" viewBox="0 0 24 24">
                //         <circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
                //     </svg>
                //     <span className="ml-1">Your purchase has been confirmed!</span>
                // </div> */}
        </div>
    
        {/* View Details Button */}
        <div className="mt-2 flex justify-end">
            <button className="btn btn-primary" onClick={handleActivate}>Re-Activate</button>
        </div>
    </div>
    )
}

export default CompletedTimeSlot;


    
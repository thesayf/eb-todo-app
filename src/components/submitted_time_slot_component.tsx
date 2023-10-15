import React from 'react'
import { Task } from '../app_context'
import { useAppContext } from '../app_context'

type SubmittedTimeSlotProps = {
    index: number;
    slotName: string;
    startTime: string;
    endTime: string;
    tasks: Task[];  
}

const SubmittedTimeSlot: React.FC<SubmittedTimeSlotProps>  = ({index, slotName, startTime, endTime, tasks}) => {
    const { timeSlots, setTimeSlots } = useAppContext();

    const handleEdit = () => {
        const updatedTimeSlots = [...timeSlots];
        updatedTimeSlots[index].isSubmitted = false;
        setTimeSlots(updatedTimeSlots);
    }
    
    return (
        <div className="col-span-full p-4 border rounded-md flex flex-col space-y-4 mt-2">
            {/* Main Content */}
            <div className="flex-grow space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    {/* Time Slot Name */}
                    <div className="flex-grow mr-4">
                        <h3 className="font-semibold">{slotName}</h3>
                    </div>
                    {/* Time Interval */}
                    <div className="text-gray-600">
                        Start: {startTime}- End: {endTime}
                    </div>
                </div>

                {/* Tasks */}
                <div className="space-y-4">
                    {tasks.map((task, idx) => (
                        <div key={idx} className="card border w-full h-16 bg-base-100 shadow-xl p-2 flex flex-row items-center">
                            <span className="border-r px-2 py-1 mr-2">{idx + 1}</span>
                            <span className="flex-grow">{task.name}</span>
                            <div className="border-l px-2 py-1 ml-2">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            {/* Edit Button */}
            <div className="mt-2 flex justify-end">
                <button 
                    className="btn btn-outline btn-primary"
                    onClick={handleEdit}
                    >
                    Edit Slot
                </button>
            </div>
        </div>
    )
}

export default SubmittedTimeSlot
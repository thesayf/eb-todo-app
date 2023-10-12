import React from 'react'
import { Task } from '../app_context'

type SubmittedTimeSlotProps = {
    slotName: string;
    startTime: string;
    endTime: string;
    tasks: Task[];
    onEdit: () => void;     
}

const SubmittedTimeSlot: React.FC<SubmittedTimeSlotProps>  = ({slotName, startTime, endTime, tasks, onEdit}) => {
    return (
        <div className="col-span-full p-4 border rounded-md flex flex-col space-y-4">
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
                <div className="space-y-2">
                <ul className="list-decimal pl-5">
                        {tasks.map((task, index) => (
                            <li key={index} className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span>{task.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Edit Button */}
            <div className="mt-2 flex justify-end">
                <button 
                    className="btn btn-outline btn-primary"
                    onClick={onEdit}
                    >
                    Edit Slot
                </button>
            </div>
        </div>
    )
}

export default SubmittedTimeSlot
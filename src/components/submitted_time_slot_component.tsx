import React from 'react'

const SubmittedTimeSlot: React.FC = () => {
    return (
        <div className="col-span-full p-4 border rounded-md flex flex-col space-y-4">
            {/* Main Content */}
            <div className="flex-grow space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    {/* Time Slot Name */}
                    <div className="flex-grow mr-4">
                        <h3 className="font-semibold">Time Slot Name</h3>
                    </div>
                    {/* Time Interval */}
                    <div className="text-gray-600">
                        Start: 09:00 - End: 10:00
                    </div>
                </div>

                {/* Tasks */}
                <div className="space-y-2">
                    <ul className="list-decimal pl-5">
                        <li className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>Task 1</span>
                        </li>
                        <li className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>Task 2</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Edit Button */}
            <div className="mt-2 flex justify-end">
                <button className="btn btn-outline btn-primary">
                    Edit Slot
                </button>
            </div>
        </div>
    )
}

export default SubmittedTimeSlot
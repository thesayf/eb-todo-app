import React from "react";

const TimeSlot: React.FC = () => {
    return (
        <div className="col-span-full p-4 border rounded-md flex flex-col space-y-4">
            {/* Main Content */}
            <div className="flex-grow space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    {/* Time Slot Name */}
                    <div className="flex-grow mr-4">
                        <input type="text" name="slotName" placeholder="Time Slot Name" className="border rounded-md w-full p-1" />
                    </div>
                    {/* Time Pickers */}
                    <div className="flex space-x-4 items-center">
                        <label>Start:</label>
                        <input type="time" name="startTime" className="border rounded-md p-1" />
                        <label>End:</label>
                        <input type="time" name="endTime" className="border rounded-md p-1" />
                    </div>
                </div>

                {/* Tasks */}
                <div className="space-y-2">
                    <ul className="list-decimal pl-5">
                        <li>
                            <input type="text" placeholder="Task 1" className="border rounded-md w-full p-1" />
                        </li>
                        <li>
                            <input type="text" placeholder="Task 2" className="border rounded-md w-full p-1" />
                        </li>
                    </ul>
                    <button className="btn btn-outline btn-primary mt-2">
                        + Add Task
                    </button>
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-2 flex justify-end">
                <button className="btn btn-primary">
                    Submit
                </button>
            </div>
        </div>
    )
}



export default TimeSlot;


import React from "react";

// const TimeSlot: React.FC = () => {
//     return(
//         <div className="col-span-full h-12 border">
//             Time Slot 1
//             <input type="time" name="time" className="border rounded p-2"></input>
//         </div>
//     )
// }

// export default TimeSlot;

const TimeSlot: React.FC = () => {
    return (
        <div className="col-span-full p-4 border rounded-md space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                {/* Time Pickers */}
                <div className="flex space-x-4 items-center">
                    <label>Start:</label>
                    <input type="time" name="startTime" className="border rounded-md p-1" />
                    <label>End:</label>
                    <input type="time" name="endTime" className="border rounded-md p-1" />
                </div>
                {/* Time Slot Name */}
                <div className="flex-grow ml-4">
                    <input type="text" name="slotName" placeholder="Time Slot Name" className="border rounded-md w-full p-1" />
                </div>
            </div>

            {/* Tasks */}
            <div className="space-y-2">
                <div className="flex items-center">
                    <input type="checkbox" id="example-task-1" className="checkbox checkbox-primary" />
                    <label htmlFor="example-task-1" className="ml-2">Example Task 1</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="example-task-2" className="checkbox checkbox-primary" />
                    <label htmlFor="example-task-2" className="ml-2">Example Task 2</label>
                </div>
                <button className="btn btn-outline btn-primary">
                    Add Task
                </button>
            </div>
        </div>
    )
}

export default TimeSlot;


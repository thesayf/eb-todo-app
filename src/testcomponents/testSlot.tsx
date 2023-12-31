import React from "react";

interface TestSlotComponentProps {
        id: string;
        slotName: string;
        startTime: string;
        endTime: string;
}

const TestSlotComponent: React.FC<TestSlotComponentProps> = ({id , slotName, startTime, endTime} ) => {

    return (
        <div className="col-span-full p-4 border rounded-md bg-white mt-2">
            <div className="text-lg font-bold">{slotName}</div>
            <div className="text-sm italic">{startTime} - {endTime}</div>
            <div className="text-sm italic">ID: {id}</div>
        </div>
    )
}

export default TestSlotComponent;
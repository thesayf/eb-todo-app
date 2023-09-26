import React from "react";

const AppLayout: React.FC = () => {
    return(
        <div className="mx-20 my-10">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-20">
                <div className="col-span-full md:col-span-1 border h-full">Logo</div>
                <div className="col-span-full md:col-span-1 border h-full">App Name</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
                <div className="col-span-1 row-span-1">
                    <h2 className="text-xl font-bold">Todays Date</h2>
                </div>
                <div className="col-span-3 row-span-1">
                    <h2 className="text-xl font-bold">Main Goal for Today</h2>
                </div>
            </div>

            
            {/* Date and Main Goal */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-16 mt-2">
                <div className="col-span-full md:col-span-1 border h-full">
                    Date
                </div>
                <div className="col-span-full md:col-span-3 border h-full">
                    Main Goal
                </div>
            </div>

            {/* Header For Key Objectives */}
            <div className="grid grid-cols-1 mt-2 ">
                <h2 className="text-xl font-bold col-span-full">Key Objectives</h2>
            </div>

            {/* 4 Sub Goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 mt-2">
                <div className="col-span-full md:col-span-1 border row-span-1 h-12">Goal 1</div>
                <div className="col-span-full md:col-span-1 border row-span-1 h-12">Goal 2</div>
                <div className="col-span-full md:col-span-1 border row-span-1 h-12">Goal 3</div>
                <div className="col-span-full md:col-span-1 border row-span-1 h-12">Goal 4</div>
            </div>

            {/* Header For Todays Schedule */}
            <div className="grid grid-cols-1 mt-2">
                <div className="text-xl font-bold">Todays Schedule</div>
            </div>

            {/* Time Table */}
            <div className="grid grid-cols-1 gap-4 mt-2">
                <div className="col-span-full h-12 border">Time Slot 1</div>
            </div>

            {/* <div className="col-span-full md:col-span-4 border P4">logo</div>
            <div className="ccol-span-full md:col-span-1 border">date</div>
            <div className="col-span-full md:col-span-3 border">main goal</div>
            <div className="col-span-full md:col-span-2 border">goal 1</div>
            <div className="col-span-full md:col-span-2 border">goal 2</div> */}


        </div>

    )

}

export default AppLayout
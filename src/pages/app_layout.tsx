import React from "react";
import Logo from "../Components/Logo";
import AppName from "../Components/AppName"
import DATEHEADER from "../Headers/DateHeader"
import MAINGOALHEADER from "../Headers/MainGoalHeader";
import MainGoal from "../Components/MainGoal";
import DateComponent from "../Components/Date";
import KeyObjectivesHeader from "../Headers/KeyObjectivesHeader";
import ObjectiveOne from "../Components/ObjectiveOne";
import ObjectiveTwo from "../Components/ObjectiveTwo";
import ObjectiveThree from "../Components/ObjectiveThree";
import ObjectiveFour from "../Components/ObjectiveFour";
import ScheduleHeader from "../Headers/ScheduleHeader";
import TimeSlot from "../Components/TimeSlot";
import TimeSlotAdder from "../Components/TimeSlotAdder";

const AppLayout: React.FC = () => {
    return(
        <div className="mx-20 my-10">

            {/* Logo and App Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-20">
                <Logo/>
                <AppName/>
            </div>

            {/* Date and Main Goal Headers */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
                <DATEHEADER/>
                <MAINGOALHEADER/>
            </div>

            {/* Date and Main Goal */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-16 mt-2">
                <DateComponent/>
                <MainGoal/>
            </div>

            {/* Header For Key Objectives */}
            <div className="grid grid-cols-1 mt-2 ">
                <KeyObjectivesHeader/>
            </div>

            {/* 4 Sub Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 mt-2">                
                <ObjectiveOne/>
                <ObjectiveTwo/>
                <ObjectiveThree/>
                <ObjectiveFour/>    
            </div>

            {/* Header For Todays Schedule */}
            <div className="grid grid-cols-1 mt-2">
                <ScheduleHeader/>
            </div>

            {/* Time Table */}
            <div className="grid grid-cols-1 gap-4 mt-2">
                <TimeSlot/>
                <TimeSlotAdder/>
            </div>

        </div>

    )

}

export default AppLayout
import React from "react";
// import Logo from "../components/Logo"
import AppName from "../components/AppName"
import DATEHEADER from "../headers/DateHeader"
import MAINGOALHEADER from "../headers/MainGoalHeader";
import MainGoal from "../components/MainGoal";
import DateComponent from "../components/Date";
import KeyObjectivesHeader from "../headers/KeyObjectivesHeader";
import ObjectiveOne from "../components/ObjectiveOne";
import ObjectiveTwo from "../components/ObjectiveTwo";
import ObjectiveThree from "../components/ObjectiveThree";
import ObjectiveFour from "../components/ObjectiveFour";
import ScheduleHeader from "../headers/ScheduleHeader";
import TimeSlot from "../components/TimeSlot";
import TimeSlotAdder from "../components/TimeSlotAdder";

const AppLayout: React.FC = () => {
    return(
        <div className="mx-20 my-10">

            {/* Logo and App Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-20">
                {/* <Logo/> */}
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
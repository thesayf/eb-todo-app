import React from "react";
import Logo from "../components/logo_component"
import MainGoalHeader from "../headers/main_goal_header";
import MainGoal from "../components/main_goal_component";
import DateComponent from "../components/date_component";
import KeyObjectivesHeader from "../headers/key_objectives_header";
import ObjectiveOne from "../components/objective_one_component";
import ObjectiveTwo from "../components/objective_two_component";
import ScheduleHeader from "../headers/schedule_header";
import Navbar from "../components/navbar_component";
import DayTab from "../components/day_tab_component";
import TimeSlotContainer from "../containers/time_slot_container";

const AppLayout: React.FC = () => {
    return(
        <div className="mx-20 my-10">

            {/* Nav bar and Day Tab*/}
            <div className="grid grid-cols-1 md:grid-cols-3" >
                <Navbar/>
                <DateComponent/>
                <DayTab/>
            </div>

            {/* Logo and App Name */}
            <div className="grid grid-cols-1 md:grid-cols-1 h-30">
                <Logo/>
            </div>

            {/* Date and Main Goal Headers */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
                <MainGoalHeader/>
            </div>

            {/* Date and Main Goal */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-16 mt-2">
                <MainGoal/>
            </div>

            {/* Header For Key Objectives */}
            <div className="grid grid-cols-1 mt-2 ">
                <KeyObjectivesHeader/>
            </div>

            {/* 2 Sub Objectives */}
            <div className="flex flex-row mt-2 gap-4">
                <div className="w-1/2">
                    <ObjectiveOne />
                </div>
                <div className="w-1/2">
                    <ObjectiveTwo />
                </div>
            </div>

            {/* Header For Todays Schedule */}
            <div className="grid grid-cols-1 mt-2 ">
                <ScheduleHeader/>
                {/* <SlotComponentToggle/> */}
            </div>

            {/* Time Table */}
            <div className="grid grid-cols-1 gap-4 mt-2">
                <TimeSlotContainer/>
            </div>

        </div>

    )

}

export default AppLayout
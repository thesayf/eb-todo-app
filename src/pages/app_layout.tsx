import React from "react";
import Logo from "../components/logo_component"
import MainGoalHeader from "../headers/main_goal_header";
import MainGoal from "../components/main_goal_component";
import DateComponent from "../components/date_component";
import KeyObjectivesHeader from "../headers/key_objectives_header";
import ObjectiveOne from "../components/objective_one_component";
import ObjectiveTwo from "../components/objective_two_component";
import ObjectiveThree from "../components/objective_three_component";
import ObjectiveFour from "../components/objective_four_component";
import ScheduleHeader from "../headers/schedule_header";
import TimeSlot from "../components/time_slot_component";
import TimeSlotAdder from "../components/time_slot_adder_component";

const AppLayout: React.FC = () => {
    return(
        <div className="mx-20 my-10">

            {/* Logo and App Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-20">
                <Logo/>
                <DateComponent/>
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
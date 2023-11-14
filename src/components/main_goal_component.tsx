import React from "react";
import { useAppContext } from "../app_context";
import UnsubmittedMainGoalInput from "./unsubmitted_main_goal_input";
import SubmittedMainGoalComponent from "./sumbmitted_main_goal_component";

const MainGoal: React.FC = () => {
    const { mainGoal, setMainGoal } = useAppContext();

    return(
        <>
            {mainGoal.submited ? <SubmittedMainGoalComponent/> : <UnsubmittedMainGoalInput />}
        </>

    )
}

export default MainGoal;
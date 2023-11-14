import React from 'react';
import { useAppContext } from '../app_context';
import SubmittedObjectiveTwoComponent from './submitted_objective_two_component';
import UnsubmittedObjectiveTwoComponent from './unsubmited_objective_two_conponent'

const ObjectiveTwo: React.FC = () => {

    const { objective_two } = useAppContext();

    return(

        objective_two.submited ? <SubmittedObjectiveTwoComponent /> : <UnsubmittedObjectiveTwoComponent />
        
    )
}

export default ObjectiveTwo;
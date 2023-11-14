import React from 'react';
import { useAppContext } from '../app_context';
import SubmittedObjectiveOneComponent from './submitted_objective_one';
import UnsubmittedObjectiveOneComponent from './unsubmitted_objective_one';

const ObjectiveOne: React.FC = () => {
    const { objective_one } = useAppContext();

    return(
        <>
        {
            objective_one.submited ? <SubmittedObjectiveOneComponent /> : <UnsubmittedObjectiveOneComponent />
        }
        </> 
    )
}

export default ObjectiveOne;
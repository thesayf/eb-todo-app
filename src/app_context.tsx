import React, {createContext, useContext, ReactNode, useEffect} from "react";

export interface Task {
    id: string;
    number: number;
    name: string;
    completed: boolean;
    assignment: Assignment;
}

export interface Assignment {
    type: string;
    description: string;
}

export interface TimeSlot {
    id: string
    name: string;
    startTime: string;
    endTime: string;
    tasks: Task[];
    isSubmitted: boolean;
    status: string
}

interface GoalObjective {
    description: string;
    submited: boolean;
    completed: boolean;
}

interface AppState {
    mainGoal : GoalObjective;
    setMainGoal : React.Dispatch<React.SetStateAction<GoalObjective>>;
    objective_one : GoalObjective;
    set_objective_one : React.Dispatch<React.SetStateAction<GoalObjective>>;
    objective_two : GoalObjective;
    set_objective_two : React.Dispatch<React.SetStateAction<GoalObjective>>;
    objective_three : string;
    set_objective_three : React.Dispatch<React.SetStateAction<string>>;
    objective_four : string;
    set_objective_four : React.Dispatch<React.SetStateAction<string>>;
    timeSlots: TimeSlot[];
    setTimeSlots: React.Dispatch<React.SetStateAction<TimeSlot[]>>;
    points: number;
    setPoints: React.Dispatch<React.SetStateAction<number>>;
    performanceRating: string;
    setPerformanceRating: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppState | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [mainGoal, setMainGoal] = React.useState<GoalObjective>({ description: "", completed: false, submited: false });
    const [objective_one, set_objective_one] = React.useState<GoalObjective>({ description: "", completed: false, submited:false });
    const [objective_two, set_objective_two] = React.useState<GoalObjective>({ description: "", completed: false, submited:false});
    const [objective_three, set_objective_three] = React.useState<string>("");
    const [objective_four, set_objective_four] = React.useState<string>("");
    const [timeSlots, setTimeSlots] = React.useState<TimeSlot[]>([]);
    const [points, setPoints] = React.useState<number>(0);
    const [performanceRating, setPerformanceRating] = React.useState<string>("");


    const determineTier = (points: number, mainGoalCompleted: boolean, objectivesCompleted: number): string => {
        if(mainGoalCompleted === true && objectivesCompleted === 2 && points >= 1000){
            return "Elite"
        }
        else if(mainGoalCompleted === true && objectivesCompleted === 2 && points >= 800){
            return "Master"
        }
        else if(mainGoalCompleted === true && objectivesCompleted >= 1 && points >= 600){
            return "Expert"
        }
        else if(points >= 400){
            return "Achiever"
        }
        else if(points >= 200){
            return "Contributor"
        }
        else if(points > 50){
            return "Participant"
        }
        else{
            return "Inactive"
        }

    }

    //Function to caluculate and update points based on tasks completed status
    useEffect(() => {
        let newPoints = 0;
        //Add Points for thre main goal if completed
        newPoints += mainGoal.completed ? 300 : 0;

        //Add Points for the objectives if completed
        newPoints += objective_one.completed ? 100 : 0;
        newPoints += objective_two.completed ? 100 : 0;


        // Points for tasks withing time slots
        const totalTasks = timeSlots.flatMap(slot => slot.tasks).length
        const completedTasks = timeSlots.flatMap(slot => slot.tasks).filter(task => task.completed).length

        newPoints += completedTasks * 10;

        // Calculate the task completion rate
        const completionRate = totalTasks > 0 ? completedTasks / totalTasks : 0;

        // Apply logorythmic scaling to the completion rate bone
        const logBase = 10; // The base of the logorythmic calulation 
        const scaledBonus = Math.log(1 + completionRate * (totalTasks - 1)) / Math.log(logBase);
        const bonusPoints = scaledBonus * 100; // Scale the bonus points

        //update the points state eith the new points plus the bonus points scale
        setPoints(newPoints + bonusPoints);

    }, [mainGoal, objective_one, objective_two, timeSlots]);


    useEffect(() => {
        // This effect is only responsible for determining the tier based on the updated points
        const objectivesCompleted = [objective_one, objective_two].filter(obj => obj.completed).length;
        const userTier = determineTier(points, mainGoal.completed, objectivesCompleted);
        setPerformanceRating(userTier);
      }, [points, mainGoal, objective_one, objective_two]);

    const contextValue = {
        mainGoal,
        setMainGoal,
        objective_one,
        set_objective_one,
        objective_two,
        set_objective_two,
        objective_three,
        set_objective_three,
        objective_four,
        set_objective_four,
        timeSlots,
        setTimeSlots,
        points,
        setPoints,
        performanceRating,
        setPerformanceRating
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppState => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
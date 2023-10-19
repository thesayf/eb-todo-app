import React, {createContext, useContext, ReactNode} from "react";

export interface Task {
    id: number;
    number: number;
    name: string;
    completed: boolean;
}

interface TimeSlot {
    name: string;
    startTime: string;
    endTime: string;
    tasks: Task[];
    isSubmitted: boolean;
    isCompleted: boolean;
}

interface AppState {
    mainGoal : string;
    setMainGoal : React.Dispatch<React.SetStateAction<string>>;
    objective_one : string;
    set_objective_one : React.Dispatch<React.SetStateAction<string>>;
    objective_two : string;
    set_objective_two : React.Dispatch<React.SetStateAction<string>>;
    objective_three : string;
    set_objective_three : React.Dispatch<React.SetStateAction<string>>;
    objective_four : string;
    set_objective_four : React.Dispatch<React.SetStateAction<string>>;
    timeSlots: TimeSlot[];
    setTimeSlots: React.Dispatch<React.SetStateAction<TimeSlot[]>>;
}

const AppContext = createContext<AppState | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [mainGoal, setMainGoal] = React.useState<string>("");
    const [objective_one, set_objective_one] = React.useState<string>("");
    const [objective_two, set_objective_two] = React.useState<string>("");
    const [objective_three, set_objective_three] = React.useState<string>("");
    const [objective_four, set_objective_four] = React.useState<string>("");
    const [timeSlots, setTimeSlots] = React.useState<TimeSlot[]>([]);

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
        setTimeSlots
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
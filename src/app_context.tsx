import React, {createContext, useContext, ReactNode} from "react";

interface AppState {
    mainGoal : string;
    setMainGoal : React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppState | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [mainGoal, setMainGoal] = React.useState<string>("");

    const contextValue = {
        mainGoal,
        setMainGoal,
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
import React, { createContext, Dispatch, SetStateAction, useContext } from "react";

interface UiContextType {
    minimised: boolean;
    setMinimised: Dispatch<SetStateAction<boolean>>;
    fullScreen: boolean;
    setFullScreen: Dispatch<SetStateAction<boolean>>;
}

const initilaState = {
    minimised: false,
    setMinimised: () => {},
    fullScreen: false,
    setFullScreen: () => {},
};

export const UiContext = createContext<UiContextType>(initilaState);

export const UiProvider = ({ children }: { children: React.ReactNode }) => {
    const [minimised, setMinimised] = React.useState(false);
    const [fullScreen, setFullScreen] = React.useState(false);

    return (
        <UiContext.Provider value={{ minimised, setMinimised, fullScreen, setFullScreen }}>
            {children}
        </UiContext.Provider>
    );
};

export const useUiContext = () => {
    const context = useContext(UiContext);
    if (context === undefined) {
        throw new Error("useApp must be used within a UiStateProvider");
    }
    return context;
};

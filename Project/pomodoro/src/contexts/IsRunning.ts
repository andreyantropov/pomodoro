import React from "react";

type CommentContext = {
    isRunning: boolean;
    OnChange: (isRunning: boolean) => void;
}

export const isRunningContext = React.createContext<CommentContext>({
    isRunning: false,
    OnChange: () => {},
});
import { TimerState } from "../types/state";

export const startTimer = (
    setTimer: React.Dispatch<React.SetStateAction<TimerState>>
): NodeJS.Timer => {
    const intervalId = setInterval(() => {
        setTimer(
            (timer): TimerState => ({
                ...timer,
                timeMs: timer.timeMs + 0.01,
                isActive: true,
            })
        );
    }, 10);
    return intervalId;
};

export const stopTimer = (intervalId: NodeJS.Timer | null, setTimer: React.Dispatch<React.SetStateAction<TimerState>>): void => {
    if (intervalId === null) return;
    clearInterval(intervalId);
    setTimer((timer): TimerState => ({
        ...timer,
        isActive: false,
        intervalId: null,
    }));
};

export const getFreshTimer = (): TimerState => ({
    timeMs: 0,
    isActive: false,
    intervalId: null,
});

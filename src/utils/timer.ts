import { TimerState } from "../types/state";

export const startTimer = (
	setTimer: React.Dispatch<React.SetStateAction<TimerState>>
): NodeJS.Timer => {
	const intervalId = setInterval(() => {
		setTimer((timer): TimerState => ({ ...timer, timeMs: timer.timeMs + 1 }));
	}, 10);
	return intervalId;
};

export const stopTimer = (intervalId: NodeJS.Timer | null): void => {
	if (intervalId === null) return;
	clearInterval(intervalId);
};

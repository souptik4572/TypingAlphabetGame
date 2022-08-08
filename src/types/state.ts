export type CurrentCharState = {
	char: string;
	remCharCount: number;
};

export type TimerState = {
	timeMs: number;
	isActive: boolean;
	intervalId: NodeJS.Timeout | null;
};

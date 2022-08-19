export const setInLocal = (value: number): void => {
	localStorage.setItem('typing-alphabet-game-best-score', value.toString());
};

export const getFromLocal = (): number | null => {
	const itemStr = localStorage.getItem('typing-alphabet-game-best-score');
	if (!itemStr) return null;
	return Number(itemStr);
};

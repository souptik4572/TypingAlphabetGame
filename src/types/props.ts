export type DisplayProps = {
	textValue: string;
};

export type InputFieldProps = {
	isGameRunning: boolean;
	value: string;
	currentChar: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleGameReset: () => void;
};

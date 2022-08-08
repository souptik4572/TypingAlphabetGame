export type DisplayProps = {
	textValue: string;
};

export type InputFieldProps = {
	isGameRunning: boolean;
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleGameReset: () => void;
};

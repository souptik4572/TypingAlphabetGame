import { CurrentCharState } from "../types/state";

const getRandomChar = (charSet: Set<string>): string => {
	const charArray = Array.from(charSet);
	return charArray[Math.floor(Math.random() * charArray.length)];
};

export const getNextChar = (previousChar: string = ''): string => {
	const allAlphabets = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65));
	const charSet: Set<string> = new Set(allAlphabets);
	if (previousChar) charSet.delete(previousChar);
	return getRandomChar(charSet);
};

export const getFreshCurrentChar = (maxCharCount: number): CurrentCharState => ({
    char: getNextChar(),
    remCharCount: maxCharCount,
});

export const getCurrentChar = (
    isGameRunning: boolean,
    previousCurrentChar: CurrentCharState,
    isLastMatching: boolean = true
): CurrentCharState => {
    if (isGameRunning)
        return {
            char: getNextChar(previousCurrentChar.char),
            remCharCount: previousCurrentChar.remCharCount - 1,
        };
    if (!isGameRunning && !isLastMatching) {
        console.log(previousCurrentChar);
        return {
            char: "Failure!",
            remCharCount: 0,
        };
    }
    return {
        char: "Success!",
        remCharCount: 0,
    };
};

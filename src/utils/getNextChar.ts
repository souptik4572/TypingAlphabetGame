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

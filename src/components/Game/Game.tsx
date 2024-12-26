import { useEffect, useState, FC } from "react";
import { getCurrentChar, getFreshCurrentChar } from "../../utils/getChar";
import Display from "../Display/Display";
import InputField from "../InputField/InputField";
import { CurrentCharState, TimerState } from "../../types/state";
import { getFreshTimer, startTimer, stopTimer } from "../../utils/timer";
import "./Game.css";
import { getFromLocal, setInLocal } from "../../utils/localStorage";

const MAX_CHAR_COUNT: number = Number(process.env.REACT_APP_CHAR_COUNT);

const Game: FC = () => {
    const [isGameRunning, setIsGameRunning] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>("");
    const [currentChar, setCurrentChar] = useState<CurrentCharState>(
        getFreshCurrentChar(MAX_CHAR_COUNT)
    );
    const [bestTime, setBestTime] = useState<number | null>(getFromLocal());
    const [timer, setTimer] = useState<TimerState>(getFreshTimer());
    useEffect(() => {
        if (currentChar.remCharCount === MAX_CHAR_COUNT - 1) {
            const intervalId = startTimer(setTimer);
            setTimer((timer) => ({ ...timer, intervalId }));
        } else if (currentChar.remCharCount === 0 && isGameRunning) {
            stopTimer(timer.intervalId, setTimer);
            if (bestTime === null || bestTime > timer.timeMs) {
                setBestTime(timer.timeMs);
                setInLocal(timer.timeMs);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentChar.remCharCount]);
    const handleInputFieldChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        event.target.value = event.target.value.toUpperCase();
        setInputValue(event.target.value);
        const isLastMatching =
            event.target.value.slice(-1) === currentChar.char;

        if (isLastMatching) {
            // Check if this is the last character first
            if (currentChar.remCharCount === 1) {
                setIsGameRunning(false);
                setCurrentChar({
                    char: "Success!",
                    remCharCount: 0,
                });
                return;
            }
            // If not the last character, continue as normal
            setCurrentChar((previousCurrentChar) => {
                return getCurrentChar(isGameRunning, previousCurrentChar);
            });
        } else {
            setIsGameRunning(false);
            stopTimer(timer.intervalId, setTimer);
            setCurrentChar(getCurrentChar(false, currentChar, isLastMatching));
        }
    };
    const handleGameReset = (): void => {
        setInputValue(() => {
            return "";
        });
        setCurrentChar(getFreshCurrentChar(MAX_CHAR_COUNT));
        setIsGameRunning(true);
        setTimer(() => getFreshTimer());
    };
    return (
        <div className="Game">
            <h1>Type The Alphabets</h1>
            <p>Typing game to see how fast you type</p>
            <p>Timer starts when you do 😁</p>
            <Display textValue={currentChar.char} />
            <p>Time: {timer.timeMs.toFixed(2)}s</p>
            {!!bestTime && <p>My best time: {bestTime.toFixed(2)}s!</p>}
            <InputField
                isGameRunning={isGameRunning}
                value={inputValue}
                currentChar={currentChar.char}
                handleGameReset={handleGameReset}
                handleChange={handleInputFieldChange}
            />
        </div>
    );
};

export default Game;

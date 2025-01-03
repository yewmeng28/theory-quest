import React from "react";

const QuizSelector = ({ onSelectQuiz }) => {
    return (
        <div style={{display: "flex", flexDirection: "column", width: "70%"}}>
            <h2>Select a Quiz</h2>
            <button onClick={() => onSelectQuiz("Rhythm")}>Rhythm</button>
            <button onClick={() => onSelectQuiz("Pitch")}>Pitch</button>
            <button onClick={() => onSelectQuiz("Keys")}>Keys and Scales</button>
            <button onClick={() => onSelectQuiz("Intervals")}>Intervals</button>
            <button onClick={() => onSelectQuiz("Chords")}>Chords and Triads</button>
            <button onClick={() => onSelectQuiz("Terms")}>Terms</button>
            <button onClick={() => onSelectQuiz("Signs")}>Signs</button>
            <button onClick={() => onSelectQuiz("Instruments")}>Instruments</button>
            <button onClick={() => onSelectQuiz("Mixed")}>All</button>
        </div>
    );
};

export default QuizSelector;

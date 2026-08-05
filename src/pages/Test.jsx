import "./Test.css";
import { useState, useEffect } from "react";
import questions from "../data/questions";
import { useNavigate } from "react-router-dom";

function Test() {
    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [fade, setFade] = useState(true);

useEffect(() => {
    setFade(false);

    const timer = setTimeout(() => {
        setFade(true);
    }, 100);

    return () => clearTimeout(timer);
}, [currentQuestion]);

    const [scores, setScores] = useState({
        thinker: 0,
        explorer: 0,
        emotion: 0,
        psychology: 0,
    });

    const question = questions[currentQuestion];

    return (
        <div className="test-container">

            <h1>문학 취향 테스트</h1>

            <p>
                질문에 답하며 당신의 문학 유형을 찾아보세요.
            </p>

            <div className={`question-card ${fade ? "fade-in" : ""}`}>

                <p className="progress">
                    {question.id} / {questions.length}
                </p>

                <h2>
                    Q{question.id}. {question.question}
                </h2>

                <div className="option-list">

                    {question.options.map((option, index) => (

                        <button
                            key={index}
                            className="option-button"
                            onClick={() => {

                                const newScores = {
                                    ...scores,
                                    [option.type]: (scores[option.type] || 0) + 1
                                };

                                setScores(newScores);

                                if (currentQuestion < questions.length - 1) {
                                    setCurrentQuestion(currentQuestion + 1);
                                } else {
                                    navigate("/result", {
                                        state: newScores
                                    });
                                }
                            }}
                        >
                            {option.text}
                        </button>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Test;
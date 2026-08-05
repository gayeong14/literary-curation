import "./Result.css";
import { useLocation, useNavigate } from "react-router-dom";
import results from "../data/results";


function Result() {
    const location = useLocation();
    const scores = location.state;
    const navigate = useNavigate();
    if (!scores) {
        return (
            <div>
                <h1>테스트 결과가 없습니다.</h1>
                <p>먼저 문학 취향 테스트를 진행해주세요.</p>
            </div>
        );
    }

    const resultType = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    const result = results[resultType];

    return (
        <div className="result-container">
            <div className="result-header">

                <h1>당신의 문학 유형</h1>

                <h2>{result.title}</h2>

                <p>
                    {result.description}
                </p>

            </div>
            <h3 className="recommend-title">
    추천 작품
</h3>

            <div className="work-list">
                {result.works.map((work) => (
                    <div className="work-card" key={work.title}>

                        <img
        src={work.image}
        alt={work.title}
        className="book-cover"
    />

                        <div className="work-info">
                            <h4>{work.title}</h4>

                            <p className="author">
                                {work.author}
                            </p>
                        </div>

                        <button
                            className="detail-button"
                            onClick={() => navigate("/detail", { state: work })}
                        >
                            작품 자세히 보기
                        </button>

                    </div>
                ))}
            </div>

        </div>
    );

}
export default Result;
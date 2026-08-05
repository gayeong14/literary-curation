import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">

            <div className="home-card">

                <p className="club-name">
                    명지대학교 문학 동아리
                </p>

                <h1 className="main-title">
                    Étoile
                </h1>

                <p className="home-question">
                    당신은 어떤 이야기에 마음이 머무르나요?
                </p>

                <p className="home-description">
                    5개의 질문을 통해 당신의 문학 취향을 알아보고,
                    <br />
                    어울리는 작품을 만나보세요.
                </p>

                <button
                    className="start-button"
                    onClick={() => navigate("/test")}
                >
                    나의 문학 취향 찾기
                </button>

                <p className="instagram">
                    @mju_etoile
                </p>

            </div>

        </div>
    );
}

export default Home;
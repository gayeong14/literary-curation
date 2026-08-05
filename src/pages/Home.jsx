import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (
        <div className="home-container">

            <h1>
                문학 동아리 작품 큐레이션
            </h1>

            <p>
                당신은 어떤 이야기에 끌리나요?
            </p>

            <button
                onClick={() => navigate("/test")}
            >
                시작하기
            </button>

        </div>
    );
}

export default Home;
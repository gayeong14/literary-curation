import "./Detail.css";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const work = location.state;

  if (!work) {
    return (
      <div>
        <h1>작품 정보를 찾을 수 없습니다.</h1>
      </div>
    );
  }

  return (
    <div className="detail-container">

      <div className="detail-header">

        <img
          src={work.image}
          alt={work.title}
        />

        <h1>{work.title}</h1>

        <h3>{work.author}</h3>

      </div>


      <div className="detail-section">
        <h2>작품 키워드</h2>

        <p>
          {work.keyword}
        </p>
      </div>


      <div className="detail-section">
        <h2>작품 소개</h2>

        <p>
          {work.description}
        </p>
      </div>


      <div className="question-box">
        <h2>💭 생각해볼 질문</h2>

        <p>
          {work.question}
        </p>
      </div>

    </div>
  );
}

export default Detail;
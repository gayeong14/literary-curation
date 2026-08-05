import demian from "../assets/images/literature/demian.jpg";
import ivan from "../assets/images/literature/ivan.jpg";
import manEarth from "../assets/images/literature/man-earth.jpg";
import lastProof from "../assets/images/literature/last-proof.jpg";
import portrait from "../assets/images/literature/portrait.jpg";
import pastLives from "../assets/images/literature/past-lives.jpg";
import christmas from "../assets/images/literature/8christmas.jpg";
import afterSun from "../assets/images/literature/after-sun.jpg";
import kevin from "../assets/images/literature/kevin.jpg";
import catcher from "../assets/images/literature/catcher.jpg";

const results = {
    thinker: {
        title: "삶과 인간에 대한 질문을 좋아하는 사색형 독자",
        description:
            "인간의 존재와 삶의 의미에 대해 생각하게 만드는 이야기에 끌리는 유형입니다.",
        works: [
            {
                title: "《이반 일리치의 죽음》",
                author: "레프 톨스토이",
                keyword: "죽음을 통해 삶의 의미를 돌아보는 고전",
                description:
                    "죽음을 앞둔 한 인간이 자신의 삶을 돌아보며 진정한 삶의 의미를 찾아가는 과정을 그린 작품입니다.",
                question:
                    "나는 지금 어떤 삶을 살아가고 있는가?",
                image: ivan
            },
            {
                title: "《데미안》",
                author: "헤르만 헤세",
                keyword: "자아와 성장에 대한 내면 탐구",
                description:
                    "한 인물이 사회의 기준을 넘어 자신만의 정체성을 찾아가는 성장 이야기입니다.",
                question:
                    "진정한 나 자신으로 살아간다는 것은 무엇일까?",
                image: demian
            },
            {
                title: "《맨 프롬 어스》",
                author: "제롬 빅스비",
                keyword: "인간 존재와 시간에 대한 SF적 질문",
                description:
                    "한 인간의 특별한 경험을 통해 시간, 역사, 그리고 인간 존재에 대한 질문을 던지는 작품입니다.",
                question:
                    "만약 인간의 시간이 무한하다면 삶의 의미는 어떻게 달라질까?",
                image: manEarth
            }
        ]
    },

    explorer: {
        title: "새로운 세계와 가능성을 탐험하는 상상형 독자",
        description:
            "현실을 넘어 새로운 세계와 아이디어를 만나는 이야기에 끌리는 유형입니다.",
        works: [
            {
                title: "《마지막 증명》",
                author: "이하진",
                keyword: "재난 속에서 펼쳐지는 SF적 상상과 인간의 선택",
                description:
                    "거대한 위기 속에서 인간이 어떤 선택을 하고 서로를 어떻게 지켜내는지 보여주는 SF 작품입니다.",
                question:
                    "극한의 상황에서 인간을 움직이는 것은 무엇일까?",
                image: lastProof
            },
            {
                title: "《맨 프롬 어스》",
                author: "제롬 빅스비",
                keyword: "시간과 인간 존재에 대한 새로운 시선",
                description:
                    "한 인물의 특별한 이야기를 통해 시간, 역사, 그리고 인간 존재에 대한 새로운 관점을 제시하는 작품입니다.",
                question:
                    "만약 인간의 시간이 무한하다면 삶의 의미는 어떻게 달라질까?",
                image: manEarth
            }
        ]
    },

    emotion: {
        title: "관계와 감정의 흐름에 집중하는 공감형 독자",
        description:
            "인물 사이의 관계와 감정 변화를 따라가는 이야기에 끌리는 유형입니다.",
        works: [
            {
                title: "《8월의 크리스마스》",
                author: "허진호",
                keyword: "평범한 순간 속에 남는 기억과 사랑",
                description:
                    "삶의 마지막 순간에도 일상의 아름다움과 관계의 소중함을 담아낸 한국 영화입니다.",
                question:
                    "평범한 순간이 특별한 기억이 되는 이유는 무엇일까?",
                image: christmas
            },
            {
                title: "《패스트 라이브즈》",
                author: "셀린 송",
                keyword: "시간과 인연, 지나간 관계에 대한 이야기",
                description:
                    "서로 다른 삶을 살아온 두 사람이 다시 만나며 인연과 선택, 시간의 의미를 돌아보게 만드는 작품입니다.",
                question:
                    "지나간 인연은 우리의 삶에 어떤 의미로 남을까?",
                image: pastLives
            },
            {
                title: "《마지막 증명》",
                author: "이하진",
                keyword: "끝까지 서로를 향하는 마음과 선택에 대한 이야기",
                description:
                    "위기 속에서 인간이 서로를 믿고 지켜가는 과정을 통해 관계의 의미를 보여주는 작품입니다.",
                question:
                    "어려운 상황 속에서도 지키고 싶은 관계는 무엇일까?",
                image: lastProof
            },
            {
                title: "《타오르는 여인의 초상》",
                author: "셀린 시아마",
                keyword: "사랑, 기억, 그리고 서로를 바라보는 시선",
                description:
                    "두 인물의 관계를 통해 사랑과 예술, 기억이 남기는 의미를 섬세하게 그린 작품입니다.",
                question:
                    "사라진 순간도 우리의 삶에 남을 수 있을까?",
                image: portrait
            }
        ]
    },

    psychology: {
        title: "인간의 내면을 탐구하는 심리형 독자",
        description:
            "인물의 선택과 내면 변화를 깊게 바라보는 유형입니다.",
        works: [
            {
                title: "《데미안》",
                author: "헤르만 헤세",
                keyword: "자아 발견과 내면의 성장에 대한 이야기",
                description:
                    "사회가 정한 기준을 넘어 자신의 본질과 정체성을 찾아가는 한 인물의 성장 이야기입니다.",
                question:
                    "진정한 나 자신으로 살아간다는 것은 무엇일까?",
                image: demian
            },
            {
                title: "《케빈에 대하여》",
                author: "라이오넬 슈라이버",
                keyword: "가족과 인간 내면의 복잡한 심리",
                description:
                    "한 가족의 관계를 통해 사랑, 책임, 선택에 대한 불편한 질문을 던지는 작품입니다.",
                question:
                    "인간의 행동을 이해한다는 것은 무엇일까?",
                image: kevin
            },
            {
                title: "《호밀밭의 파수꾼》",
                author: "J. D. 샐린저",
                keyword: "성장 과정에서 마주하는 방황과 내면의 갈등",
                description:
                    "청소년기의 불안과 고립감, 그리고 자신만의 방식으로 세상을 이해하려는 한 인물의 이야기를 담은 성장 소설입니다.",
                question:
                    "나는 세상 속에서 어떤 모습으로 살아가고 있을까?",
                image: catcher
            },
            {
                title: "《이반 일리치의 죽음》",
                author: "레프 톨스토이",
                keyword: "죽음 앞에서 다시 바라보는 삶의 의미",
                description:
                    "죽음을 마주한 인간이 자신의 삶을 되돌아보며 진정한 의미를 찾는 과정을 담은 작품입니다.",
                question:
                    "나는 지금 어떤 삶을 살아가고 있는가?",
                image: ivan
            }
        ]
    }
};

export default results;

import ivan from "../assets/images/literature/ivan.jpg";
import manEarth from "../assets/images/literature/man-earth.jpg";
import lastProof from "../assets/images/literature/last-proof.jpg";
import portrait from "../assets/images/literature/portrait.jpg";
import pastLives from "../assets/images/literature/past-lives.jpg";
import christmas from "../assets/images/literature/8christmas.jpg";
import afterSun from "../assets/images/literature/after-sun.jpg";
import kevin from "../assets/images/literature/kevin.jpg";
import catcher from "../assets/images/literature/catcher.jpg";
import aoi from "../assets/images/literature/aoi-garden.jpg";
import tropical from "../assets/images/literature/tropical-night.jpg";

const results = {
    thinker: {
        title: "삶과 인간에 대한 질문을 좋아하는 사색형 독자",
        description:
            "인간의 존재와 삶의 의미에 대해 생각하게 만드는 이야기에 끌리는 유형입니다.",

        works: [
            {
                title: "《이반 일리치의 죽음》",
                type: "book",
                author: "톨스토이",
                keyword: "죽음을 통해 삶의 의미를 돌아보는 고전",
                description:
                    "죽음을 앞둔 한 인간이 자신의 삶을 돌아보며 진정한 삶의 의미를 찾아가는 과정을 그린 작품입니다.",
                question:
                    "왜 사람들은 살아있는 동안에는 진짜 중요한 것을 깨닫기 어려울까?",
                image: ivan
            },

            {
                title: "《맨 프롬 어스》",
                type: "movie",
                director: "리처드 쉔크만",
                keyword: "인간 존재와 시간에 대한 SF적 질문",
                description:
                    "한 인간의 특별한 경험을 통해 시간, 역사, 그리고 인간 존재에 대한 질문을 던지는 작품입니다.",
                question:
                    "존 올드맨의 이야기를 과연 어디까지 믿을 수 있을까?",
                image: manEarth
            }
        ]
    },

    explorer: {
        title: "낯선 세계를 탐험하는 탐험형 독자",
        description:
            "현실을 넘어 새로운 세계와 가능성, 낯선 존재를 만나는 이야기에 끌리는 유형입니다.",

        works: [
            {
                title: "《마지막 증명》",
                type: "book",
                author: "이하진",
                keyword: "재난 속에서 펼쳐지는 SF적 상상과 인간의 선택",
                description:
                    "거대한 위기 속에서 인간이 어떤 선택을 하고 서로를 어떻게 지켜내는지 보여주는 SF 작품입니다.",
                question:
                    "극한의 상황에서 우리가 끝까지 지키고 싶은 것은 무엇일까?",
                image: lastProof
            },

            {
                title: "《맨 프롬 어스》",
                type: "movie",
                director: "리처드 쉔크만",
                keyword: "시간과 인간 존재에 대한 새로운 시선",
                description:
                    "한 인물의 특별한 이야기를 통해 시간, 역사, 그리고 인간 존재에 대한 새로운 관점을 제시하는 작품입니다.",
                question:
                    "존 올드맨의 이야기를 과연 어디까지 믿을 수 있을까?",
                image: manEarth
            },

            {
                title: "《아오이가든》",
                type: "book",
                author: "편혜영",
                keyword: "낯선 세계 속에서 마주하는 인간다움",
                description:
                    "낯선 공간과 극단적인 상황 속에서 살아가는 인간들의 모습을 통해 인간다움과 존재의 의미를 생각하게 만드는 작품입니다.",
                question:
                    "극단적인 상황 속에서 인간을 인간답게 만드는 최소한의 조건은 무엇일까?",
                image: aoi
            },

            {
                title: "《트로피컬 나이트》",
                type: "book",
                author: "조예은",
                keyword: "낯선 존재와 마주하며 바라보는 삶과 죽음",
                description:
                    "익숙한 현실에 낯선 존재가 등장하는 순간을 통해 외로움과 관계, 삶과 죽음에 대한 질문을 던지는 작품입니다.",
                question:
                    "인간다운 죽음이란 무엇일까?",
                image: tropical
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
                type: "movie",
                director: "허진호",
                keyword: "평범한 순간 속에 남는 기억과 사랑",
                description:
                    "삶의 마지막 순간에도 일상의 아름다움과 관계의 소중함을 담아낸 한국 영화입니다.",
                question:
                    "만약 내가 정원이라면 그 순간 어떻게 했을까?",
                image: christmas
            },

            {
                title: "《패스트 라이브즈》",
                type: "movie",
                director: "셀린 송",
                keyword: "시간과 인연, 지나간 관계에 대한 이야기",
                description:
                    "서로 다른 삶을 살아온 두 사람이 다시 만나며 인연과 선택, 시간의 의미를 돌아보게 만드는 작품입니다.",
                question:
                    "영화에서 말하는 인연이 존재한다고 생각하나요?",
                image: pastLives
            },
            {
                title: "《애프터썬》",
                type: "movie",
                director: "샬롯 웰스",
                keyword: "기억 속에 남은 가족과 지나간 시간",
                description:
                    "어린 시절 아버지와 함께했던 여행을 돌아보며 기억과 관계의 의미를 섬세하게 그려낸 영화입니다.",
                question:
                    "시간이 지난 뒤에야 비로소 이해하게 되는 사람이 있다면, 그 사람은 누구일까?",
                image: afterSun
            },
            {
                title: "《타오르는 여인의 초상》",
                type: "movie",
                director: "셀린 시아마",
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
                title: "《호밀밭의 파수꾼》",
                type: "book",
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
                type: "book",
                author: "톨스토이",
                keyword: "죽음 앞에서 다시 바라보는 삶의 의미",
                description:
                    "죽음을 마주한 인간이 자신의 삶을 되돌아보며 진정한 의미를 찾는 과정을 담은 작품입니다.",
                question:
                    "나는 지금 어떤 삶을 살아가고 있는가?",
                image: ivan
            },
                        {
                title: "《케빈에 대하여》",
                type: "movie",
                director: "린 램지",
                keyword: "가족과 인간 내면의 복잡한 심리",
                description:
                    "한 가족의 관계를 통해 사랑, 책임, 선택에 대한 불편한 질문을 던지는 작품입니다.",
                question:
                    "케빈의 행동을 이해하는 것과 그의 행동을 용서하는 것은 같은 일일까?",
                image: kevin
            }
        ]
    }
};

export default results;
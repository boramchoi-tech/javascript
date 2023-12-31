/*
    문제26: 행성 문제2
    우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
    이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

    행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
*/

var planet = [
    {korean: "수성", english: "Mercury"}
    ,{korean: "금성", english: "Venus"}
    ,{korean: "지구", english: "Earth"}
    ,{korean: "화성", english: "Mars"}
    ,{korean: "목성", english: "Jupiter"}
    ,{korean: "토성", english: "Saturn"}
    ,{korean: "천왕성", english: "Uranus"}
    ,{korean: "해왕성", english: "Neptune"}
]

function solution(input) {
    var output = planet.filter(e => e.korean === input);
    if (output.length > 0) return output[0].english;
}
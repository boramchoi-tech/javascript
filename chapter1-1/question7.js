/*
    문제7: 변수명
    다음 중 변수명으로 사용할 수 없는 것 3개를 고르시오.

    1) age
    2) &age
    3) let
    4) _age
    5) 1age

    답: 2번, 3번, 5번
*/

function test() {
    var age = 1;
    //var &age = 1;
    //let let = 1;
    var _age = 1;
    //let 1age = 1;
}
/*
    문제1: 배열의 삭제
    다음 배열에서 400, 500을 삭제하는 code를 입력하세요.

    var nums = [100, 200, 300, 400, 500];
*/

var nums = [100, 200, 300, 400, 500];
console.log(nums.filter(val => val < 400));
/*
    문제62: 20190923 출력하기
    20190923을 출력합니다. 아래 기준만 만족하면 됩니다.

    1. 코드 내에 숫자가 없어야 합니다
    예) console.log(20190923)이라고 하시면 안 됩니다.
    2. 파일 이름이나 경로를 사용해서는 안 됩니다.
    3. 시간, 날짜 함수를 사용해서는 안 됩니다.
    4. 에러 번호 출력을 이용해서는 안 됩니다.
    5. input을 이용해서는 안 됩니다.
*/

// 풀이 1.
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

function output(input) {
    if(typeof input != 'string') return;
    return arr.indexOf(input);
}

var result = ''.concat(output('c'),output('a'),output('b'),output('j'),output('a'),output('j'),output('c'),output('d'));
console.log(result);

// 풀이 2.
// output 함수 8번 호출되는 방식이 마음에 안 들어서 2번으로 다시 풀이
// input으로 받아온 문자열을 배열로 만들어 for문으로 돌려 search 메소드 사용
var str = 'abcdefghij';
var result = '';

function output(input) {
    if(typeof input != 'string') return;
    for (var i=0; i<input.length; i++) {
        if (str.search(input[i]) == -1) return;
        result += str.search(input[i]);
    }
    return result;
}

output('cabjajcd');
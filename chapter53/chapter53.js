/*
    문제53: 괄호 문자열
    괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')'와 같은 것을 말한다.
    그 중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자.
    
    (())와 같은 문자열은 바른 문자열이지만 ()())와 같은 문자열은 바르지 않은 문자열이다.
    (해당 문제에서는 소괄호만 판별하지만, 중괄호와 대괄호까지 판별해 보세요.)
    
    입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해 보자.
*/

function submit() {
    var val = document.getElementById("text").value;
    test(val);
}

function test(input) {
    // 문자 길이가 홀수면 NO
    if (input.length % 2 != 0) return "NO";

    // 괄호 외 문자가 들어오면 NO
    var replaceStr = input.replace(/[\(\)\[\]\{\}]/gi, '');
    if (replaceStr.length > 0) return "NO";

    // 닫는 괄호가 여는 괄호보다 먼저 나올 경우 NO
    if (input.indexOf(")") < input.indexOf("(")) return "NO";
    if (input.indexOf("}") < input.indexOf("{")) return "NO";
    if (input.indexOf("]") < input.indexOf("[")) return "NO";

    // 여는 괄호가 나왔는데 여는 괄호의 개수 != 닫는 괄호의 개수라면 NO
    if (input.indexOf("(") != -1) {
        if (input.match(/\(/g).length != input.match(/\)/g).length) return "NO";
    }

    if (input.indexOf("{") != -1) {
        if (input.match(/\{/g).length != input.match(/\}/g).length) return "NO";
    }
    
    if (input.indexOf("[") != -1) {
        if (input.match(/\[/g).length != input.match(/\]/g).length) return "NO";
    }

    return validate(input) ? "YES" : "NO";
}

function validate(input) {
    var inputArr = [...input];
    var validateArr = [];

    for (var i=0; i<inputArr.length; i++) {
        if (inputArr[i] == "(" || inputArr[i] == "{" || inputArr[i] == "[") {
            validateArr.push(inputArr[i]);
        } else {
            //) } ]가 나왔을 경우
            switch (inputArr[i]) {
                case ")":
                    if (validateArr[validateArr.length-1] == "(") validateArr.pop();
                    break;
                case "}":
                    if (validateArr[validateArr.length-1] == "{") validateArr.pop();
                    break;
                case "]":
                    if (validateArr[validateArr.length-1] == "[") validateArr.pop();
                    break;
                default: break;
            }
        }
    }

    if (validateArr.length > 0) {
        return false;
    } else {
        return true;
    }
}
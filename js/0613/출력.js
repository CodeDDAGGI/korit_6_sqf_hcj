var num = 10;
var sNum = "10";

console.log(num == sNum);
var num2;
console.log(!num2);

/*
    !(not) 연산자를 활용하여 문자, 숫자 등의 자료를 논리 데이터로 변환
    var num = 10;
    !!num -> true
    num = 0;
    !!num -> false

    var str = "test";
    !!str -> true
    str = ""
    !!str -> false

    var array = [1, 2, 3];
    !!array -> true
    array = [];
    !array -> true
    !!array.length
    array.length === 0 -> false

    
*/

var num = 0;
console.log(!!num);
var str = "";
console.log(!!str);
var array = []; // 배열은 객체라서 값이 있다고 판단 길이를 활용해 값이 비었다 안비었다 체크 (true/false)
console.log(!!array.length);
var a;
console.log(!!a);
var b = null;
console.log(!!b);
var c = 0 / 0; //NaN
console.log(!!c);

// ex) 중괄호 기준 if 밖 전역변수
if(!num) { //ex) 중괄호 기준 if안에 지역변수
    var num2 = 20;
    console.log("num은 0입니다.");
}

if(!str) {
    console.log("빈 문자열입니다");
}

if(!b) {
    console.log("Null입니다");
}


const USERNAME = "admin";
const PASSWORD = "1234";

function login (username, password){
   if(USERNAME === username && PASSWORD === password) {
    console.log("로그인 성공");
    return;
   }
   console.log("로그인 실패");
}

login("","");
const login2 = login;
login2("admin" , "1234");

const add2 = function add(x, y){
    return x + y;
}

// 익명 함수
const sub2 = function (x , y){
    return x - y;
}

console.log(sub2(20, 10));

// 화살표 함수(람다)
let div = (x , y) => {
    return !x || !y ?  0 : x / y;
}

// 화살표 함수(명령이 한줄)
div = (x , y) => !x || !y ?  0 : x / y;

console.log(div(10, 2));


// 화살표 함수(매개변수가 하나면 괄호 생략 가능)
const print = data => console.log(data);
print("출력!");

// 함수안에 함수를 정의할때 화살표 함수
function main() {
    const tast = () => {
        console.log("테스트 함수 호출")
    }

    tast();
}

main();
// tast(); 출력 x
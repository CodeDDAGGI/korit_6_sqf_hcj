
// 비구조화할당으로 매개변수 설정

function printUser(user){ // 매개변수로 객체를 받은 경우
    console.log(`사용자이름: ${user.username}`);
    console.log(`비밀번호: ${user.password}`);
    console.log(`이름: ${user.name}`);
    console.log(`이메일: ${user.email}`);
}

function printUser2({username, password , name , email}){ // 객체의 속성의 키값을 매개변수로 받음
    console.log(`사용자이름: ${username}`);
    console.log(`비밀번호: ${password}`);
    console.log(`이름: ${name}`);
    console.log(`이메일: ${email}`);

}

function printUser3({username, password , name , email}){ // 객체의 속성의 키값을 매개변수로 받음
    console.log(`사용자이름: ${username}`);
    console.log(`비밀번호: ${password}`);
    console.log(`이름: ${name}`);
    console.log(`이메일: ${email}`);

}

function main() {
    const user = {
        username:"admin",
        password:"1234",
        name:"김준일",
        email:"aaa@gmail.com"
    }

    printUser(user);
    printUser2(user);
    console.log(printUser == printUser2); // false 
    console.log(printUser2 == printUser3); // false 서로 다른 함수 객체

    // const func1 = function(a, b) {
    //     return a + b;
    // };
    
    // const func2 = func1;
    
    // console.log(func1 == func2); // true 동일한 함수 객체를 참조하고 있으므로 true
    // console.log(func1 === func2); // true
}

main();
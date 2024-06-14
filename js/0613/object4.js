// 비구조 할당 , 구조 분해 할당

function main() {
    const user = {
        username:"admin",
        password:"1234",
        name:"김준일",
        email:"aaa@gmail.com"
    }

    console.log(user.username);
    console.log(user.name);
    console.log(user.email);

    const names = ["박현주", "이성희" ,"권오광" , "권혁진"];

    // 객체의 비구조화 할당 사용 예시 username = 변수
    const {username, password, email } = user;
    
    console.log(username);
    console.log(password);
    console.log(email);

    // 배열의 구조분해 할당 사용 예시
    // 객체와 다르게 순서대로 index순서에 따라 값을 가져옴
    const [a, b] = names;
    // const [a, ...b] = names;
    console.log(a);
    console.log(b);

    // user 객체를 가져와서 name을 제외한 변수들을 가지고옴
    // rest변수이기 때문에 아무 변수명이나 가능
    const { name, ...rest} = user;
    // let{name , ...rest} = user; 동일
    console.log(rest)

    console.log(names.slice(1,3)); // index[1] ~ index[2] 3전까지
}

main();

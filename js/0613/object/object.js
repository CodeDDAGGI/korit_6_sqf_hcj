const user = {
    username: "admin",
    password: "1234",
    name: {
        lastName: "김",
        fistName: "준일"
    },
    print: () => {
        console.log("사용자이름: " + user.username);
        console.log(`비밀번호 : ${user.password}`);
    }
};

const user2 = { 
    username: "admin",
    password: "1234",
    name: {
        lastName: "김",
        fistName: "준일"
    },
    print: () => {
        console.log("사용자이름: " + user.username);
        console.log(`비밀번호 : ${user.password}`);
    }
};
console.log(user === user2) // 서로 다른 객체라서 주소 값이 다름
console.log(user)
console.log(user.name.lastName)
console.log(user.name.fistName)
console.log(user.username)
console.log(user.password)
user.print()


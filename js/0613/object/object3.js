// 스프레드 연산자
// 
function modifyUser(user, target , value) {
    const newUser = {
        ...user, // 객체 있는 값들만 카피 username : "admin",password:"1234"
        [target]: value // "username"  [키값] : value [] 안치면 target 변수 [] 치면 매개변수로 들어온 target의 값이 들어옴
    };// 재정의
    return newUser;
}

function main() {
    let user = {
        username : "admin",
        password:"1234"
    }

    // delete user.password

    console.log(user);

    const newUser = modifyUser(user , "username" , "test-user");
    console.log(newUser);

    const newUser2 = modifyUser(newUser, "password" , "1111");
    console.log(newUser2)

    const userList = [ user, newUser]; // 주소 100 
    const newUserList = [...userList , newUser2]; // 주소 200 값만 복사
    console.log(userList);
    console.log(newUserList);

    const [ a, b ,c ] = newUserList;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(newUserList);
    const { username , password } = newUserList[0];
    console.log(" ")
    console.log("jump")
    console.log(username)
    console.log(password)
    console.log(newUserList[0])
    console.log("jump")
    
    // console.log(newUser === newUser2);
    // console.log(userList === newUserList);
    // console.log(userList === userList2);
    //  스프레드 -> 깊은 복사 주소값을 새로운 주소값으로 만들어서 안에 들어있는 값만 복사

    const userList2 = userList; // 얕은 복사(주소값이 같음)
    console.log(newUserList)
}

main();
//# 문제1
// : setTimeout을 사용하여 2초 후에 "Hello, TypeScript!"를 콘솔에 출력하는 함수를 작성


setTimeout(() => {
    console.log("Hello, Typescript!1")
}, 2000);

const hello = ()=> {
    setTimeout(() =>{
        console.log("Hello, Typescript!2");
    },2000)
}


hello();
//# 문제2

//& 사용자 데이터 배열
// : const users = [{ id: 1, name: "이승아" }, { id: 2, name: "김병규" }];
type user={
    id:number,
    name: string
    time?: ()=>void;
}

const users:user[] = [{id:1, name:"이승아"} , {id:2 , name:"김병규"}];
// : setTimeout을 사용하여, 2초 후에 모든 사용자의 이름을 콘솔에 출력하는 함수를 작성

setTimeout(() => {
    console.log(users)
},2000);

const hello2 = () => {
    setTimeout(()=> {
        console.log(users);
    },2000)
}

const user4 = {id:number , name:user.name , time()} = user;

hello2();

const defr:user = {
    id:1,
    name : "김병규",
    time : () => {
        console.log(`id : ${defr.id} , name: ${defr.name}` )
    }
}

setTimeout(() => {
    
},2000)
//# 문제3
// : 비동기 함수와 콜백
// : fetch를 모방하는 함수 mockFetch 생성
// >> 사용자 데이터를 비동기적으로 반환
// >> setTimeout을 사용하여 2초 후에 데이터를 반환하는 mockFetch 함수를 작성하고, 이를 사용하여 사용자 이름을 콘솔에 출력 (사용자 데이터는 위의 users 사용해주세요)

//# 문제4
// : async와 await 사용
// : mockFetch 함수를 Promise를 반환하도록 수정, async와 await를 사용하여 사용자 이름을 콘솔에 출력하는 함수를 작성 (함수명 fetchUser)

//#  문제5
// : 각 요소에 대해 콘솔에 출력하는 함수를 콜백과 함께 작성
// +) 각 숫자를 출력하기 전에 1초의 지연

//& const numbers = [1, 2, 3, 4, 5];

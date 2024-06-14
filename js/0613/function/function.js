// 1 정의
function add(x, y){
    return  x + y;
}

//     7          3
const result = add(10, 20);
console.log(result); // 8


function add(x , y, z){ // 2
    console.log(x); // 4  10
    console.log(y); // 5  11
    console.log(z); // 6  12
    return "리턴값";
}

add(10,20,30); //함수 호이스팅
// 9


// const result2 = (x , y ,z) => {
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// result2(40, 50 , 60);
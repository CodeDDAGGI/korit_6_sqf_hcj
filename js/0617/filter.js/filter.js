let names = ["김준일" , "김준이" , "김준삼"];

console.log(names);

// map return => 새배열 
names = names.map((name,index) => {return name + "님"})

console.log(names);

//filter return = 조건식
names = names.filter((name, index) => { return name !== "김준이님"});
console.log(names);                  // index !== 1
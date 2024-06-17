// inputMode = 1 > 추가
// inputMode = 2 > 수정
let inputMode = 1;

const names = [ "김준일" , "김준이" , "김준삼" ];
console.log(names.join(''))

let userList = [];
loadUserList();

let emptyUser = {
    id:0,
    name:"",
    username: "",
    password: ""
}; // 초기화용

let user = {
    ...emptyUser // 새로운 주소에 값들을 옮김
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({id ,name,username, password}, index)=> {
                
        // index는 문법 , {username, password} 비구조화 할당
        return `
            <tr>
                <th><input type="checkbox" onchange="handleUserCheck(event)"></th>
                <td>${index + 1}</td>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${password}</td>
                <th><button  onclick="deleteUser(event)" value="${id}">삭제</button></th>
            </tr>
         `;

    }).join("");
}


function handleUserInputKeyDown(e) {
    user = {
        ...user,
        [e.target.name]: e.target.value
    } // ...user로 새로운 주소를 만들땐 밑에 스프레드로 정의할 필요없음
    user[e.target.name] = e.target.value;
    
    console.log(user);
    

    if(e.keyCode === 13) {
        const nameInput = document.querySelector(".name-input");
        // const body = document.querySelector("body");
        // const sda = body.querySelector("id,class 명, 태그명")
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        
        if(e.target.name ==="name"){
            usernameInput.focus();
            if(e.target.value === ""){
                alert("성명을 넣어주세요")
                nameInput.focus();
                return
            }
        }
        
        if(e.target.name === "username"){
            passwordInput.focus();
            if(e.target.value === ""){
                alert("이름을 넣어주세요")
                usernameInput.focus();
                return
            }
            
        }
        if(e.target.name === "password"){
            // {...user}을 사용한 이유 : 같은 주소에 여러개가 할당이 될 경우 한 주소에 다른값을 넣으면 다른 주소의 값도 같이 바뀌어서 
            // 새로운 주소에 새로운 객체의 값 전달을 위해
            if(e.target.value === ""){
                alert("비밀번호를 넣어주세요")
                return
            }
            userList = [ ...userList, {...user , id: getNewid()}];
            console.log(userList);


            nameInput.value = emptyUser.name;
            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            nameInput.focus();

            saveUserList();
            
            renderTable();
        }
    }
    console.log(e.target.name);
};

function saveUserList() {
    localStorage.setItem("userList", JSON.stringify(userList));
}

function loadUserList() {
    const lsUserList = localStorage.getItem("userList");
    userList = !lsUserList ? [] : JSON.parse(lsUserList);
    renderTable();
}

function deleteUser(e) { // index로 지우는거 보다 키값으로 지우는 걸 권장
    userList = userList.filter(({id}) => id !== parseInt(e.target.value)); 
    saveUserList();
    renderTable();

};

function getNewid() {
    const userIds = userList.map(user => user.id).sort();
    const maxUserId = userIds.length === 0 ? 20240000 : Math.max.apply(null, userIds); 
    console.log(maxUserId);
    return maxUserId + 1;
}

// 클릭을 하면 
// const checkBoxList = document.querySelectorAll("input[type='checkbox']");
// 반복(for)
// const checkbox = checkBoxList[i]
// if (e.target.checked === checkBox){
//      continue(같을경우)   
// }
//      checkbox.checked = false; 
// 체크된 box가 있으면
// input의 속성값 name이랑 일치하게 넣어주기             
function handleUserCheck(e) {
    const checkedBoxList = document.querySelectorAll("input[type='checkbox']");
    
    if (e.target.type === 'checkbox') {
        const clickedCheckbox = e.target;
    for(let i = 0; i < checkedBoxList.length; i++){
        const checkbox = checkedBoxList[i];
        if(e.target.checked === checkbox){
            continue;
        }
        checkbox.checked = false;
        
        if (clickedCheckbox.checked) {
            const inputName = checkbox.getAttribute('name');
            const inputValue = clickedCheckbox.checked ? inputName : '';
            document.querySelector(`input[name='${inputName}']`).value = inputValue;
            }
        }
    }
    
}   

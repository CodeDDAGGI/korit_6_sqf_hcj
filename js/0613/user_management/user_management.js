const names = [ "김준일" , "김준이" , "김준삼" ];
console.log(names.join(''))

let userList = [];
let emptyUser = {
    username: "",
    password: ""
}; // 초기화용

let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({username, password}, index)=> {

        return `
            <tr>
                <td>${index + 1}</td>
                <td>${username}</td>
                <td>${password}</td>
            </tr>
         `;

    }).join("");
}

function handleUserInputKeyDown(e) {
    user = {
        ...user,
        [e.target.name]: e.target.value
    }

    console.log(user);

    if(e.keyCode === 13) {
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        if(e.target.name === "username"){
            passwordInput.focus();
        }
        if(e.target.name === "password"){
            if(e.target.name ===""){
                alert("값을 넣어주세요")
            }
            // {...user}을 사용한 이유 : 같은 주소에 여러개가 할당이 될 경우 한 주소에 다른값을 넣으면 다른 주소의 값도 같이 바뀌어서 
            // 새로운 주소에 새로운 객체의 값 전달을 위해
            userList = [ ...userList, {...user}];
            console.log(userList);

            renderTable();

            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            usernameInput.focus();
        }
    }
    console.log(e.target.name);
};
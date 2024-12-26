const sginEmail =document.querySelector("#sginEmail")
const sginPassword =document.querySelector("#sginPassword")
const btnlogin =document.querySelector("#btnLogin")
const incorrectMsg =document.querySelector("#incorrectMsg")
const requiredsMsg =document.querySelector("#requiredsMsg")
console.log(btnlogin,sginEmail,sginPassword)

let userArray =[];
if (localStorage.getItem("Username") !== null) {
    userArray = JSON.parse(localStorage.getItem("Username"));
    console.log(userArray);

}
const loginUser =function (){
    incorrectMsg.classList.replace("d-block","d-none");
    for(let i=0;i<userArray.length;i++){
        if(userArray[i].email===sginEmail.value && userArray[i].password ===sginPassword.value){
            localStorage.setItem("Username", userArray[i].name);
            setTimeout(() => {
                 window.location.href="home.html"
            }, 2000);
            return;
        }
    }
    incorrectMsg.classList.replace("d-none","d-block");

}
btnlogin.addEventListener ("click", loginUser);
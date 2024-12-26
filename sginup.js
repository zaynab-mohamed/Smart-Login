const sginName =document.querySelector("#sginName")
const sginEmail =document.querySelector("#sginEmail")
const sginPassword =document.querySelector("#sginPassword")
const regsiterBtn =document.querySelector("#regsiterBtn")
const successMsg =document.querySelector("#successMsg")
const errorMsg =document.querySelector("#errorMsg")
// console.log(sginName,sginEmail,sginPassword,regsiterBtn)
let userArray =[];
if (localStorage.getItem("Username") !== null) {
    userArray = JSON.parse(localStorage.getItem("Username"));
    console.log(userArray)

}
const regsiterUser =function (){
    errorMsg.classList.replace("d-block","d-none",)
    for(let i=0;i<userArray.length;i++){
        if(userArray[i].email===sginEmail.value){
            errorMsg.classList.replace("d-none","d-block")
            return;
        }
    }
      let user ={
        name:sginName.value,
        email:sginEmail.value,
        password:sginPassword.value,
      }

    userArray.push(user);
      console.log(userArray)
      localStorage.setItem("Username",JSON.stringify(userArray));
      successMsg.classList.replace("d-none","d-block")
      setTimeout(() => {
        window.location.href="login.html"
      }, 2000);
}

regsiterBtn.addEventListener ("click", regsiterUser);
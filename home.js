const welcomeUser= document.querySelector("#welcomeUser")
if(localStorage.getItem("Username")){
    const userName =localStorage.getItem("Username");
    console.log(userName);
    welcomeUser.innerHTML=`Welcome ${userName}`;

}
else{
    setTimeout(() => {
        window.location.href="login.html";
    }, 2000);
}

let btnLogout = document.getElementById("btnLogout")
btnLogout.addEventListener('click',function(){
    window.location.href="login.html";

})
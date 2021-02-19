var header = document.querySelector("header");
var prevScrollPos = window.pageYoffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
        if(prevScrollPos> currentScrollPos){
            header.style.top = "0";
        }else{
            header.style.top = "-80px"
        }
        prevScrollPos = currentScrollPos;
}


var loginModalBtn= document.querySelector(".btn-login");
var loginModalBg = document.querySelector(".login-modal-bg")
var signupModalBg = document.querySelector(".signup-modal-bg")

loginModalBtn.addEventListener("click",function(){
    loginModalBg.style.display = "block";
});

window.addEventListener("click", function(e){
    if(e.target == loginModalBg){
        loginModalBg.style.display = "none";
    }
})

window.addEventListener("click", function(e){
    if(e.target == signupModalBg){
        signupModalBg.style.display = "none";
    }
})

// var signupModalBtn= document.querySelector(".btn-signup");
// var signupModalBg = document.querySelector(".signup-modal-bg")

// signupModalBtn.addEventListener("click",function(){
//     signupModalBg.style.display = "block";
// });

// window.addEventListener("click", function(e){
//     if(e.target == signupModalBg){
//         signupModalBg.style.display = "none";
//     }
// })


var newAccount = document.querySelector(".login-modal-bg .signup")

newAccount.addEventListener("click", function(){
    signupModalBg.style.display = "block";
    loginModalBg.style.display = "none";
    
})

var accessLogin =document.querySelector(".signup-modal-bg .login")

accessLogin.addEventListener("click", function(){
    loginModalBg.style.display = "block";
    signupModalBg.style.display = "none";
})
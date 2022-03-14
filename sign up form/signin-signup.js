const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode")
});

sign_in_btn.addEventListener("click", function goSignIn() {
    container.classList.remove("sign-up-mode")
});
// --------------------------------------------------------------
// Global Variables
// ------------------
var fName = document.getElementById("name1")
var lName = document.getElementById("name2")
var mail = document.getElementById("mail")
var Pass = document.getElementById("pass1")
var cPass = document.getElementById("pass2")
var submit = document.getElementById("submit")
var date = new Date(1/16/2023)
// --------------------------------------------

// check Validate
// --------------
var ValidateName = false
var validateMail = false
var ValidatePass = false
var fullName = fName.value + lName.value

function checkfname(){
    if(fName.value !== "" && fName.value.length >= 3 && isNaN(fName.value)){
        var testfname = document.getElementById("fname")
        testfname.innerHTML = `Available name`
        testfname.style.color = `#007600`
        console.log("true")
    }
}

function checklname(){
    if(lName.value !== "" && lName.value.length >= 3 && isNaN(lName.value)){
        ValidateName = true
        var testlname = document.getElementById("lname")
        testlname.innerHTML = `Available name`
        testlname.style.color = `#007600`
        console.log("true")
    }
}

function validationmail(){
    var testmail = document.getElementById("checkmail")
    if((/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/).test(mail.value)){
        console.log("mail true")
        validateMail = true
        document.cookie = (`Email=${mail.value}; path=/`);
        testmail.innerHTML = `Your email address is valid`
        testmail.style.color = `#007600`
    }else{
        testmail.innerHTML = `Your email address in valid`
        testmail.style.color = `crimson`
    }
}

function validationpass(){
    var testpass = document.getElementById("checkpass")
    if(Pass.value.length > 3 && Pass.value.length < 6){
        document.cookie = (`Password=${Pass.value}; path=/`);   
        testpass.innerHTML = `Your password is weak`
        testpass.style.color = `#919107`
    }else if(Pass.value.length > 6){
        ValidatePass = true
        document.cookie = (`Password=${Pass.value}; path=/`);   
        testpass.innerHTML = `Your password is strong`
        testpass.style.color = `#007600`
    }else if(Pass.value.length < 3){
        testpass.innerHTML = `Your password not valid`
        testpass.style.color = `crimson`
    }
}    

function machpass(){
    var match = document.getElementById("matchpass")
    if(Pass.value === cPass.value){
        ValidatePass = true
        match.innerHTML = `password matched`
        match.style.color  = `#007600`
    }else{
        match.innerHTML = `password not matched`
        match.style.color  = `crimson`
    }
}
submit.addEventListener("click", function(e){
    e.preventDefault()
    if(fName.value === ""){
        var testfname = document.getElementById("fname")
        ValidateName = false
        testfname.innerHTML = `Wrong name`
        testfname.style.color = `crimson`
    }else if(lName.value === ""){
        var testlname = document.getElementById("lname")
        ValidateName = false
        testlname.innerHTML = `Wrong name`
        testlname.style.color = `crimson`
    }
    if(validateMail === true && ValidateName === true && ValidatePass === true){
        e.preventDefault()
        console.log("hello")
        var fullName = fName.value + " " + lName.value
        localStorage.setItem('firstName', `${fName.value}`)
        localStorage.setItem('lastName', `${lName.value}`)
        localStorage.setItem('userName', `${fullName}`)
        localStorage.setItem('Email', `${mail.value}`)
        localStorage.setItem('Password', `${Pass.value}`)
        container.classList.remove("sign-up-mode")
        
    }
})
// ------------------------------------------------------
// sign in
// ----------
function getCookie(key){
    var value = "not found";
    var x = document.cookie;
    var arr = x.split(";");
    for(var i =0;i<arr.length;i++){
        var arrkeyvalue = arr[i].split("=")
        if(arrkeyvalue[0].trim() === key){
            value = arrkeyvalue[1];
        }
    }
    return value
}

var signMail = document.querySelector("#signMail")
var signPass = document.querySelector("#signPass")
var entermail = document.getElementById("entermail")
var enterpass = document.getElementById("enterpass")
var enter = document.getElementById("enter")

enter.addEventListener( "click", function enter(){
    var getMail = localStorage.getItem("Email");
    var getPass = localStorage.getItem("Password");

    if(signMail.value == getMail && signPass.value == getPass){
        window.location.replace("../test/exam.html")
    }else if(signMail.value !== getMail){
        entermail.innerHTML = `Email not exist`
        entermail.style.color = `crimson`
    }else{
        entermail.innerHTML = `Valide Email`
        entermail.style.color = `#007600`
        if(signPass.value !== getPass){
            enterpass.innerHTML = `Wrong Password`
            enterpass.style.color = `crimson`
        }
    }
})

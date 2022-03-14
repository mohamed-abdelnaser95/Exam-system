// Function constructor of question and answer
// -------------------------------------------
function Question (quest, Ransw, ansArr){
    this.quest = quest,
    this.Rans = Ransw,
    this.ansArr = ansArr
    
}

function AnswersofQuest(ans1, ans2, ans3, ans4){
    this.ans1 = ans1;
    this.ans2 = ans2;
    this.ans3 = ans3;
    this.ans4 = ans4;
}

var a1 = new AnswersofQuest(5, 6, 4, 8)
var a2 = new AnswersofQuest(16, 20, 12, 8)
var a3 = new AnswersofQuest(12, 6, 27, 9)
var a4 = new AnswersofQuest(12, 20, 15, 9)
var a5 = new AnswersofQuest(30, 42, 27, 48)
var answerArr = [a1, a2, a3, a4, a5]

var q1 = new Question("What is the answer of 2 x 2", 4, a1)
var q2 = new Question("What is the answer of 4 x 4", 16, a2)
var q3 = new Question("What is the answer of 3 x 3", 9, a3)
var q4 = new Question("What is the answer of 3 x 5", 15, a4)
var q5 = new Question("What is the answer of 6 x 7", 42, a5)
var questArray = [q1, q2, q3, q4, q5]
// -----------------------------------
// For random question
// ---------------------
var randomCopy =[] ;
// for(var i = 0; i < questArray.length; i++){ 
//     var randomElement = questArray[Math.floor(Math.random()*questArray.length)] 
//     if(!randomCopy.includes(randomElement)){
//         randomCopy.push(randomElement) 
//     }else if(randomCopy.includes(randomElement)){
//         i--
//     }
// }
for(var i = 0; i < questArray.length; i++){ 
    var randomElement = questArray[Math.floor(Math.random()*questArray.length)] 
    if(randomCopy.indexOf(randomElement) === -1){
        randomCopy.push(randomElement)          
    }else if(randomCopy.indexOf(randomElement) !== -1 ){
        i--
    }
}
// ---------------------------------------------
// Exam body
// -----------
var content = document.querySelector(".content")
var start = document.getElementById("start")
var btnnext = document.getElementById("next")
var btnPre = document.getElementById("pre")
var btnsubmit = document.getElementById("submit")
var examBody = document.querySelector("#exam-body")
var info = document.querySelector(".instruction")
var coldown = document.getElementById("time")
var finalResult = 0;

function exam(){
    for(var x = 0; x < questArray.length; x++){
        var box = document.createElement("div")
        box.setAttribute("class", `box`)

        var question = document.createElement("p")
        question.setAttribute("class", `quest ${x + 1}`)
        question.innerHTML = `Q${x+1}. ${randomCopy[x].quest}`
        box.appendChild(question)
    
        var answers = document.createElement("div")
        answers.setAttribute("class", `ansdiv ${x + 1}`)
        answers.innerHTML =
        `<input type ='radio' name = 'ch${x+1}' value ='${randomCopy[x].ansArr.ans1}'> <span>${randomCopy[x].ansArr.ans1}</span><br><br> 
        <input type  ='radio' name = 'ch${x+1}' value ='${randomCopy[x].ansArr.ans2}'> <span>${randomCopy[x].ansArr.ans2}</span><br><br> 
        <input type  ='radio' name = 'ch${x+1}' value ='${randomCopy[x].ansArr.ans3}'> <span>${randomCopy[x].ansArr.ans3}</span><br><br> 
        <input type  ='radio' name = 'ch${x+1}' value ='${randomCopy[x].ansArr.ans4}'> <span>${randomCopy[x].ansArr.ans4}</span><br><br> `
        box.appendChild(answers)
        
        var marker = document.createElement("button")
        marker.innerHTML = "Mark"
        marker.setAttribute("value", `${x+1}`)
        marker.setAttribute("id", `setMark`)
        marker.setAttribute("onclick", "setMark(this.value)")
        box.appendChild(marker)
        content.appendChild(box)
    }
}
// -------------------------------------
// Start Exam
// ---------------
start.onclick = function(){
    info.style.display = "none"
    examBody.style.display = "block"
    exam()
    var time = setInterval(function (){
    coldown.innerHTML = coldown.innerHTML-1
    console.log(coldown.innerHTML)
        if(coldown.innerHTML == 10){
            coldown.style.backgroundColor = "darkred"
            coldown.style.color = "#bdbdbd"
        }
        if(coldown.innerHTML == 0){
            clearInterval(time)
            result()
        }
    }, 1000)
}
// ---------------------------------------------
// Button next and pre
// ---------------------
var i = 0;
btnnext.onclick = function (){
    var contentBox = document.querySelectorAll(".box")
        if(i >= questArray.length-1){
            i = questArray.length-1
    }else{
        contentBox[i].style.display = "none"
        contentBox[i+1].style.display = "block"
        i++
    }
}
// ------
btnPre.addEventListener ("click",function (){
    var contentBox = document.querySelectorAll(".box")
    if(i <= 0){
        i = 0
    }
    else{
        contentBox[i].style.display = "none"
        contentBox[i-1].style.display = "block"    
        i--
        
    }
})
// --------------------------------
// Mark
// -------
var markArr = []
function setMark(e){
    var markedque = document.createElement("button")
    markedque.setAttribute("value", `${e}`)
    markedque.setAttribute("id", `${e}`)
    markedque.setAttribute("onclick", "showque(this.value)")
    markedque.innerHTML = `Q${e} <button value='${e}' onclick='del(this)'>Del</button>`
    
    var markedDiv = document.querySelector(".markedDiv")
    markedDiv
    markedDiv.appendChild(markedque)

    var hidebtn = document.querySelector(`button[value='${e}']`)
    hidebtn.style.visibility = "hidden"
    markedque
}

function showque (e){
    var contentBox = document.querySelectorAll(".box")
    contentBox[i].style.display = "none"
    i = e-1
    contentBox[i].style.display = "block"
}

function del(e){
    var hidemark = document.querySelector(`.markedDiv button[value='${e.value}']`)
    var hidebtn = document.querySelector(`button[value='${e.value}']`)
    hidebtn.style.visibility = "visible"
    hidemark.remove()
}
// -------
// Result
// -----------
function result(){
    coldown.innerHTML = 0;
    var checked = document.querySelectorAll('input[type="radio"]:checked');
    for(var i=0; i < checked.length; i++ ){
        if (checked[i].value == randomCopy[i].Rans){
            finalResult++
        }
    }
    var final = `${finalResult * 20}%`
    console.log(`finalResult is ${finalResult} from ${questArray.length}`)
    localStorage.setItem("result", `${final}`)
    window.location.replace("../result/index.html")
}
// --------------------------------------------------------------

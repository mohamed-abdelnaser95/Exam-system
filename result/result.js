var text = document.querySelector(".text")
var resultDiv = document.getElementById("result")
var show = document.getElementById("show")
console.log(show)

// function getCookie(key){
//     var value = "not found";
//     var x = document.cookie;
//     var arr = x.split(";");
//     for(var i =0;i<arr.length;i++){
//         var arrkeyvalue = arr[i].split("=")
//         if(arrkeyvalue[0].trim() === key){
//             value = arrkeyvalue[1];
//         }
//     }
//     return value
// }

var getName = localStorage.getItem("userName")
var getResult = localStorage.getItem("result")

text.innerHTML = 
`<h3> Congrats ${getName} you finished the exam and you got ${getResult}</h3> `

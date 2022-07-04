var Form1 = document.getElementById("form1");
var Form2 = document.getElementById("form2");
var Form3 = document.getElementById("form3");
var Form4 = document.getElementById("form4");

var Next1 = document.getElementById("next1");
var Next2 = document.getElementById("next2");
var Next3 = document.getElementById("next3");
var Back1 = document.getElementById("back1");
var Back2 = document.getElementById("back2");
var Back3 = document.getElementById("back3");
var progress = document.getElementById('progress')

Next1.onclick = function() {
    Form1.style.left = "-450px"
    Form2.style.left = "40px"
    progress.style.width = "180px"

}
Back1.onclick = function() {
    Form1.style.left = "40px"
    Form2.style.left = "450px"
    progress.style.width = "90px"
}
Next2.onclick = function() {
    Form2.style.left = "-450px"
    Form3.style.left = "40px"
    progress.style.width = "270px"
}
Back2.onclick = function() {
    Form2.style.left = "40px"
    Form3.style.left = "450px"
    progress.style.width = "180px"
}
Next3.onclick = function() {
    Form3.style.left = "-450px"
    Form4.style.left = "40px"
    progress.style.width = "360px"
}
Back3.onclick = function() {
    Form3.style.left = "40px"
    Form4.style.left = "450px"
    progress.style.width = "240px"
}
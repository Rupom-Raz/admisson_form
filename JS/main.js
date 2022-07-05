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
var progress = document.getElementById("progress");

var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");

step1.onclick = function () {
   
};

step2.onclick = function() {

}

Next1.onclick = function () {
    Form1.style.left = "-1200px";
    Form2.style.left = "30px";
    progress.style.width = "50%";
};
Back1.onclick = function () {
    Form1.style.left = "30px";
    Form2.style.left = "1200px";
    progress.style.width = "25%";
};
Next2.onclick = function () {
    Form2.style.left = "-1200px";
    Form3.style.left = "30px";
    progress.style.width = "75%";
};
Back2.onclick = function () {
    Form2.style.left = "30px";
    Form3.style.left = "1200px";
    progress.style.width = "50%";
};
Next3.onclick = function () {
    Form3.style.left = "-1200px";
    Form4.style.left = "30px";
    progress.style.width = "100%";
};
Back3.onclick = function () {
    Form3.style.left = "30px";
    Form4.style.left = "1200px";
    progress.style.width = "75%";
};

// Same as JS
function FillAddressInput() {
    let checkbox = document.getElementById("filladdress");
    let pre_Division = document.getElementById("pre_Division");
    let pre_District = document.getElementById("pre_District");
    let pre_City = document.getElementById("pre_City");
    let pre_Postal = document.getElementById("pre_Postal");
    let par_Division = document.getElementById("par_Division");
    let par_District = document.getElementById("par_District");
    let par_City = document.getElementById("par_City");
    let par_Postal = document.getElementById("par_Postal");

    if (checkbox.checked == true) {
        let pre_DivisionVal = pre_Division.value;
        let pre_DistrictVal = pre_District.value;
        let pre_CityVal = pre_City.value;
        let pre_PostalVal = pre_Postal.value;

        par_Division.value = pre_DivisionVal;
        par_District.value = pre_DistrictVal;
        par_City.value = pre_CityVal;
        par_Postal.value = pre_PostalVal;
    } else {
        par_Division.value = "";
        par_District.value = "";
        par_City.value = "";
        par_Postal.value = "";
    }
}

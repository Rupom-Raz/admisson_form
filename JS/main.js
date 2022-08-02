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

Form1.addEventListener("submit", (e) => {
    e.preventDefault();
    var names = document.getElementById("name").value;
    var program = document.getElementById("program").value;
    var applicationType = document.getElementById("selectField").value;
    var Gender = document.getElementById("gender").value;
    var religion = document.getElementById("religion").value;
    var nationality = document.getElementById("nationality").value;
    var dob = document.getElementById("dob").value;
    var bloodGroup = document.getElementById("bloodGroup").value;
    var birth_cert = document.getElementById("birth_cert").value;
    var photo = document.getElementById("photo").value;
    var nation_ID = document.getElementById("nation_ID").value;
    var passport_NO = document.getElementById("passport_NO").value;
    var blood_Group = document.getElementById("blood_Group").value;
    var passExipireDate = document.getElementById("passExipireDate").value;
    var passportPhoto = document.getElementById("passportPhoto").value;
    var tribal = document.getElementById("tribal").value;
    var police_clearence = document.getElementById("police_clearence").value;
    console.log(
        names,
        program,
        applicationType,
        Gender,
        religion,
        nationality,
        dob,
        bloodGroup,
        birth_cert,
        photo,
        nation_ID,
        passport_NO,
        blood_Group,
        passExipireDate,
        passportPhoto,
        tribal,
        police_clearence
    );
});

Next1.onclick = function () {
    Form1.style.left = "-4000px";
    Form2.style.left = "30px";
    progress.style.width = "50%";
};
Back1.onclick = function () {
    Form1.style.left = "30px";
    Form2.style.left = "4000px";
    progress.style.width = "25%";
};
Next2.onclick = function () {
    Form2.style.left = "-4000px";
    Form3.style.left = "30px";
    progress.style.width = "75%";
};
Back2.onclick = function () {
    Form2.style.left = "30px";
    Form3.style.left = "4000px";
    progress.style.width = "50%";
};
Next3.onclick = function () {
    Form3.style.left = "-4000px";
    Form4.style.left = "30px";
    progress.style.width = "100%";
};
Back3.onclick = function () {
    Form3.style.left = "30px";
    Form4.style.left = "4000px";
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

// International Student check
var selectField = document.getElementById("selectField");
var bloodGroup = document.getElementById("bloodGroup");
var photo = document.getElementById("photo");
var hideBloodGr = document.getElementById("hideBloodGr");
var birth_cert = document.getElementById("birth_cert");
var medicalCert = document.getElementById("medicalCert");
var tribal = document.getElementById("tribal");
var passNoSpan = document.getElementById("passNoSpan");
var hidePhoto = document.getElementById("hidePhoto");
var policeClearance = document.getElementById("policeClearance");
var passPhoto = document.getElementById("passPhoto");
var nation_id = document.getElementById("nation_id");
var pass_expire = document.getElementById("pass_expire");
var local_hidden = document.getElementById("local_hidden");

function interOnchange() {
    if (selectField.value === "International Student") {
        bloodGroup.style.display = "block";
        photo.style.display = "block";
        pass_expire.style.display = "block";
        policeClearance.style.display = "block";
        medicalCert.style.display = "block";
        passPhoto.style.display = "block";
        birth_cert.style.display = "none";
        hideBloodGr.style.display = "none";
        tribal.style.display = "none";
        hidePhoto.style.display = "none";
        nation_id.style.display = "none";
        passNoSpan.style.visibility = "visible";
    } else if (selectField.value === "Local Student(Bangladeshi)") {
        bloodGroup.style.display = "none";
        photo.style.display = "none";
        passPhoto.style.display = "none";
        policeClearance.style.display = "none";
        medicalCert.style.display = "none";
        pass_expire.style.display = "none";
        birth_cert.style.display = "block";
        nation_id.style.display = "block";
        hidePhoto.style.display = "block";
        tribal.style.display = "block";
    }
}

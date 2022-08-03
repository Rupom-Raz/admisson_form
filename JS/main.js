let Form1 = document.getElementById("form1");
let Form2 = document.getElementById("form2");
let Form3 = document.getElementById("form3");
let Form4 = document.getElementById("form4");

let Next1 = document.getElementById("next1");
let Next2 = document.getElementById("next2");
let Next3 = document.getElementById("next3");
let Back1 = document.getElementById("back1");
let Back2 = document.getElementById("back2");
let Back3 = document.getElementById("back3");
let progress = document.getElementById("progress");

let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");

//DOB format change
let DOB = document.getElementById("dob");
let dateOfBirthRegex = /^(19|20)\d\d[- /.] (0[1-9]|1[012])[- /.] (0[1-9]|[12][0-9]|3[01])$/;
if (dateOfBirthRegex.test(DOB)) {
    console.log("true");
} else {
    console.log("false");
}

//Form1 Validation Check
Form1.addEventListener("submit", (e) => {
    e.preventDefault();
    let typeErrorMsg = document.getElementById("typeError");
    let nameErrorMsg = document.getElementById("nameError");
    let programError = document.getElementById("programError");
    let genderError = document.getElementById("genderError");
    let religionError = document.getElementById("religionError");
    let nationError = document.getElementById("nationError");
    let photoError = document.getElementById("photoError");
    let passNoError = document.getElementById("passNoError");
    let passPhotoError = document.getElementById("passPhotoError");
    let hidePhotoError = document.getElementById("hidePhotoError");
    let mediCertError = document.getElementById("mediCertError");
    let policeClearError = document.getElementById("policeClearError");
    let applicationType = document.getElementById("selectField").value;
    let names = document.getElementById("name").value;
    let program = document.getElementById("program").value;
    let Gender = document.getElementById("gender").value;
    let religion = document.getElementById("religion").value;
    let nationality = document.getElementById("nationality").value;
    let dob = document.getElementById("dob").value;
    let medicalCertificate =
        document.getElementById("medicalCertificate").value;
    let bloodGroup = document.getElementById("bloodGroup").value;
    let birth_cert = document.getElementById("birth_cert").value;
    let photo = document.getElementById("photo").value;
    let hidePhoto = document.getElementById("hidePhoto").value;
    let nation_ID = document.getElementById("nation_ID").value;
    let passport_NO = document.getElementById("passport_NO").value;
    let blood_Group = document.getElementById("blood_Group").value;
    let passExipireDate = document.getElementById("passExipireDate").value;
    let passportPhoto = document.getElementById("passportPhoto").value;
    let tribal = document.getElementById("tribal").value;
    let police_clearence = document.getElementById("police_clearence").value;

    //Form1 regex
    let nameRegex = /^[a-z ,.'-]+$/i;

    if (applicationType === "" || applicationType == null) {
        typeErrorMsg.innerHTML = "Please Select Type";
    } else {
        typeErrorMsg.innerHTML = "";
    }
    if (names === "" || names == null) {
        nameErrorMsg.innerHTML = "Name is Required!";
    } else if (!nameRegex.test(names)) {
        nameErrorMsg.innerHTML = "Name is Not Valid";
    } else {
        nameErrorMsg.innerHTML = "";
    }
    if (program === "" || program == null) {
        programError.innerHTML = "Program is Required!";
    } else {
        programError.innerHTML = "";
    }
    if (Gender === "" || Gender == null) {
        genderError.innerHTML = "Gender is Required!";
    } else {
        genderError.innerHTML = "";
    }
    if (religion === "" || religion == null) {
        religionError.innerHTML = "Gender is Required!";
    } else {
        religionError.innerHTML = "";
    }
    if (nationality === "" || nationality == null) {
        nationError.innerHTML = "Nationality is Required!";
    } else {
        nationError.innerHTML = "";
    }
    if (dob === "" || dob == null) {
        dobError.innerHTML = "DOB is Required!";
    } else {
        dobError.innerHTML = "";
    }
    if (photo === "" || photo == null) {
        photoError.innerHTML = "Photo is Required!";
    } else {
        photoError.innerHTML = "";
    }
    if (hidePhoto === "" || hidePhoto == null) {
        hidePhotoError.innerHTML = "Photo is Required!";
    } else {
        hidePhotoError.innerHTML = "";
    }
    if (passport_NO === "" || passport_NO == null) {
        passNoError.innerHTML = "Passport NO is Required!";
    } else {
        passNoError.innerHTML = "";
    }
    if (passExipireDate === "" || passExipireDate == null) {
        passExpireError.innerHTML = "Expire Date is Required!";
    } else {
        passExpireError.innerHTML = "";
    }
    if (passportPhoto === "" || passportPhoto == null) {
        passPhotoError.innerHTML = "Passport Photo is Required!";
    } else {
        passPhotoError.innerHTML = "";
    }
    if (police_clearence === "" || police_clearence == null) {
        policeClearError.innerHTML = "Clearance is Required!";
    } else {
        policeClearError.innerHTML = "";
    }
    if (medicalCertificate === "" || medicalCertificate == null) {
        mediCertError.innerHTML = "Certificate is Required!";
    } else {
        mediCertError.innerHTML = "";
    }

    Next1.onclick = function () {
        Form1.style.left = "-4000px";
        Form2.style.left = "0px";
        progress.style.width = "50%";
    };
});
//Form 2 Validation
Form2.addEventListener("submit", (e) => {
    e.preventDefault();
    let fatherName = document.getElementById("fatherName").value;
    let fatherNameError = document.getElementById("fatherNameError");

    if (fatherName === "" || fatherName == null) {
        fatherNameError.innerHTML = "Father name is Required!";
    } else {
        fatherNameError.innerHTML = "";
    }

    Next2.onclick = function () {
        Form2.style.left = "-4000px";
        Form3.style.left = "0px";
        progress.style.width = "75%";
    };
});

Back1.onclick = function () {
    Form1.style.left = "0px";
    Form2.style.left = "4000px";
    progress.style.width = "25%";
};

Back2.onclick = function () {
    Form2.style.left = "0px";
    Form3.style.left = "4000px";
    progress.style.width = "50%";
};
Next3.onclick = function () {
    Form3.style.left = "-4000px";
    Form4.style.left = "0px";
    progress.style.width = "100%";
};
Back3.onclick = function () {
    Form3.style.left = "0px";
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
let selectField = document.getElementById("selectField");
let bloodGroup = document.getElementById("bloodGroup");
let photo = document.getElementById("photo");
let hideBloodGr = document.getElementById("hideBloodGr");
let birth_cert = document.getElementById("birth_cert");
let medicalCert = document.getElementById("medicalCert");
let tribal = document.getElementById("tribal");
let passNoSpan = document.getElementById("passNoSpan");
let hidePhoto = document.getElementById("hidePhoto");
let policeClearance = document.getElementById("policeClearance");
let passPhoto = document.getElementById("passPhoto");
let nation_id = document.getElementById("nation_id");
let pass_expire = document.getElementById("pass_expire");
let local_hidden = document.getElementById("local_hidden");

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

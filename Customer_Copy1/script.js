//-------------------------------------SignUp-----------------------------------------//

function validateSignUp() {
    let unm = document.getElementById("username").value;
    let eml = document.getElementById("email").value;
    let num = document.getElementById("number").value;
    let psw = document.getElementById("password").value;
    let cpsw = document.getElementById("cpassword").value;
    let prof = document.getElementById("profile_picture").value;

    let errPop = document.getElementById("errorPopup");
    let errMsg = document.getElementById("errorMessage");

    errMsg.innerHTML = "";
    errPop.style.display = "none";

    if (unm == "") {
        showError("Please enter a username.");
        return false;
    }
    if (!isNaN(unm)) {
        showError("Username should contain alphabets, not only numbers.");
        return false;
    }
    if (unm.length < 3 ) {
        showError("Username must be 3 or more characters long.");
        return false;
    }

    let emlPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,4}(\.[A-Za-z]{0,2})?$/;
    if (eml == "") {
        showError("Please enter your email address.");
        return false;
    }
    if (!emlPattern.test(eml)) {
        showError("Please enter a valid email address.");
        return false;
    }

    if (num == "") {
        showError("Please enter your mobile number.");
        return false;
    }
    if (isNaN(num)) {
        showError("Mobile number must contain only digits.");
        return false;
    }
    if (num.length !== 10) {
        showError("Mobile number must be exactly 10 digits.");
        return false;
    }

    let pswPattern = /^(?=.*\d)[A-Za-z][A-Za-z0-9!@#$%^&*()\-_=+{}\[\]|;:'",.<>/?`~]{5,}$/;
    if (psw == "") {
        showError("Please enter your password.");
        return false;
    }
    if (!pswPattern.test(psw)) {
        showError("Password must start with a letter, be 6+ chars, and include a number.");
        return false;
    }

    if (cpsw == "") {
        showError("Please confirm your password.");
        return false;
    }
    if (psw !== cpsw) {
        showError("Passwords do not match.");
        return false;
    }

    if (prof == "") {
        showError("Please upload a profile picture.");
        return false;
    }

    showSuccess("Account Created Successfully!");
    return true;
}

//-----------------------------------------------------------------------------------//

//-------------------------------------SignIn-----------------------------------------//

function validateSignIn() {
    let unm = document.getElementById("username").value;
    let eml = document.getElementById("email").value;
    let psw = document.getElementById("password").value;

    let errPop = document.getElementById("errorPopup");
    let errMsg = document.getElementById("errorMessage");

    errMsg.innerHTML = "";
    errPop.style.display = "none";

    if (unm == "") {
        showError("Please enter your username.");
        return false;
    }
    if (!isNaN(unm)) {
        showError("Username should contain alphabets, not only numbers.");
        return false;
    }
    if (unm.length < 3 || unm.length > 9) {
        showError("Username should be 3-9 characters long.");
        return false;
    }

    let emlPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,4}(\.[A-Za-z]{0,2})?$/;
    if (eml == "") {
        showError("Please enter your email address.");
        return false;
    }
    if (!emlPattern.test(eml)) {
        showError("Please enter a valid email address.");
        return false;
    }

    let pswPattern = /^(?=.*\d)[A-Za-z][A-Za-z0-9!@#$%^&*()\-_=+{}\[\]|;:'",.<>/?`~]{5,}$/;
    if (psw == "") {
        showError("Please enter your password.");
        return false;
    }
    if (!pswPattern.test(psw)) {
        showError("Password must start with a letter, be at least 6 characters long, and include at least one number. Special characters allowed.");
        return false;
    }

    return true;
}

//-----------------------------------------------------------------------------------//

//-------------------------------------Art Quiz-----------------------------------------//

function validateMoodQuiz() {
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');

    let errMsg = document.getElementById("quizError");
    let art = document.getElementById("relatedArtworks");

    if (!q1 || !q2 || !q3 || !q4) {
        errMsg.style.display = "block";
        art.classList.remove("show");
        return false;
    }

    errMsg.style.display = "none";
    art.classList.add("show");
    return false;
}

//-----------------------------------------------------------------------------------//

//-------------------------------------Contact-----------------------------------------//

function validateFeedback() {
    let nm = document.getElementById("name").value;
    let eml = document.getElementById("email").value;
    let subj = document.getElementById("subject").value;
    let fbType = document.getElementById("feedbackType").value;
    let msg = document.getElementById("message").value;

    let nmErr = document.getElementById("nameError");
    let emlErr = document.getElementById("emailError");
    let subjErr = document.getElementById("subjectError");
    let fbTypeErr = document.getElementById("feedbackTypeError");
    let msgErr = document.getElementById("messageError");

    nmErr.innerHTML = "";
    emlErr.innerHTML = "";
    subjErr.innerHTML = "";
    fbTypeErr.innerHTML = "";
    msgErr.innerHTML = "";

    let isValid = true;
    const icn = '<i class="bi bi-exclamation-circle-fill"></i> ';

    if (nm == "") {
        nmErr.innerHTML = `${icn} Please enter your name.`;
        isValid = false;
    } else if (!isNaN(nm)) {
        nmErr.innerHTML = `${icn} Name must contain alphabets only.`;
        isValid = false;
    }

    let emlPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,4}(\.[A-Za-z]{0,2})?$/;
    if (eml == "") {
        emlErr.innerHTML = `${icn} Please enter your email.`;
        isValid = false;
    } else if (!emlPattern.test(eml)) {
        emlErr.innerHTML = `${icn} Enter a valid email address.`;
        isValid = false;
    }

    if (subj == "") {
        subjErr.innerHTML = `${icn} Please enter a subject.`;
        isValid = false;
    }

    if (fbType == "Feedback Type") {
        fbTypeErr.innerHTML = `${icn} Please select feedback type.`;
        isValid = false;
    }

    if (msg == "") {
        msgErr.innerHTML = `${icn} Please write your message.`;
        isValid = false;
    } else if (msg.length < 10) {
        msgErr.innerHTML = `${icn} Message must be at least 10 characters.`;
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").style.display = "flex";
        setTimeout(function () {
            document.querySelector("form").submit();
        }, 4000);
        return false;
    }

    return false;
}

//-----------------------------------------------------------------------------------//

//-------------------------------------Edit Info(Profile)--------------------------------//

function validateProfile() {
    let nm = document.getElementById("name").value;
    let eml = document.getElementById("email").value;
    let num = document.getElementById("phone").value;
    let addr = document.getElementById("address").value;
    let prof = document.getElementById("profile").value;

    let nmErr = document.getElementById("nameError");
    let emlErr = document.getElementById("emailError");
    let numErr = document.getElementById("phoneError");
    let addrErr = document.getElementById("addressError");
    let profErr = document.getElementById("profileError");

    nmErr.innerHTML = "";
    emlErr.innerHTML = "";
    numErr.innerHTML = "";
    addrErr.innerHTML = "";
    profErr.innerHTML = "";

    let isValid = true;
    const icn = '<i class="bi bi-exclamation-circle-fill"></i> ';

    if (nm == "") {
        nmErr.innerHTML = `${icn} Please enter your name.`;
        isValid = false;
    } else if (!isNaN(nm)) {
        nmErr.innerHTML = `${icn} Name must contain alphabets only.`;
        isValid = false;
    }

    let emlPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,4}(\.[A-Za-z]{0,2})?$/;
    if (eml == "") {
        emlErr.innerHTML = `${icn} Please enter your email.`;
        isValid = false;
    } else if (!emlPattern.test(eml)) {
        emlErr.innerHTML = `${icn} Enter a valid email address.`;
        isValid = false;
    }

    if (num == "") {
        numErr.innerHTML = `${icn} Please enter your phone number.`;
        isValid = false;
    } else if (isNaN(num)) {
        numErr.innerHTML = `${icn} Mobile number must contain only digits.`;
        isValid = false;
    }else if(num.length !== 10){
        numErr.innerHTML = `${icn} Mobile number must be exactly 10 digits."`;
        isValid = false;
    }

    if (addr == "") {
        addrErr.innerHTML = `${icn} Please enter your address.`;
        isValid = false;
    }

    if (prof == "") {
        profErr.innerHTML = `${icn} Please upload a profile photo.`;
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").style.display = "flex";
        setTimeout(function () {
            document.querySelector("form").submit();
        }, 4000);
        return false;
    }

    return false;
}

//-----------------------------------------------------------------------------------//

//-------------------------------------Change Password(Profile)--------------------------------//

function validatePassword() {
    let curPsw = document.getElementById("currentPassword").value;
    let newPsw = document.getElementById("newPassword").value;
    let confPsw = document.getElementById("confirmPassword").value;

    let curErr = document.getElementById("currentPasswordError");
    let newErr = document.getElementById("newPasswordError");
    let confErr = document.getElementById("confirmPasswordError");

    curErr.innerHTML = "";
    newErr.innerHTML = "";
    confErr.innerHTML = "";

    let isValid = true;
    const icn = '<i class="bi bi-exclamation-circle-fill"></i> ';

    let pswPattern = /^(?=.*\d)[A-Za-z][A-Za-z0-9!@#$%^&*()\-_=+{}\[\]|;:'",.<>/?`~]{5,}$/;

    if (curPsw == "") {
        curErr.innerHTML = `${icn} Please enter your current password.`;
        isValid = false;
    } else if(!pswPattern.test(curPsw)) {
        curErr.innerHTML = `${icn} Password is incorrect.`;
        isValid = false;
    }

    if (newPsw == "") {
        newErr.innerHTML = `${icn} Please enter a new password.`;
        isValid = false;
    } else if (!pswPattern.test(newPsw)) {
        newErr.innerHTML = `${icn} Password must start with a letter, be at least 6 characters long, and include at least one number. Special characters allowed.`;
        isValid = false;
    }

    if (confPsw == "") {
        confErr.innerHTML = `${icn} Please confirm your password.`;
        isValid = false;
    } else if (newPsw !== confPsw) {
        confErr.innerHTML = `${icn} Passwords do not match.`;
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").style.display = "flex";
        setTimeout(function () {
            document.querySelector("form").submit();
        }, 4000);
        return false;
    }

    return false;
}

//-----------------------------------------------------------------------------------//

//-------------------------------------Show Error------------------------------------//

function showError(text) {
    let errPop = document.getElementById("errorPopup");
    let errMsg = document.getElementById("errorMessage");

    errMsg.innerHTML = text;
    errPop.style.display = "block";

    setTimeout(() => {
        errPop.style.display = "none";
    }, 60000);
}

//-----------------------------------------------------------------------------------//

//-------------------------------------Show Success------------------------------------//

function showSuccess(text) {
    let successPop = document.getElementById("successPopup");
    let successMsg = document.getElementById("successMessage");

    successMsg.innerHTML = text;
    successPop.style.display = "block";

    setTimeout(() => {
        successPop.style.display = "none";
    }, 4000);
}

//-----------------------------------------------------------------------------------//

//-------------------------------------Login-----------------------------------------//

function validateLogin() {
    let eml = document.getElementById("email").value;
    let pwd = document.getElementById("password").value;

    let pop = document.getElementById("errorPopup");
    let msg = document.getElementById("errorMessage");

    msg.innerHTML = "";
    pop.style.display = "none";

    let emlPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,4}(\.[A-Za-z]{0,2})?$/;
    if (eml == "") {
        showError("Please enter your email address.");
        return false;
    }
    if (!emlPattern.test(eml)) {
        showError("Please enter a valid email address.");
        return false;
    }

    let pwdPattern = /^(?=.*\d)[A-Za-z][A-Za-z0-9!@#$%^&*()\-_=+{}\[\]|;:'",.<>/?`~]{5,}$/;
    if (pwd == "") {
        showError("Please enter your password.");
        return false;
    }
    if (!pwdPattern.test(pwd)) {
        showError("Password must start with a letter, be at least 6 characters long, and include at least one number. Special characters are allowed.");
        return false;
    }

    return true;
}

//-------------------------------------------------------------------------------------//

//-------------------------------------Add Art-----------------------------------------//

function validateArtworkForm() {

    let aName = document.getElementById("artworkName").value;
    let arName = document.getElementById("artistName").value;
    let med = document.getElementById("medium").value;
    let sz = document.getElementById("size").value;
    let stl = document.getElementById("style").value;
    let yr = document.getElementById("year").value;
    let desc = document.getElementById("description").value;
    let imgFile = document.getElementById("file").value;

    let emoChk = document.querySelectorAll("input[type='checkbox']:checked");

    let aNameErr = document.getElementById("artworkNameError");
    let arNameErr = document.getElementById("artistNameError");
    let medErr = document.getElementById("mediumError");
    let szErr = document.getElementById("sizeError");
    let stlErr = document.getElementById("styleError");
    let chkErr = document.getElementById("CheckError");
    let yrErr = document.getElementById("yearError");
    let descErr = document.getElementById("descriptionError");
    let fileErr = document.getElementById("fileError");

    aNameErr.innerHTML = "";
    arNameErr.innerHTML = "";
    medErr.innerHTML = "";
    szErr.innerHTML = "";
    stlErr.innerHTML = "";
    chkErr.innerHTML = "";
    yrErr.innerHTML = "";
    descErr.innerHTML = "";
    fileErr.innerHTML = "";

    let isValid = true;
    const icon = '<i class="bi bi-exclamation-circle-fill"></i> ';

    if (aName == "") {
        aNameErr.innerHTML = `${icon} Please enter artwork name.`;
        isValid = false;
    }

    if (arName == "-----Select-----") {
        arNameErr.innerHTML = `${icon} Please select an artist.`;
        isValid = false;
    }

    if (med == "") {
        medErr.innerHTML = `${icon} Please enter medium.`;
        isValid = false;
    }

    let sizePattern = /^\d{1,3}\s?[xX]\s?\d{1,3}\s?(inches|inch)?$/;
    if (sz == "") {
        szErr.innerHTML = `${icon} Enter artwork dimensions.`;
        isValid = false;
    } else if (!sizePattern.test(sz)) {
        szErr.innerHTML = `${icon} Enter size in format: Width x Height inches (e.g., 24x30 inches).`;
        isValid = false;
    }

    if (stl == "-----Select-----") {
        stlErr.innerHTML = `${icon} Please select a category.`;
        isValid = false;
    }

    if (yr == "") {
        yrErr.innerHTML = `${icon} Enter artwork year.`;
        isValid = false;
    } else if (yr.length !== 4 || isNaN(yr) || yr < 1800 || yr > 2025) {
        yrErr.innerHTML = `${icon} Enter valid year (4 digits).`;
        isValid = false;
    }

    if (emoChk.length == 0) {
        chkErr.innerHTML = `${icon} Select at least one emotion.`;
        isValid = false;
    }

    if (desc == "") {
        descErr.innerHTML = `${icon} Please enter a description.`;
        isValid = false;
    }

    if (imgFile == "") {
        fileErr.innerHTML = `${icon} Please upload an image.`;
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


//-------------------------------------------------------------------------------------//

//-------------------------------------Add Artist-----------------------------------------//

function validateArtistForm() {

    let aName = document.getElementById("artistName").value.trim();
    let aStyle = document.getElementById("artStyle").value;
    let aExp = document.getElementById("artistExperience").value.trim();
    let aQuote = document.getElementById("artistQuote").value.trim();
    let aDesc = document.getElementById("artistDesc").value.trim();
    let aFile = document.getElementById("artistFile").value;

    let aNameErr = document.getElementById("artistNameError");
    let aStyleErr = document.getElementById("artStyleError");
    let aExpErr = document.getElementById("artistExperienceError");
    let aQuoteErr = document.getElementById("artistQuoteError");
    let aDescErr = document.getElementById("artistDescError");
    let aFileErr = document.getElementById("artistFileError");

    aNameErr.innerHTML = "";
    aStyleErr.innerHTML = "";
    aExpErr.innerHTML = "";
    aQuoteErr.innerHTML = "";
    aDescErr.innerHTML = "";
    aFileErr.innerHTML = "";

    let isValid = true;
    const icon = '<i class="bi bi-exclamation-circle-fill"></i> ';

    if (aName == "") {
        aNameErr.innerHTML = `${icon} Please enter artist name.`;
        isValid = false;
    }

    if (aStyle == "-----Choose style-----") {
        aStyleErr.innerHTML = `${icon} Please select art style.`;
        isValid = false;
    }

    if (aExp == "" || isNaN(aExp) || aExp < 0) {
        aExpErr.innerHTML = `${icon} Enter valid years of experience.`;
        isValid = false;
    }

    if (aQuote == "") {
        aQuoteErr.innerHTML = `${icon} Please enter a motivational quote.`;
        isValid = false;
    }

    if (aDesc == "") {
        aDescErr.innerHTML = `${icon} Please enter biography.`;
        isValid = false;
    }

    if (aFile == "") {
        aFileErr.innerHTML = `${icon} Please upload an image.`;
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


//-------------------------------------------------------------------------------------//

//-------------------------------------Add Que-----------------------------------------//

function validateQuizForm() {
    let qText = document.getElementById("quizQuestion").value.trim();
    let opt1 = document.getElementById("option1").value.trim();
    let opt2 = document.getElementById("option2").value.trim();
    let opt3 = document.getElementById("option3").value.trim();
    let opt4 = document.getElementById("option4").value.trim();
    let qImg = document.getElementById("quizImage").value;

    let qTextErr = document.getElementById("quizQuestionError");
    let opt1Err = document.getElementById("option1Error");
    let opt2Err = document.getElementById("option2Error");
    let opt3Err = document.getElementById("option3Error");
    let opt4Err = document.getElementById("option4Error");
    let qImgErr = document.getElementById("quizImageError");

    qTextErr.innerHTML = "";
    opt1Err.innerHTML = "";
    opt2Err.innerHTML = "";
    opt3Err.innerHTML = "";
    opt4Err.innerHTML = "";
    qImgErr.innerHTML = "";

    let isValid = true;
    const icon = '<i class="bi bi-exclamation-circle-fill"></i> ';

    if (qText == "") {
        qTextErr.innerHTML = `${icon} Please enter the question text.`;
        isValid = false;
    }

    if (opt1 == "") {
        opt1Err.innerHTML = `${icon} Please enter option 1.`;
        isValid = false;
    }

    if (opt2 == "") {
        opt2Err.innerHTML = `${icon} Please enter option 2.`;
        isValid = false;
    }

    if (opt3 == "") {
        opt3Err.innerHTML = `${icon} Please enter option 3.`;
        isValid = false;
    }

    if (opt4 == "") {
        opt4Err.innerHTML = `${icon} Please enter option 4.`;
        isValid = false;
    }

    if (qImg == "") {
        qImgErr.innerHTML = `${icon} Please upload an image related to the question.`;
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


//-------------------------------------------------------------------------------------//

//-------------------------------------Edit Art-----------------------------------------//

function validateArtworkUpdateForm() {

    let aName = document.getElementById("artworkName").value;
    let arName = document.getElementById("artistName").value;
    let med = document.getElementById("medium").value;
    let sz = document.getElementById("size").value;
    let stl = document.getElementById("style").value;
    let yr = document.getElementById("year").value;
    let desc = document.getElementById("description").value;
    let imgFile = document.getElementById("file").value;

    let emoChk = document.querySelectorAll("input[type='checkbox']:checked");

    let aNameErr = document.getElementById("artworkNameError");
    let arNameErr = document.getElementById("artistNameError");
    let medErr = document.getElementById("mediumError");
    let szErr = document.getElementById("sizeError");
    let stlErr = document.getElementById("styleError");
    let chkErr = document.getElementById("CheckError");
    let yrErr = document.getElementById("yearError");
    let descErr = document.getElementById("descriptionError");
    let fileErr = document.getElementById("fileError");

    aNameErr.innerHTML = "";
    arNameErr.innerHTML = "";
    medErr.innerHTML = "";
    szErr.innerHTML = "";
    stlErr.innerHTML = "";
    chkErr.innerHTML = "";
    yrErr.innerHTML = "";
    descErr.innerHTML = "";
    fileErr.innerHTML = "";

    let isValid = true;
    const icon = '<i class="bi bi-exclamation-circle-fill"></i> ';

    if (aName == "") {
        aNameErr.innerHTML = `${icon} Please enter artwork name.`;
        isValid = false;
    }

    if (arName == "-----Select-----") {
        arNameErr.innerHTML = `${icon} Please select an artist.`;
        isValid = false;
    }

    if (med == "") {
        medErr.innerHTML = `${icon} Please enter medium.`;
        isValid = false;
    }

    let sizePattern = /^\d{1,3}\s?[xX]\s?\d{1,3}\s?(inches|inch)?$/;
    if (sz == "") {
        szErr.innerHTML = `${icon} Enter artwork dimensions.`;
        isValid = false;
    } else if (!sizePattern.test(sz)) {
        szErr.innerHTML = `${icon} Enter size in format: Width x Height inches (e.g., 24x30 inches).`;
        isValid = false;
    }

    if (stl == "-----Select-----") {
        stlErr.innerHTML = `${icon} Please select a category.`;
        isValid = false;
    }

    if (yr == "") {
        yrErr.innerHTML = `${icon} Enter artwork year.`;
        isValid = false;
    } else if (yr.length !== 4 || isNaN(yr) || yr < 1800 || yr > 2025) {
        yrErr.innerHTML = `${icon} Enter valid year (4 digits).`;
        isValid = false;
    }

    if (emoChk.length == 0) {
        chkErr.innerHTML = `${icon} Select at least one emotion.`;
        isValid = false;
    }

    if (desc == "") {
        descErr.innerHTML = `${icon} Please enter a description.`;
        isValid = false;
    }

    if (imgFile == "") {
        fileErr.innerHTML = `${icon} Please upload an image.`;
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

//-------------------------------------------------------------------------------------//

//-------------------------------------Edit Artist-----------------------------------------//

function validateArtistUpdateForm() {

    let aName = document.getElementById("artistName").value.trim();
    let aStyle = document.getElementById("artStyle").value;
    let aExp = document.getElementById("artistExperience").value.trim();
    let aQuote = document.getElementById("artistQuote").value.trim();
    let aDesc = document.getElementById("artistDesc").value.trim();
    let aFile = document.getElementById("artistFile").value;

    // Error elements
    let aNameErr = document.getElementById("artistNameError");
    let aStyleErr = document.getElementById("artStyleError");
    let aExpErr = document.getElementById("artistExperienceError");
    let aQuoteErr = document.getElementById("artistQuoteError");
    let aDescErr = document.getElementById("artistDescError");
    let aFileErr = document.getElementById("artistFileError");

    // Clear previous errors
    aNameErr.innerHTML = "";
    aStyleErr.innerHTML = "";
    aExpErr.innerHTML = "";
    aQuoteErr.innerHTML = "";
    aDescErr.innerHTML = "";
    aFileErr.innerHTML = "";

    let isValid = true;
    const icon = '<i class="bi bi-exclamation-circle-fill"></i> ';

    if (aName == "") {
        aNameErr.innerHTML = `${icon} Please enter artist name.`;
        isValid = false;
    }

    if (aStyle == "-----Choose style-----") {
        aStyleErr.innerHTML = `${icon} Please select art style.`;
        isValid = false;
    }

    if (aExp == "" || isNaN(aExp) || aExp < 0) {
        aExpErr.innerHTML = `${icon} Enter valid years of experience.`;
        isValid = false;
    }

    if (aQuote == "") {
        aQuoteErr.innerHTML = `${icon} Please enter a motivational quote.`;
        isValid = false;
    }

    if (aDesc == "") {
        aDescErr.innerHTML = `${icon} Please enter biography.`;
        isValid = false;
    }

    if (aFile == "") {
        aFileErr.innerHTML = `${icon} Please upload an image.`;
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

//-------------------------------------------------------------------------------------//

//-------------------------------------Edit Question-----------------------------------------//

function validateQueUpdateForm() {
    let qText = document.getElementById("quizQuestion").value.trim();
    let opt1 = document.getElementById("option1").value.trim();
    let opt2 = document.getElementById("option2").value.trim();
    let opt3 = document.getElementById("option3").value.trim();
    let opt4 = document.getElementById("option4").value.trim();
    let qImg = document.getElementById("quizImage").value;

    let qTextErr = document.getElementById("quizQuestionError");
    let opt1Err = document.getElementById("option1Error");
    let opt2Err = document.getElementById("option2Error");
    let opt3Err = document.getElementById("option3Error");
    let opt4Err = document.getElementById("option4Error");
    let qImgErr = document.getElementById("quizImageError");

    qTextErr.innerHTML = "";
    opt1Err.innerHTML = "";
    opt2Err.innerHTML = "";
    opt3Err.innerHTML = "";
    opt4Err.innerHTML = "";
    qImgErr.innerHTML = "";

    let isValid = true;
    const icon = '<i class="bi bi-exclamation-circle-fill"></i> ';

    // Validate fields
    if (qText == "") {
        qTextErr.innerHTML = `${icon} Please enter the question text.`;
        isValid = false;
    }
    if (opt1 == "") {
        opt1Err.innerHTML = `${icon} Please enter option 1.`;
        isValid = false;
    }
    if (opt2 == "") {
        opt2Err.innerHTML = `${icon} Please enter option 2.`;
        isValid = false;
    }
    if (opt3 == "") {
        opt3Err.innerHTML = `${icon} Please enter option 3.`;
        isValid = false;
    }
    if (opt4 == "") {
        opt4Err.innerHTML = `${icon} Please enter option 4.`;
        isValid = false;
    }
    if (qImg == "") {
        qImgErr.innerHTML = `${icon} Please upload an image related to the question.`;
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

//-------------------------------------------------------------------------------------//

//-------------------------------------Profile-----------------------------------------//

const editBtn = document.getElementById("editBtn");
const saveBtn = document.getElementById("saveBtn");

editBtn.addEventListener("click", () => {
    document.getElementById("nm").readOnly = false;
    document.getElementById("email").readOnly = false;
    document.getElementById("number").readOnly = false;
    document.getElementById("addr").readOnly = false;

    editBtn.style.display = "none";
    saveBtn.style.display = "inline-block";
});

debugger;
function validateProfileForm() {
    let valid = true;

    document.getElementById("nmError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("numberError").textContent = "";
    document.getElementById("addrError").textContent = "";

    const name = document.getElementById("nm").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const addr = document.getElementById("addr").value;

    if (name == "") {
        document.getElementById("nmError").textContent = "Name is required";
        valid = false;
    }

    let emlPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,4}(\.[A-Za-z]{0,2})?$/;
    if (email == "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    } else if (!emlPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        valid = false;
    }

    if (number == "") {
        showError("Please enter your mobile number.");
        return false;
    }
    else if (isNaN(number)) {
        showError("Mobile number must contain only digits.");
        return false;
    }
    else if (number.length !== 10) {
        showError("Mobile number must be exactly 10 digits.");
        return false;
    }

    if (addr == "") {
        document.getElementById("addrError").textContent = "Address is required";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMessage").style.display = "flex";
        document.getElementById("nm").readOnly = true;
        document.getElementById("email").readOnly = true;
        document.getElementById("number").readOnly = true;
        document.getElementById("addr").readOnly = true;
        editBtn.style.display = "inline-block";
        saveBtn.style.display = "none";

        setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
        }, 4000);
    }

    return false;
}


//-------------------------------------------------------------------------------------//

function showError(text) {
    let popup = document.getElementById("errorPopup");
    let message = document.getElementById("errorMessage");

    message.innerHTML = text;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 60000);
}




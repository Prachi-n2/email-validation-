let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");

function checker(){

    icon.style.display = "inline-block";
    let email = emailId.value.trim();

    if(email === ""){
        icon.style.display = "none";
        errorMsg.style.display = "none";
        emailId.style.border = "2px solid #d1d3d4";
    }else if(validateEmail(email)){ // prachinarnaware6@gmail.com
        icon.innerHTML = '<i class= "fas fa-check-circle"></i>';
        icon.style.color = "#2ecc71";
        errorMsg.style.display = "none";
        emailId.style.border = "2px solid #2ecc71";
    }else{
        icon.innerHTML = '<i class= "fas fa-exclamation-circle"></i>';
        icon.style.color = "#ff2851";
        errorMsg.style.display = "black";
        emailId.style.border = "2px solid #ff2851";
    }

}

function validateEmail(){

    let atIndex = emailId.indexOf("@");

    let dotIndex = emailId.lastIndexOf(".");

    if(
        atIndex > 0 &&
        dotIndex > atIndex + 1 &&
        dotIndex < emailId.length - 2
    ){
        return true;
    }else{
        return false;
    }
}
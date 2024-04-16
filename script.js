function resetdata() {
    var br = "</br>";

    userDetails.innerHTML = "(Your personal and account information will appear here after you submit.)";
    document.getElementById("name").style.border = "1px solid black";
    document.getElementById("username").style.border = "1px solid black";
    document.getElementById("password").style.border = "1px solid black";
    document.getElementById("gender").style.border = "1px solid black";
    document.getElementById("age").style.border = "1px solid black";
    document.getElementById("email").style.border = "1px solid black";
    document.getElementById("address").style.border = "1px solid black";
    document.getElementById("interests").style.border = "1px solid black";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("background").style.height = "100vh";
}

function display() {
    var br = "</br>";
    document.getElementById("userData").innerHTML =
        "Name: " + document.getElementById("name").value + br +
        "Username: " + document.getElementById("username").value + br +
        "Gender: " + document.getElementById("gender").value + br +
        "Password: " + document.getElementById("password").value + br +
        "Email: " + document.getElementById("email").value + br +
        "Address: " + document.getElementById("address").value + br +
        "About the User: " + document.getElementById("interests").value + br;
}

function blurR(inputElement) {
    if (inputElement.value === "") {
        inputElement.style.border = "2px solid red";
    } else {
        inputElement.style.border = "2px solid #00FF7F";
    }
}

function focusG(inputElement) {
    inputElement.style.border = "2px solid #00FF7F";
}

function data() {
    display();
    return false; 
}
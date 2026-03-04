function signIn(){


    if (realPassword === "admin123") {
        window.location.href = "DemoSystem.html";
    } else {
        alert("Wrong Password");
    }
}
document.getElementById('admin-email').value = "admin"
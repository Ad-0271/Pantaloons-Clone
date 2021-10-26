function checker(el) {
    el.preventDefault();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let users = JSON.parse(localStorage.getItem("pantaloon_users"));
    let flag = true;

    users.forEach(function(el) {
        if(el.email == email && el.password == pass) {
            flag = false;
            window.location.href = "./homePage.html"
        }
    });
    if(flag) {
        alert("Please Enter Valid Credentials");
    }
}
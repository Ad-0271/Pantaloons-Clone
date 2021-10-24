if (localStorage.getItem('pantaloon_users') == null){
    localStorage.setItem('pantaloon_users', JSON.stringify([]));
};

function adduser(e){
    e.preventDefault();

    let myform = document.getElementById('form');

    let firstname = myform.firstname.value;

    let lastname = myform.lastname.value;

    let email = myform.email.value;

    let password = myform.password.value;

    let confirmpassword = myform.confirmpassword.value;

    if (password != confirmpassword){
        alert('Password and Confirm Password should be same');
    } else {

        let data = {
            firstname,
            lastname,
            email,
            password,
            confirmpassword
        };

        let arr = JSON.parse(localStorage.getItem('pantaloon_users'));

        let flag = true;

        arr.forEach(function(users) {
            if(email == users.email) {
                flag = false;
                alert("Email already exists");
            }
        });

        if(flag) {
            arr.push(data);
            localStorage.setItem('pantaloon_users', JSON.stringify(arr));
            window.location.href = "signin.html"
        }
    };
};
function limit(element) {
    var max_chars = 2;

    if (element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
    console.log(element);
}

function limit1(element) {
        var max_chars = 3;

        if (element.value.length > max_chars) {
            element.value = element.value.substr(0, max_chars);
        }
        console.log(element);
    }

function limitc(element) {
        var max_chars = 16;

        if (element.value.length > max_chars) {
            element.value = element.value.substr(0, max_chars);
        }
        console.log(element);
    }

    let payNow = document.getElementById("payNow");
    payNow.addEventListener("click", toSuccess);

    function toSuccess() {
        let ccVal = document.getElementById("inputCardNo").value;
        let mmVal = document.getElementById("inputmm").value;
        let yyVal = document.getElementById("inputyy").value;
        let cvvVal = document.getElementById("cvvNu").value;
        let billAddVal = document.getElementById("billAdd").value.trim();
        let shipAddVal = document.getElementById("ShipAdd").value.trim();

        let currentYear = new Date().getFullYear().toString();
        
        

        if(ccVal.length == 16 && mmVal.length == 2 && yyVal.length == 2 && currentYear < yyVal && cvvVal.length == 3 && cvvVal >= 000 && cvvVal <= 999 && billAddVal.length != 0 && shipAddVal.length != 0) {
            alert("Payment Recieved");
            window.location.href = "success.html";
        } else if(ccVal.length != 16) {
            alert("Please Enter Valid Card Number");
        } else if(mmVal.length != 2) {
            alert("Please Enter Valid Expiry Month");
        } else if(yyVal.length != 2 || currentYear > yyVal) {
            alert("Please Enter Valid Expiry Year");
        } else if(cvvVal.length != 3 || cvvVal < 000 || cvvVal > 999) {
            alert("Please Enter Valid CVV Number");
        } else if(billAddVal.length == 0) {
            alert("Please Enter Valid Billing Address");
        } else if(shipAddVal.length == 0) {
            alert("Please Enter Valid Shipping Address");
        } 
    }
let database = JSON.parse(localStorage.getItem('cartProducts'));

let parent = document.getElementById("iteamsList");

var orderVal = 0;

var discountVal = 0;

let shippinG = document.getElementById("shippinG");

function showCart(database) {
    parent.innerHTML = null;

    orderVal = 0;

    discountVal = 0;

    database.forEach(function(element) {

        orderVal += element.quantity * element.price;

        discountVal += Math.round((element.quantity * element.price) * ((element.discount.split("").splice(0, 2).join("")) / 100));


        let imgBox = document.createElement("div");
        imgBox.setAttribute("class", "imgBox");

        let img = document.createElement("img");
        img.setAttribute("class", "img1");
        img.src = element.image1

        imgBox.append(img);
        imgBox.style.marginBottom = "20px";

        //Part End:--------->

        let div1 = document.createElement("div");

        let div1_1 = document.createElement("div");
        div1_1.setAttribute("class", "brandName");
        div1_1.textContent = element.brand;

        let div1_2 = document.createElement("div");
        div1_2.setAttribute("class", "proName");
        div1_2.textContent = element.features.colour + " " + element.features.pattern + " " + element.type;

        let div1_3 = document.createElement("div");
        div1_3.setAttribute("class", "bottomDiv");
        let div1_3_1 = document.createElement("div");
        let u_3_1 = document.createElement("u");
        u_3_1.textContent = "Remove";
        u_3_1.style.cursor = "pointer";
        u_3_1.onclick = function() {
            remProd(element);
        }
        div1_3_1.append(u_3_1)
        let div1_3_2 = document.createElement("div");
        div1_3_2.setAttribute("class", "rightBorder");
        let u_3_2 = document.createElement("u");
        u_3_2.textContent = "Move to Wishlist";
        u_3_2.style.cursor = "pointer";
        u_3_2.onclick = function() {
            addToWish(element);
        }
        div1_3_2.append(u_3_2);

        div1_3.append(div1_3_1, div1_3_2);


        div1.append(div1_1, div1_2, div1_3);
        div1.style.marginBottom = "20px";


        //Part End:--------->

        let div2 = document.createElement("div");

        let div2_1 = document.createElement("div");
        div2_1.setAttribute("class", "sizeText");
        let div2_2 = document.createElement("div");
        div2_2.setAttribute("class", "sizeInput");

        div2.append(div2_1, div2_2);
        div2.style.marginBottom = "20px";


        //Part End:--------->


        let div3 = document.createElement("div");

        let div3_1 = document.createElement("div");
        div3_1.setAttribute("class", "qtyText");
        div3_1.textContent = "Qty:";

        let div3_2 = document.createElement("div");
        div3_2.setAttribute("class", "qtyBox");
        let div3_2_1 = document.createElement("div");
        div3_2_1.setAttribute("class", "btn1");
        div3_2_1.textContent = "-";
        div3_2_1.style.cursor = "pointer";
        div3_2_1.onclick = function() {
            if(element.quantity > 1) {
                subFunc(element);
            }
        }
        let div3_2_2 = document.createElement("div");
        div3_2_2.textContent = element.quantity;
        let div3_2_3 = document.createElement("div");
        div3_2_1.setAttribute("class", "btn2");
        div3_2_3.textContent = "+";
        div3_2_3.style.cursor = "pointer";
        div3_2_3.onclick = function() {
            addFunc(element);
        }

        div3_2.append(div3_2_1, div3_2_2, div3_2_3);

        div3.append(div3_1, div3_2);
        div3.style.marginBottom = "20px";

        //Part End:--------->

        let discVal = Number(element.discount.split("").splice(0, 2).join(""));

        
        let div4 = document.createElement("div");

        let div4_1 = document.createElement("div");
        div4_1.setAttribute("class", "priceDiv");
        let div4_1_1 = document.createElement("s");
        div4_1_1.textContent = element.quantity * element.price + ".00" + Array(2).fill('\xa0').join('');
        let div4_1_2 = document.createElement("span");
        div4_1_2.setAttribute("class", "font");
        div4_1_2.textContent = Array(2).fill('\xa0').join('') + "₹" + " " + Math.round((element.quantity * element.price) * ((100 - discVal) / 100)) + ".00";
        let div4_1_3 = document.createElement("span");
        div4_1_3.textContent = "₹"
        div4_1.append(div4_1_3, div4_1_1, div4_1_2);


        let div4_2 = document.createElement("div");
        div4_2.setAttribute("class", "discountBox");
        div4_2.textContent = element.discount + " OFF" + Array(7).fill('\xa0').join('');

        div4_3 = document.createElement("div");
        div4_3.setAttribute("class", "priceB");
        div4_3.textContent = "Price Breakup" + Array(10).fill('\xa0').join('');

        div4.append(div4_1, div4_2, div4_3);
        div4.style.marginBottom = "20px";

        parent.append(imgBox, div1, div2, div3, div4);
        
    });
}

showCart(database);

function addFunc(input) {
    let old_price = input.quantity * input.price;
    let old_disc = Math.round((input.quantity * input.price) * ((input.discount.split("").splice(0, 2).join("")) / 100));
    input.quantity++;
    let new_disc = Math.round((input.quantity * input.price) * ((input.discount.split("").splice(0, 2).join("")) / 100));
    let new_price = input.quantity * input.price;
    orderVal = orderVal - old_price + new_price;
    discountVal = discountVal - old_disc + new_disc;
    localStorage.setItem("cartProducts", JSON.stringify(database));
    saved();
    discTot();
    orderTot();
    cartTot();
    counter = 0;
    showCart(database);
}

function subFunc(input) {
    let old_price = input.quantity * input.price;
    let old_disc = Math.round((input.quantity * input.price) * ((input.discount.split("").splice(0, 2).join("")) / 100));
    input.quantity--;
    let new_disc = Math.round((input.quantity * input.price) * ((input.discount.split("").splice(0, 2).join("")) / 100));
    let new_price = input.quantity * input.price;
    orderVal = orderVal - old_price + new_price;
    discountVal = discountVal - old_disc + new_disc;
    localStorage.setItem("cartProducts", JSON.stringify(database));
    saved();
    discTot();
    orderTot();
    cartTot();
    counter = 0;
    showCart(database);
}

function remProd(input) {
    var ind = database.indexOf(input);
    database.splice(ind, 1);
    localStorage.setItem("cartProducts", JSON.stringify(database));
    showCart(database);
    orderTot();
    discTot();
    saved();
    counter = 0;
    shippinGCheck()
    cartTot();
}

function addToWish(input) {
    alert("Product Added To Wishlist");
    remProd(input);
    orderTot();
    discTot();
    saved();
    counter = 0;
    shippinGCheck()
    cartTot();
}



var toPayment = document.getElementById("toPayment");
toPayment.addEventListener("click", paymentPage);

function paymentPage() {
    window.location.href = "paymentPage.html";
}

var toHome = document.getElementById("toHome");
toHome.addEventListener("click", homeFunc);

function homeFunc() {
    window.location.href = "homePage.html";
}


function orderTot() {
    let orderAmt = document.getElementById("orderAmt");
    orderAmt.textContent = orderVal + ".00";
}
orderTot();

function discTot() {
    let discAmt = document.getElementById("discAmt");
    discAmt.textContent = discountVal + ".00";
}
discTot();

function saved() {
    let saved = document.getElementById("saved");
    saved.textContent = discountVal + ".00";
}
saved();

shippinGCheck();

function cartTot() {
    let cartVal = document.getElementById("cartVal");
    cartVal.textContent = orderVal - discountVal + Number(shippinG.textContent) + ".00";
}
cartTot();


let promoCode = document.getElementById("applySubmit");
let counter = 0;
promoCode.onclick = function() {
    promoCodeApply();
}

function promoCodeApply() {
    let ainput = document.getElementById("ainput").value;
    let orderAmt = document.getElementById("orderAmt").textContent;
    orderAmt = Number(orderAmt.split("").splice(0, orderAmt.length - 3).join(""));
    // let discAmt = document.getElementById("discAmt").textContent;
    // discAmt = Number(discAmt.split("").splice(0, discAmt.length - 3).join(""));
    if(ainput == "masai10" && counter < 1) {
        counter++;
        discountVal += Math.round(orderAmt * 0.10);
        document.getElementById("discAmt").textContent = discountVal + ".00";
        orderVal = Math.round(orderAmt * 0.90);
        document.getElementById("orderAmt").textContent = orderVal + ".00";
        cartTot();
        saved();
    } else if(counter >= 1) {
        alert("Promocode Already Applied");
    } else {
        alert("Invalid Promocode");
    }
}
function toHomepage() {
        window.location.href="homePage.html";
    }

    function shippinGCheck() {
        if(database.length <= 0) {
            shippinG.textContent = 0;
        } else {
            shippinG.textContent = 100;
        }
    }
let data = JSON.parse(localStorage.getItem('productDescription'));

    let display = document.getElementById('displayimg');
    display.style.backgroundImage = 'url("'+ data[0].image1 + '")';

    let img1 = document.getElementById('img1');
    img1.src = data[0].image1;
    img1.onclick = () => {
        showbigimg(img1.src);
    };

    let img2 = document.getElementById('img2');
    img2.src = data[0].image2;
    img2.onclick = () => {
        showbigimg(img2.src);
    };

    let img3 = document.getElementById('img3');
    img3.src = data[0].image3;
    img3.onclick = () => {
        showbigimg(img3.src);
    };

    let img4 = document.getElementById('img4');
    img4.src = data[0].image4;
    img4.onclick = () => {
        showbigimg(img4.src);
    };

    function showbigimg(url){
        
        display.style.backgroundImage = 'url("'+ url + '")';
        console.log(display.style.backgroundImage);
    };

    let brand = document.getElementById('brand');
    brand.innerHTML = data[0].brand.toUpperCase();

    let gender = document.getElementById('gender');
    gender.innerHTML = data[0].gender.toUpperCase();

    let type = document.getElementById('type');
    type.innerHTML = data[0].type.toUpperCase();

    let productname = document.getElementById('productname');
    productname.innerHTML = data[0].features.colour.toUpperCase() + ' ' + data[0].features.pattern.toUpperCase() + ' ' + data[0].type.toUpperCase();

    let displayName = document.getElementById('displayName');
    displayName.innerHTML = data[0].brand.toUpperCase();

    let productName = document.getElementById('productName');
    productName.innerHTML = data[0].features.colour.toUpperCase() + ' ' + data[0].features.pattern.toUpperCase() + ' ' + data[0].type.toUpperCase();

    let price = document.getElementById('price');

    let disc = Number(data[0].discount.split("").splice(0, 2).join(""));
    disc = Math.round((data[0].price) * (disc / 100));
    let discPrice = data[0].price - disc;

    price.innerHTML = '₹'+ discPrice;

    let actualprice = document.getElementById('actualprice');
    actualprice.innerHTML = data[0].price;

    let discount = document.getElementById('discount');
    discount.innerHTML = data[0].discount;

    let brandName = document.getElementById('brandName');
    brandName.innerHTML = data[0].brand;

    let qty = document.getElementById('qty');
    let quantity = 1;
    qty.innerHTML = quantity;

    data[0].quantity = quantity;
    
    function changeqty(sign){
        
        if (sign == '-' && quantity > 1){
            quantity--;
        } else if(sign == '+'){
            quantity++;
        }

        qty.innerHTML = quantity;
        data[0].quantity = quantity;
    }

    if (localStorage.getItem('cartProducts') == null){
        localStorage.setItem('cartProducts', JSON.stringify([]));
    };

    let clickcount = 1;

    let size_warning = document.getElementById('size_warning');

    function addtocart(){

        if (size_count <= 0){
            size_warning.style.display = 'block';
            return;
        }

        size_warning.style.display = 'none';

        if (clickcount == 1){

            let cart = JSON.parse(localStorage.getItem('cartProducts'));

            cart.push(data[0]);

            localStorage.setItem('cartProducts', JSON.stringify(cart));

            clickcount++;
        } else {

            let cart = JSON.parse(localStorage.getItem('cartProducts'));

            cart[cart.length - 1].quantity += data[0].quantity;

            localStorage.setItem('cartProducts', JSON.stringify(cart));

            clickcount++;
        }; 
        alert("Product Added In Your Cart");
    }

    let otherDetails = document.getElementById('otherdetails');
    otherDetails.innerHTML = data[0].description;
    
    function description(){
        otherDetails.innerHTML = null;
        otherDetails.innerHTML = data[0].description;
    };

    function feature(){

        otherDetails.innerHTML = null;

        let parentdiv = document.createElement('div');
        parentdiv.style.display = 'grid';
        parentdiv.style.gridTemplateColumns = '25% 25% 25%';
        parentdiv.style.gap = '10%';

        let colour = document.createElement('div');
        colour.innerHTML = ' Color : ' + data[0].features.colour;
        

        let fit = document.createElement('div');
        fit.innerHTML = 'Fit : ' + data[0].features.fit;

        let material = document.createElement('div');
        material.innerHTML = 'Material : ' + data[0].features.material;

        let pattern = document.createElement('div');
        pattern.innerHTML = 'Pattern : ' + data[0].features.pattern;

        let waist_rise = document.createElement('div');
        waist_rise.innerHTML = 'Waist Rise : ' + data[0].features.waist_rise;

        let wash_instruction = document.createElement('div');
        wash_instruction.innerHTML = 'Wash Instruction' + data[0].features.wash_instruction;

        parentdiv.append(colour, fit, material, pattern, waist_rise, wash_instruction);
        otherDetails.appendChild(parentdiv);
    }

    function details(){

        otherDetails.innerHTML = null;
        
        let parentdiv = document.createElement('div');
        parentdiv.style.display = 'grid';
        parentdiv.style.gridTemplateColumns = '30% 70%';

        let productType = document.createElement('div');
        productType.style.fontWeight = "500"
        productType.innerHTML = 'Product Type:';

        let productTypeVal = document.createElement('div');
        
        productTypeVal.innerHTML = data[0].type;

        let mrp = document.createElement('div');
        mrp.innerHTML = 'MRP:';
        mrp.style.fontWeight = "500"

        let mrpVal = document.createElement('div');
        mrpVal.innerHTML = '₹ ' + data[0].price + ' (inclucsive of all taxes and excluding of discounts)';

        let netqty = document.createElement('div');
        netqty.style.fontWeight = "500"
        netqty.innerHTML = 'Net Quantity:';

        let netqtyVal = document.createElement('div');
        netqtyVal.innerHTML = '1N';

        let manufacturer = document.createElement('div');
        manufacturer.innerHTML = 'Manufactured By:'
        manufacturer.style.fontWeight = "500"

        let manufacturerVal = document.createElement('div');
        manufacturerVal.innerHTML = data[0].seller_name;

        let marketby = document.createElement('div');
        marketby.innerHTML = 'Marketed By:';
        marketby.style.fontWeight = "500"

        let marketbyVal = document.createElement('div');
        marketbyVal.innerHTML = data[0].details.marketed_by;

        let customercare = document.createElement('div');
        customercare.innerHTML = 'Customer care details:';
        customercare.style.fontWeight = "500"

        let customercareVal = document.createElement('div');

        customercareVal.innerHTML = data[0].details.company_address;
        let email_div = document.createElement('div');
        email_div.innerHTML = data[0].details.email;
        customercareVal.appendChild(email_div);


        parentdiv.append(productType, productTypeVal, mrp, mrpVal, netqty, netqtyVal, manufacturer, manufacturerVal, marketby, marketbyVal, customercare, customercareVal);

        otherDetails.appendChild(parentdiv);
    }


    let size_div = document.getElementsByClassName('size_div');

    for (let i = 0; i < size_div.length; i++){
        size_div[i].addEventListener('click', () => {changebg(size_div[i])});
    }

    let size_count = 0;

    function changebg(div){
        console.log(div, 'Hey');
        if (div.style.backgroundColor === 'rgb(129, 208, 196)'){
                div.style.backgroundColor = 'white';
                div.style.color = '#81d0c4';
                size_count--;
                
                console.log(div);
            } else {
                div.style.backgroundColor = '#81d0c4';
                div.style.color = 'white';
                size_count++;
            }
    }

    // My FirstPart Codes : -------->

    function toHomepage() {
        window.location.href="homePage.html";
    }

    let database = JSON.parse(localStorage.getItem("database"));


    let womenTop = document.getElementById("womenTop");
    womenTop.addEventListener("click", toProductpage);

    if(localStorage.getItem("categoryPage") == null) {
        localStorage.setItem("categoryPage", JSON.stringify([]));
    }

    function toProductpage() {
        let productPage = JSON.parse(localStorage.getItem("categoryPage"));
        productPage = [];

        database.forEach(function(el) {
            if(el.gender == "women") {
                productPage.push(el);
            }
        });
        localStorage.setItem("categoryPage", JSON.stringify(productPage));
        window.location = 'pro1.html';
    }



    let menTop = document.getElementById("menTop");
    menTop.addEventListener("click", toPP);

    if(localStorage.getItem("categoryPage") == null) {
        localStorage.setItem("categoryPage", JSON.stringify([]));
    }

    function toPP() {
        let productPage = JSON.parse(localStorage.getItem("categoryPage"));
        productPage = [];

        database.forEach(function(el) {
            if(el.gender == "men") {
                productPage.push(el);
            }
        });
        localStorage.setItem("categoryPage", JSON.stringify(productPage));
        window.location = 'pro1.html';
    }



    let kidTop = document.getElementById("kidsTop");
    kidTop.addEventListener("click", toproPage);

    if(localStorage.getItem("categoryPage") == null) {
        localStorage.setItem("categoryPage", JSON.stringify([]));
    }

    function toproPage() {
        let productPage = JSON.parse(localStorage.getItem("categoryPage"));
        productPage = [];

        database.forEach(function(el) {
            if(el.gender == "kids") {
                productPage.push(el);
            }
        });
        localStorage.setItem("categoryPage", JSON.stringify(productPage));
        window.location = 'pro1.html';
    }



    let saleRed = document.getElementById("red");
    saleRed.addEventListener("click", toprPage);

    if(localStorage.getItem("categoryPage") == null) {
        localStorage.setItem("categoryPage", JSON.stringify([]));
    }

    function toprPage() {
        let productPage = JSON.parse(localStorage.getItem("categoryPage"));
        productPage = [];

        database.forEach(function(el) {
            if(el.discount == "45%" || el.discount == "50%") {
                productPage.push(el);
            }
        });
        localStorage.setItem("categoryPage", JSON.stringify(productPage));
        window.location = 'pro1.html';
    }

    
        let searchable = ["men", "women", "kids", "boys", "girls", "shirt", "jeans", "chinos", "t-shirt", "sandals", "shoes", "boots", "crocs", "skirt", "top", "suit", "blazer", "trackpant", "trousers", "kurti", "saree", "boxers", "kurta", "checkers", "plain", "print", "stripes", "solid", "slim-fit", "narrow-bottom", "ankle-length", "turtle-neck", "skinny-fit", "regular-fit", "cotton", "polyester", "knit-wear", "Viscose Polyester", "linen", "georgette", "Mid-rise", "high-rise", "low-rise", "machine-wash", "hand-wash", "Levis", "Peter England", "Roadster", "Biba", "Zara", "Richard Parker", "Maanywar", "Wrogn", "One", "Fcuk", "H&M", "Mast & Harbor", "Denim", "Raymond", "Allen Solly", "Van Heusen"];


        const searchInput = document.getElementById("search");
        const searchWrapper = document.querySelector(".wrapper");
        const resultsWrapper = document.querySelector(".results");

        searchInput.addEventListener("keyup", searchInp);

        function searchInp() {
            let results = [];
            let input = searchInput.value;

            if(input.length) {
                results = searchable.filter((item) => {
                    return item.toLowerCase().includes(input.toLowerCase());
                });
            }
            renderResults(results.slice(0, 5));
        }


        function renderResults(results) {
            if(!results.length) {
                return searchWrapper.classList.remove('show');
            }

            const content = results.map((item) => {
                return `<li>${item}</li>`
            }).join("");

            searchWrapper.classList.add('show');
            resultsWrapper.innerHTML = `<ul>${content}</ul>`;
            var list1 = (document.getElementsByTagName("li"));

            for(var i = 0; i < list1.length; i++) {
                let element = list1[i].innerText;
                list1[i].onclick = function() {
                    inputVal(element);
                }
            }

        }

        function inputVal(el) {
            searchInput.value = el;
            return searchWrapper.classList.remove('show');
        }

        var submitSearch = document.getElementById("searchImg");
        submitSearch.addEventListener("click", submitVal);

        function submitVal() {
            let value = searchInput.value;
            let productPage = JSON.parse(localStorage.getItem("categoryPage"));
            productPage = [];
            let flag = true;

            database.forEach(function(el) {
                if(el.type == value || el.brand == value || el.features.pattern == value || el.features.fit == value || el.features.material == value || el.features.waist_rise == value || el.features.wash_instruction == value || el.gender == value) {
                    flag = false;
                    productPage.push(el);
                }
            });
            if(flag) {
                productPage = database;
            }
            localStorage.setItem("categoryPage", JSON.stringify(productPage));
            window.location = 'pro1.html';
        }

        let toCart = document.getElementById("toCart");
        toCart.addEventListener("click", toCartPage);

        function toCartPage() {
            window.location.href = "Cart.html";
        }

    let brandsTop = document.getElementById("brandsTop");
        brandsTop.addEventListener("click", toBrands);

        function toBrands() {
            window.location.href = "brands.html";
        }

        let toLogin = document.getElementById("toLogin");
        toLogin.addEventListener("click", toLoginPage);

        function toLoginPage() {
            window.location.href= "signin.html";
        }

        let email_btn3 = document.getElementById("email_btn3");
        email_btn3.addEventListener("click", mailChecker);

        function mailChecker() {
            let email_enter = document.getElementById("email_enter").value;
            if(email_enter.length > 0) {
                alert("Confirmation Mail Sent");
            } else {
                alert("Please Enter Valid Email Address");
            }
        }
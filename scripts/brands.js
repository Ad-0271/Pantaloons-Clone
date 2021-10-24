let womensection = document.getElementById('women');
        womensection.style.display = 'none';

        let kidssection = document.getElementById('kids');
        kidssection.style.display = 'none';

        let homesection = document.getElementById('home');
        homesection.style.display = 'none';

        function openContent(evt, datatypename){
            var i, bttncontent , datalink;
    
            bttncontent = document.getElementsByClassName("bttncontent");
            for(i=0;i<bttncontent.length;i++){
                bttncontent[i].style.display = "none";
            }
    
            datalink = document.getElementsByClassName("datalink");
            for(i=0;i<datalink.length;i++){
                datalink[i].className = datalink[i].className.replace("active", "");
            }
    
            document.getElementById(datatypename).style.display = "grid";
            evt.currentTarget.className += "active","";
        }

        let dataB = JSON.parse(localStorage.getItem("database"));

    function toHomepage() {
        window.location.href="homePage.html";
    }



    let womenTop = document.getElementById("womenTop");
    womenTop.addEventListener("click", toProductpage);

    if(localStorage.getItem("categoryPage") == null) {
        localStorage.setItem("categoryPage", JSON.stringify([]));
    }

    function toProductpage() {
        let productPage = JSON.parse(localStorage.getItem("categoryPage"));
        productPage = [];

        dataB.forEach(function(el) {
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

        dataB.forEach(function(el) {
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

        dataB.forEach(function(el) {
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

        dataB.forEach(function(el) {
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

            dataB.forEach(function(el) {
                if(el.type == value || el.brand == value || el.features.pattern == value || el.features.fit == value || el.features.material == value || el.features.waist_rise == value || el.features.wash_instruction == value || el.gender == value) {
                    flag = false;
                    productPage.push(el);
                }
            });
            if(flag) {
                productPage = dataB;
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
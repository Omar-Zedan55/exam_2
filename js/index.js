$(".sidebar").animate({ left: -$(".sidebar").outerWidth() });
$(".fa-x").addClass("d-none")
$(".fa-bars").removeClass("d-none")
$(".mainsitebody").removeClass("d-none");
function opennavpar() {
    $(".sidebar").animate({ left: "0" }, 500);
    $(".fa-x").removeClass("d-none")
    $(".fa-bars").addClass("d-none")
    $(".nav-list li").slideDown(700)
}
function closenavbar() {
    $(".nav-list li").slideUp(700)
    $(".sidebar").animate({ left: -$(".sidebar").outerWidth() }, 500);
    $(".fa-x").addClass("d-none")
    $(".fa-bars").removeClass("d-none")
}
$(".fa-bars").click(function () { opennavpar() })
$(".fa-x").click(function () { closenavbar() })
$(".search-li").click(() => {
    document.querySelector(".search-byname").value = ""
    document.querySelector(".search-byF-letter").value = ""
    $(".sitebody .row").html("")
    $(".search-site").removeClass("d-none");
    closenavbar();
    $(".catigories-site").addClass("d-none");
    $(".mainsitebody").addClass("d-none");
    $(".Area-site").addClass("d-none");
    $(".ingedients-site").addClass("d-none");
    $(".instructions").addClass("d-none");
    $(".instructions").addClass("d-none");
    $(".contact-us").addClass("d-none");
})
async function search_by_name() {
    $(".loader-div").removeClass("d-none")

    let inputdata = document.querySelector(".search-byname");
    console.log(inputdata.value);
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputdata.value}`)
    let jsondata = await data.json(); $(".loader-div").addClass("d-none")
    console.log(jsondata);
    display_for_search(jsondata.meals)
}
async function search_by_first_letter() {
    let inputdata = document.querySelector(".search-byF-letter");
    if (inputdata.value != null && inputdata.value != "" && inputdata.value != " ") {
        $(".loader-div").removeClass("d-none")
        console.log(inputdata.value);
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputdata.value}`)
        let jsondata = await data.json(); $(".loader-div").addClass("d-none")
        console.log(jsondata);
        display_for_search(jsondata.meals)
    }else{
        $(".loader-div").removeClass("d-none")
        console.log(inputdata.value);
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
        let jsondata = await data.json(); $(".loader-div").addClass("d-none")
        console.log(jsondata);
        display_for_search(jsondata.meals)
    }
}
$(".search-byname").keyup(search_by_name);
$(".search-byF-letter").keyup(search_by_first_letter);
function display_for_search(data) {
    var cartoona = ``
    for (var i = 0; i < data.length; i++) {
        // console.log(data[i].idMeal);
        cartoona += `<div data-id=" ${data[i].idMeal}" class="col-md-3 mb-4">
                <div data-id=" ${data[i].idMeal}" class="inner  card-inner-goto-instructions rounded-2 overflow-hidden position-relative">
                    <img data-id=" ${data[i].idMeal}" src=" ${data[i].strMealThumb}" class="w-100" alt="food-photo">
                    <div data-id=" ${data[i].idMeal}" class="layer ps-1 bg-white position-absolute d-flex flex-column justify-content-center">
                        <div data-id=" ${data[i].idMeal}" class="foodtitle  ">
                            <h3 data-id=" ${data[i].idMeal}">${data[i].strMeal}</h3>
                        </div>
                    </div>
                </div>
            </div>`
        $(".sitebody .row").html(cartoona)
        click_for_instructions_item()
    }
}
async function get_data_for_catigories() {
    $(".loader-div").removeClass("d-none")

    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let jsondata = await data.json(); $(".loader-div").addClass("d-none")
    console.log(jsondata.categories);
    display_for_Catigories(jsondata.categories)
}
$(".Catigories-li").click(function () {
    $(".catigories-site .row").html("")
    $(".catigories-site").removeClass("d-none");
    $(".mainsitebody").addClass("d-none");
    $(".search-site").addClass("d-none");
    $(".Area-site").addClass("d-none");
    $(".ingedients-site").addClass("d-none");
    $(".contact-us").addClass("d-none");
    $(".instructions").addClass("d-none");
    closenavbar();
    get_data_for_catigories()
})
function display_for_Catigories(data) {
    var cartoona = ``
    for (var i = 0; i < data.length; i++) {
        cartoona += `<div data-id="${data[i].strCategory}" class="col-md-3 mb-4">
                    <div data-id="${data[i].strCategory}" class="inner catigories-site-inner rounded-2 overflow-hidden position-relative">
                        <img data-id="${data[i].strCategory}" src="${data[i].strCategoryThumb}">
                        <div data-id="${data[i].strCategory}" class="layer ps-1 bg-white overflow-hidden position-absolute d-flex flex-column justify-content-center">
                            <div data-id="${data[i].strCategory}" class="category-info  text-center">
                                <h3 data-id="${data[i].strCategory}">${data[i].strCategory}</h3>
                                <p data-id="${data[i].strCategory}">${data[i].strCategoryDescription.split(" ", 25).join(" ")}</p>
                            </div>
                        </div>
                    </div>
                </div>`
    } $(".catigories-site .row").html(cartoona)
    click_catigory_item()
}
async function get_data_for_area() {
    $(".loader-div").removeClass("d-none")

    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let jsondata = await data.json(); $(".loader-div").addClass("d-none")
    console.log(jsondata.meals);
    display_for_Area(jsondata.meals)
}
$(".Area-li").click(function () {
    $(".Area-site .row").html("")
    $(".Area-site").removeClass("d-none");
    $(".mainsitebody").addClass("d-none");
    $(".search-site").addClass("d-none");
    $(".catigories-site").addClass("d-none");
    $(".ingedients-site").addClass("d-none");
    $(".instructions").addClass("d-none");
    $(".contact-us").addClass("d-none");
    closenavbar();
    get_data_for_area()
})
function display_for_Area(data) {
    var cartoona = ``
    for (var i = 0; i < data.length; i++) {
        cartoona += `<div data-id=${data[i].strArea} class="col-md-3 mb-4">
                    <div data-id=${data[i].strArea}  class="inner area-site-inner text-center rounded-2 overflow-hidden position-relative">
                        <i data-id=${data[i].strArea} } class="fa-solid fa-house-laptop"></i>
                        <h2 data-id=${data[i].strArea} >
                            ${data[i].strArea}
                        </h2>
                    </div>
                </div>`
    } $(".Area-site .row").html(cartoona)
    click_area_item()
}
async function get_data_for_ingredients() {
    $(".loader-div").removeClass("d-none")

    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let jsondata = await data.json(); $(".loader-div").addClass("d-none")
    console.log(jsondata.meals);
    display_for_ingredients(jsondata.meals)
}
$(".Ingedients-li").click(function () {
    $(".ingedients-site .row").html("")
    $(".ingedients-site").removeClass("d-none");
    $(".mainsitebody").addClass("d-none");
    $(".search-site").addClass("d-none");
    $(".catigories-site").addClass("d-none");
    $(".Area-site").addClass("d-none");
    $(".instructions").addClass("d-none");
    $(".contact-us").addClass("d-none");
    closenavbar();
    get_data_for_ingredients()
})
function display_for_ingredients(data) {
    var cartoona = ``
    for (var i = 0; i < data.length; i++) {
        if (data[i].strDescription == undefined) {
            continue
        }
        console.log(data[i].strIngredient.split(" ").join("_"));
        cartoona += `<div data-id="${data[i].strIngredient.split(" ").join("_")}" class="col-md-3 mb-4">
                    <div data-id="${data[i].strIngredient.split(" ").join("_")}" class="inner text-center ingredients-site-inner rounded-2 overflow-hidden position-relative">
                        <i data-id="${data[i].strIngredient.split(" ").join("_")}" class="fa-solid fa-drumstick-bite"></i>
                        <h2 data-id="${data[i].strIngredient.split(" ").join("_")}">
                            ${data[i].strIngredient.split(" ").join("_")}
                        </h2>
                        <p data-id="${data[i].strIngredient.split(" ").join("_")}">
                            ${data[i].strDescription?.split(" ", 25).join(" ")}
                        </p>
                    </div>
                </div>`
    } $(".ingedients-site .row").html(cartoona)
    click_ingredients_item()
}
$(".Contact-li").click(function () {
    $(".contact-us").removeClass("d-none");
    $(".mainsitebody").addClass("d-none");
    $(".search-site").addClass("d-none");
    $(".catigories-site").addClass("d-none");
    $(".Area-site").addClass("d-none");
    $(".instructions").addClass("d-none");
    $(".ingedients-site").addClass("d-none");
    closenavbar();
})
function contact_validation() {
    $(".nameinput").off().on("keyup", function () {
        console.log(name_regex());
        console.log($(".nameinput")[0].value);
        if (name_regex() == false) {
            $(".nameinputerrormsg").removeClass("d-none");
        } else {
            $(".nameinputerrormsg").addClass("d-none");
        }
        check_all_fields()
    });
    $(".emailInput").off().on("keyup", function () {
        console.log(email_regex());
        console.log($(".emailInput")[0].value);
        if (email_regex() == false) {
            $(".emailInputerrormsg").removeClass("d-none");
        } else {
            $(".emailInputerrormsg").addClass("d-none");
        } check_all_fields()
    });
    $(".phoneInput").off().on("keyup", function () {
        console.log(phone_regex());
        console.log($(".phoneInput")[0].value);
        if (phone_regex() == false) {
            $(".phoneInputerrormsg").removeClass("d-none");
        } else {
            $(".phoneInputerrormsg").addClass("d-none");
        } check_all_fields()
    });
    $(".ageInput").off().on("keyup", function () {
        console.log(age_regex());
        console.log($(".ageInput")[0].value);
        if (age_regex() == false) {
            $(".ageInputerrormsg").removeClass("d-none");
        } else {
            $(".ageInputerrormsg").addClass("d-none");
        } check_all_fields()
    });
    $(".passwordInput").off().on("keyup", function () {
        console.log(password_regex());
        console.log($(".passwordInput")[0].value);
        if (password_regex() == false) {
            $(".passwordInputerrormsg").removeClass("d-none");
        } else {
            $(".passwordInputerrormsg").addClass("d-none");
        } check_all_fields()
    });
    $(".repasswordInput").off().on("keyup", function () {
        if (repassword_check() != true) {
            $(".repasswordInputerrormsg").removeClass("d-none");
        } else {
            $(".repasswordInputerrormsg").addClass("d-none");
        } check_all_fields()
    });
}
function check_all_fields() {
    if (name_regex() && email_regex() && phone_regex() && age_regex() && password_regex() && repassword_check()) {
        $(".Submitbutton").prop("disabled", false);
    } else {
        $(".Submitbutton").prop("disabled", true);
    }
}
function name_regex() {
    return (/^[a-zA-Z]+$/.test($(".nameinput")[0].value))
}
function email_regex() {
    let email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return (email_regex.test($(".emailInput")[0].value))
}
function phone_regex() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test($(".phoneInput")[0].value))
}
function age_regex() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test($(".ageInput")[0].value))
}
function password_regex() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test($(".passwordInput")[0].value))
}
function repassword_check() {
    return $(".repasswordInput")[0].value == $(".passwordInput")[0].value
}
contact_validation()
async function getdata_for_mainsite() {
    $(".loader-div").removeClass("d-none")

    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    let jsondata = await data.json();$(".loader-div").addClass("d-none")
    console.log(jsondata.meals);
    display_for_main_site(jsondata.meals)
}
function display_for_main_site(data) {
    console.log(data);
    var cartoona = ``
    for (var i = 0; i < data?.length; i++) {
        cartoona += `<div data-id=" ${data[i].idMeal}" class="col-md-3 mb-4">
                <div data-id=" ${data[i].idMeal}" class="inner card-inner-goto-instructions rounded-2 overflow-hidden position-relative">
                    <img data-id=" ${data[i].idMeal}" src=" ${data[i].strMealThumb}" class="w-100" alt="food-photo">
                    <div data-id=" ${data[i].idMeal}" class="layer ps-1 bg-white position-absolute d-flex flex-column justify-content-center">
                        <div data-id=" ${data[i].idMeal}" class="foodtitle  ">
                            <h3 data-id=" ${data[i].idMeal}">${data[i].strMeal}</h3>
                        </div>
                    </div>
                </div>
            </div>`
    } $(".mainsitebody .row").html(cartoona)
    click_for_instructions_item()
}
getdata_for_mainsite()
function click_catigory_item() {
    $(".catigories-site-inner").click((e) => {
        $(".mainsitebody .row").html("")
        $(".search-site").addClass("d-none");
        $(".catigories-site").addClass("d-none");
        $(".mainsitebody").removeClass("d-none");
        $(".Area-site").addClass("d-none");
        $(".ingedients-site").addClass("d-none");
        $(".contact-us").addClass("d-none");
        $(".instructions").addClass("d-none");
        console.log(e.target.getAttribute("data-id"));
        getdata_for_category_in_mainsite(e.target.getAttribute("data-id"))
    })
}
async function getdata_for_category_in_mainsite(item) {
    $(".loader-div").removeClass("d-none")

    console.log(item);
    let link = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`
    console.log(link);
    let data = await fetch(link)
    let jsondata = await data.json(); $(".loader-div").addClass("d-none")
    console.log(jsondata.meals);
    display_for_main_site(jsondata.meals)
}
function click_area_item() {
    $(".area-site-inner").click((e) => {
        $(".mainsitebody .row").html("")
        $(".search-site").addClass("d-none");
        $(".catigories-site").addClass("d-none");
        $(".mainsitebody").removeClass("d-none");
        $(".Area-site").addClass("d-none");
        $(".ingedients-site").addClass("d-none");
        $(".contact-us").addClass("d-none");
        $(".instructions").addClass("d-none");
        console.log(e.target.getAttribute("data-id"));
        getdata_for_area_in_mainsite(e.target.getAttribute("data-id"))
    })
}
async function getdata_for_area_in_mainsite(item) {
    $(".loader-div").removeClass("d-none")

    console.log(item);
    let link = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${item}`
    console.log(link);
    let data = await fetch(link)
    let jsondata = await data.json(); $(".loader-div").addClass("d-none")
    console.log(jsondata.meals);
    display_for_main_site(jsondata.meals)
}
function click_ingredients_item() {
    $(".ingredients-site-inner").click((e) => {
        $(".mainsitebody .row").html("")
        $(".search-site").addClass("d-none");
        $(".catigories-site").addClass("d-none");
        $(".mainsitebody").removeClass("d-none");
        $(".Area-site").addClass("d-none");
        $(".ingedients-site").addClass("d-none");
        $(".contact-us").addClass("d-none");
        $(".instructions").addClass("d-none");
        console.log(e.target.getAttribute("data-id"));
        getdata_for_ingredient_in_mainsite(e.target.getAttribute("data-id"))
    })
}
async function getdata_for_ingredient_in_mainsite(item) {
    $(".loader-div").removeClass("d-none")

    console.log(item);
    let link = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${item}`
    console.log(link);
    let data = await fetch(link)
    let jsondata = await data.json(); $(".loader-div").addClass("d-none")
    console.log(jsondata.meals);
    display_for_main_site(jsondata.meals)
}
function click_for_instructions_item() {
    $(".card-inner-goto-instructions").click((e) => {
        $(".search-site").addClass("d-none");
        $(".catigories-site").addClass("d-none");
        $(".mainsitebody").addClass("d-none");
        $(".Area-site").addClass("d-none");
        $(".ingedients-site").addClass("d-none");
        $(".contact-us").addClass("d-none");
        $(".instructions").removeClass("d-none");
        console.log(e.target.getAttribute("data-id"));
        getdata_for_instr_in_mainsite(e.target.getAttribute("data-id"))
    })
}
async function getdata_for_instr_in_mainsite(item) {
    $(".loader-div").removeClass("d-none")

    console.log(item);
    let link = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item}`
    console.log(link);
    let data = await fetch(link)
    let jsondata = await data.json(); $(".loader-div").addClass("d-none")
    console.log(jsondata.meals);
    display_for_instructions_site(jsondata.meals)
}
function display_for_instructions_site(data) {
    var cartoona = ``
    var recipes_cartoona = ``
    let ingredients = [];
    let measures = [];
    for (let i = 1; i <= 20; i++) {
        let ingredient = data[0][`strIngredient${i}`];
        let measure = data[0][`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(ingredient);
        }
        if (measure && measure.trim() !== "") {
            measures.push(measure);
        }
    }
    for (let i = 0; i < ingredients.length; i++) {
        // console.log(`${measures[i]} ${ingredients[i]}`);
        recipes_cartoona += `<h4 class="rounded-2 d-flex  Recipes">${measures[i]} ${ingredients[i]}</h4>`
    }
    let tagscartoona = ``
    if (data[0].strTags != null) {
        let tags = data[0].strTags.split(",")
        console.log(tags);
        for (let i = 0; i < tags.length; i++) {
            // console.log(`${measures[i]} ${ingredients[i]}`);
            tagscartoona += `<h4 class="rounded-2 d-flex  tags">${tags[i]}</h4>`
        }
    }
    cartoona = `<div class="row">
                <div class="col-md-4">
                    <div class="inner-instr-img overflow-hidden rounded-2">
                        <img src="${data[0].strMealThumb}" class="w-100 " alt="">
                        <h2 class="text-white">${data[0].strMeal}</h2>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="inner-instr-text overflow-hidden rounded-2">
                        <h2 class="text-white">Instructions</h2>
                        <p class="text-white">${data[0].strInstructions}</p>
                        <h3 class="text-white">Area : <span class="area">${data[0].strArea}</span></h3>
                        <h3 class="text-white">Category :<span class="cat"> ${data[0].strCategory}</span> </h3>
                        <h3 class="text-white">Recipes :</h3> <br>
                            ${recipes_cartoona}
                        <div class="clr"></div>
                        
                        <h3 class="text-white mt-4">Tags : </h3>${tagscartoona}
                        <div class="clr"></div>
                        <div class="d-flex mb-5 mt-4">
                            <button type="button" class="btn strSource  btn-success me-1">Source</button>
                            <button type="button" class="btn strYoutube btn-danger ">Youtube</button>
                        </div>
                    </div>
                </div>
            </div>`
    $(".instructions .container").html(cartoona)
    $(".strYoutube").click(function () {
        open(data[0].strYoutube, "_blank")
    })
    $(".strSource").click(function () {
        open(data[0].strSource, "_blank")
    })
}
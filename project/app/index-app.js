window.onscroll= function() {myFunction()};

let header=document.getElementById("header");
let sticky=header.offsetTop;

function myFunction(){
    if (window.pageYOffset >=sticky){
        header.classList.add("sticky")
    } else{
        header.classList.remove("sticky")
    }
}


let tabHeader= document.getElementsByClassName("tab-header")[0];
let tabsPane =tabHeader.getElementsByTagName("li");

for (let i=0; i<tabsPane.length; i++){
    tabsPane[i].addEventListener("click", function(){
        tabHeader.getElementsByClassName("active")
        [0].classList.remove("active");
        tabsPane[i].classList.add("active");
        });
}


const tabs= document.querySelectorAll("[data-tab-target]")
const tabContents= document.querySelectorAll("[data-tab-content]")


tabs.forEach(tab => {
    tab.addEventListener("click", () =>{
        const target= document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active")
        })
        target.classList.add("active");
    })
})


$(document).ready(function(){
    

    $('#card-wraper1').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: $("#next1"),
    prevArrow: $("#prev1")
    });
});

$(document).ready(function(){
    

    $('#card-wraper2').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: $("#next2"),
    prevArrow: $("#prev2")
    });
});

$(document).ready(function(){
    

    $('#card-wraper3').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: $("#next3"),
    prevArrow: $("#prev3")
    });
});

$(document).ready(function(){
    

    $('#card-wraper4').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: $("#next4"),
    prevArrow: $("#prev4")
    });
});




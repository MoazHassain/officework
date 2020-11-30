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


const tabs= document.querySelectorAll("[data-tab-target")
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: $("#next3"),
    prevArrow: $("#prev3")
    });
});

// $(document).ready(function(){
    

//     $('#card-wraper4').slick({
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     nextArrow: $("#next4"),
//     prevArrow: $("#prev4")
//     });
// });

$(document).ready(function(){
    

    $('#card-wraper4').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: $("#next4"),
    prevArrow: $("#prev4")
    });
});




function openNav() {
   
   let nav=document.getElementById("mySidenav");
   nav.classList.toggle("activeSidenav");
   let cards, i ;
   cards=document.querySelectorAll(".card");
   for(i=0; i< cards.length; i++){
       
       cards[i].classList.toggle("activeCards");

   }
   
   document.getElementById("main").style.marginLeft="0px";
}

// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     let cards, i ;
//     cards=document.querySelectorAll(".card");
//     for(i=0; i< cards.length; i++){
//         cards[i].style.marginLeft = "0";
//     }
//     document.getElementById("main").style.marginLeft= "0";
// }
   



let rating= document.getElementsByClassName("rating-btn");
var j;

for(j=0; j< rating.length; j++){
   rating[j].addEventListener("click", function(){
       this.classList.toggle("active");
       let ratingContent= this.nextElementSibling;
       if(ratingContent.style.display==="block"){
           ratingContent.style.display="none";
       } else{
           ratingContent.style.display="block";
       }
   });
}

let topic= document.getElementsByClassName("topic-btn");
var k;

for(k=0; k< rating.length; k++){
   topic[k].addEventListener("click", function(){
       this.classList.toggle("active");
       let topicContent= this.nextElementSibling;
       if(topicContent.style.display==="block"){
         topicContent.style.display="none";
       } else{
         topicContent.style.display="block";
       }
   });
}

let duration= document.getElementsByClassName("duration-btn");
var l;

for(l=0; l< rating.length; l++){
   duration[l].addEventListener("click", function(){
       this.classList.toggle("active");
       let durationContent= this.nextElementSibling;
       if(durationContent.style.display==="block"){
         durationContent.style.display="none";
       } else{
         durationContent.style.display="block";
       }
   });
}
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
   var catagory = document.getElementsByClassName("catagory-btn");
   var n;

   for (n = 0; n < catagory.length; n++) {
   catagory[n].addEventListener("click", function() {
   this.classList.toggle("active");
   var catagoryContent = this.nextElementSibling;
   if (catagoryContent.style.display === "block") {
       catagoryContent.style.display = "none";
   } else {
       catagoryContent.style.display = "block";
   }
   });
   }

let language= document.getElementsByClassName("language-btn");
var m;

for(m=0; m< language.length; m++){
       language[m].addEventListener("click", function(){
       this.classList.toggle("active");
       let lanContent= this.nextElementSibling;
       if(lanContent.style.display==="block"){
           lanContent.style.display="none";
       } else{
           lanContent.style.display="block";
       }
   });
}
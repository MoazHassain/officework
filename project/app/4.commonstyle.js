
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

   for(k=0; k< topic.length; k++){
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

   for(l=0; l< duration.length; l++){
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
    
    var t=0;
    var showmore=document.getElementById("showmore")
    var dot =document.getElementById("dot");
    var showBtn= document.getElementById("show");
    function show(){
        if(t==0){
            showmore.style.display="block";
            dot.style.display="none";
            showBtn.innerHTML= "Show Less"
            t=1;
        } else{
            showmore.style.display="none";
            dot.style.display="block";
            showBtn.innerHTML= "Show More"
            t=0;
        }
    }

    function myDropdown(){
        document.getElementById("dropdown-content").classList.toggle("show-content");
    }

    window.onclick = function(event) {
        if(!event.target.matches(".dropdownBtn"))
        {
            var dropdown = document.getElementsByClassName("dropdown-content");
            var x;
            for(x=0; x<dropdown.length; x++){
                var openDropdown= dropdown[x];
                if(openDropdown.classList.contains("show-content")){
                    openDropdown.classList.remove("show-content");
                }
            }
        }
    }

    var q=0;
    var showAnother1 = document.getElementById("show-another1");
    function active1(){
        if(q==0){
            showAnother1.innerHTML= "Thank you for your feedback"
            q=1;
        } else{
            showAnother1.innerHTML= "Was that helpful?"
            q=0;
        }
    }
    var p=0;
    var showAnother2 = document.getElementById("show-another2");
    function active2(){
        if(p==0){
            showAnother2.innerHTML= "Thank you for your feedback"
            p=1;
        } else{
            showAnother2.innerHTML= "Was that helpful?"
            p=0;
        }
    }
    var s=0;
    var showAnother3 = document.getElementById("show-another3");
    function active3(){
        if(s==0){
            showAnother3.innerHTML= "Thank you for your feedback"
            s=1;
        } else{
            showAnother3.innerHTML= "Was that helpful?"
            s=0;
        }
    }
    var u=0;
    var showAnother4 = document.getElementById("show-another4");
    function active4(){
        if(u==0){
            showAnother4.innerHTML= "Thank you for your feedback"
            u=1;
        } else{
            showAnother4.innerHTML= "Was that helpful?"
            u=0;
        }
    }
    
    var w=0;
    var showAnother5 = document.getElementById("show-another5");
    function active5(){
        if(w==0){
            showAnother5.innerHTML= "Thank you for your feedback"
            w=1;
        } else{
            showAnother5.innerHTML= "Was that helpful?"
            w=0;
        }
    }
    var z=0;
    var showAnother6 = document.getElementById("show-another6");
    function active6(){
        if(z==0){
            showAnother6.innerHTML= "Thank you for your feedback"
            z=1;
        } else{
            showAnother6.innerHTML= "Was that helpful?"
            z=0;
        }
    }
    var y=0;
    var showAnother7 = document.getElementById("show-another7");
    function active7(){
        if(y==0){
            showAnother7.innerHTML= "Thank you for your feedback"
            y=1;
        } else{
            showAnother7.innerHTML= "Was that helpful?"
            y=0;
        }
    }


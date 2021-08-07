window.onload=function(){
    document.querySelector(".loader ").classList.toggle("hide")
}



$(function(){
    var mixer = mixitup(".filter-img", {
        animation: {
        }
    });
    
})
 
 $(".header-content .botton").click(function(){
       $(".items ul ").slideToggle(1000)
   }) 



   var list=document.querySelectorAll(".main3 .main3-filter .container .filter-li ul li");
   for(let i=0;i<list.length;i++){
    list[i].onclick=function(){
        for(let i=0;i<list.length;i++){
            list[i].classList.remove("active")
        }
        list[i].classList.add("active");
    }
   }
   

document.querySelector(".navbar-toggler").onclick=function(){
    document.querySelector(".navbar-toggler span.sec-p").classList.toggle("open")
}
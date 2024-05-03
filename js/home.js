var preloader = document.getElementById("preloader-active");
var sticky_bar = document.getElementById("m-header");



window.addEventListener('load', ()=>{
    setTimeout(()=>{
        preloader.style.display="none";
    },5000)
    
})



window.addEventListener('scroll', ()=>{
   if(window.pageYOffset > 150){
    sticky_bar.class.add="sticky-bar";
   }
   else{
    sticky_bar.class.remove="sticky-bar";
   }
})


// back to top button code 
document.addEventListener("DOMContentLoaded", function() {
    var back_to_top = document.getElementById('back-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 150) {
            back_to_top.style.display = "block";

        }
        else {
            back_to_top.style.display = "none";
        }
    })

    back_to_top.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


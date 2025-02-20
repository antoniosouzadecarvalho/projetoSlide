let slideIndex = 0;
let timeOut;

const dots = document.getElementsByClassName("dot");  
for(let dot = 0; dot < dots.length; dot++){
    dots[dot].addEventListener("click", (event) => { 
        clearTimeout(timeOut)
        slideIndex = event.target.id 
        showSlide()
    })
}  

showSlide()

function showSlide(){
    let i;

    const slides = document.getElementsByClassName("mySlide");
    const dots = document.getElementsByClassName("dot");  


    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slideIndex++

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active"
    
    timeOut = setTimeout(showSlide, 2000);
}






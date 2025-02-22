
/*
let slideImageIndex = 0;


showImage()

function showImage(){
    let i;

    const imageSlide = document.getElementsByClassName("image-slide")

    for( i = 0; i < imageSlide.length; i++){
        imageSlide[i].style.display = "none"
    }

    slideIndex++

    if(slideImageIndex > imageSlide.length){
        for( i = 0; i < imageSlide.length; i++){
            imageSlide[i].style.display = "none"
        }
        return
    }


    imageSlide[slideImageIndex - 1].style.display = "block"

    console.log("ola")

    setTimeout(showImage, 5000)

}
*/

/*let slideVideoIndex = 0;

showVideo()

function showVideo(){
    let i;

    const videoSlide = document.getElementsByClassName("video-slide")

    for(i = 0; i < videoSlide.length; i++){
        videoSlide[i].style.display = "none";
        videoSlide[i].children[0].autoplay = false
    }

    slideVideoIndex++;

    if(slideVideoIndex > videoSlide.length){
        slideVideoIndex = 1;
    }

    videoSlide[slideVideoIndex - 1].style.display = "block";
    videoSlide[slideVideoIndex - 1].children[0].muted = true

    setTimeout(showVideo, 35000)
}*/


let slideIndex = 1;
let slideCont = 1;

let containerElement = document.getElementsByClassName("midia-container");
containerElement[1].style.display = "none"
containerElement[0].style.display = "none"

let videoElement = document.getElementById("midiaVideo");
let imageElement = document.getElementById("midiaImage");

const midiaData = [
    {image: "./midia/imagen-01.jpeg", duration: 10, midiaType: 1},
    {video: "./midia/video-01.mp4", duration: 31, midiaType: 0},
    {video: "./midia/video-02.mp4", duration: 26, midiaType: 0},
    {image: "./midia/imagen-02.jpeg", duration: 10, midiaType: 1},
    {video: "./midia/video-03.mp4", duration: 36, midiaType: 0}
]

showSlide()

function showSlide(){

    if(midiaData[slideIndex - 1].midiaType == 0){
        containerElement[1].style.display = "none"

        containerElement[0].style.display = "block";
        videoElement.src = midiaData[slideIndex - 1].video;
    }
       
    if(midiaData[slideIndex - 1].midiaType == 1){
        containerElement[0].style.display = "none"

        containerElement[1].style.display = "block";
        imageElement.src = midiaData[slideIndex - 1].image;
    }


    let milesimo = midiaData[slideIndex - 1].duration * 1000;

    setTimeout(showSlide, milesimo);

    slideIndex++;

    if(slideIndex > midiaData.length){
        slideIndex = 1;
    }
    
}


let progressBar = document.getElementById("bar");
let time = 1;
console.log(duration)


function showBar(){ 
    time++
    progressBar.style.width = time / duration * 100 + "%"

    if(time == duration){
        progressBar.style.width = "0px"
        time = 1;
    }

}

setInterval(showBar, 1000)












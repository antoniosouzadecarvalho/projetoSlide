

/*
cccc
let slideCont = 1;

let containerElement = document.getElementsByClassName("midia-container");
containerElement[1].style.display = "none"
containerElement[0].style.display = "none"

let videoElement = document.getElementById("midiaVideo");
let imageElement = document.getElementById("midiaImage");

*/

let containerMidia = document.getElementsByClassName("midia-container");

const midiaData = [
    {addressImage: "./midia/imagen-01.jpeg", duration: 10, midiaType: 1, image: 1},
    {addressVideo: "./midia-02/video-01-mp4.mp4", duration: 35, midiaType: 0, video:1},
    {addressVideo: "./midia-02/video-02-mp4.mp4", duration: 30, midiaType: 0, video:2},
    {addressImage: "./midia/imagen-02.jpeg", duration: 10, midiaType: 1, image: 2},
    {addressVideo: "./midia-02/video-03-mp4.mp4", duration: 40, midiaType: 0, video:3},
    {addressVideo: "./midia-02/video-04-mp4.mp4", duration: 25, midiaType: 0, video:4},
    {addressVideo: "./midia-02/video-05-mp4.mp4", duration: 25, midiaType: 0, video:5},
    {addressVideo: "./midia-02/video-06-mp4.mp4", duration: 55, midiaType: 0, video:6}
    
]

loadingMidias()

function loadingMidias(){   

    midiaData.map( midia => {
        
        if(midia.midiaType == 0) {
            let videoDiv = document.createElement("div")
            videoDiv.setAttribute("class", "classVideo")

            let midiaVideo = document.createElement("video");
            midiaVideo.setAttribute("src", `${midia.addressVideo}`);

            videoDiv.appendChild(midiaVideo);

            containerMidia[midia.midiaType].appendChild(videoDiv)
        }

        if(midia.midiaType == 1) {

            let imageDiv = document.createElement("div")
            imageDiv.setAttribute("class", "classImage")

            let midiaImage = document.createElement("img");
            midiaImage.setAttribute("src", `${midia.addressImage}`);

            imageDiv.appendChild(midiaImage);

            containerMidia[midia.midiaType].appendChild(imageDiv)
        }

    })
}

let divsVideo = document.getElementsByClassName("classVideo");
let divsImage = document.getElementsByClassName("classImage");
let y;
let x;
let slideIndex = 1;

showSlide()

function showSlide(){

    for(y = 0; y < divsVideo.length; y++){
        divsVideo[y].style.display = "none";
    }

    for(x = 0; x < divsImage.length; x++){
        divsImage[x].style.display = "none";
    }

    if(midiaData[slideIndex - 1].midiaType == 0){
        containerMidia[1].style.display = "none"

        containerMidia[0].style.display = "block";

        divsVideo[midiaData[slideIndex - 1].video - 1].style.display = "block"
        divsVideo[midiaData[slideIndex - 1].video - 1].children[0].play();
        
    }
       
    if(midiaData[slideIndex - 1].midiaType == 1){
        containerMidia[0].style.display = "none"

        containerMidia[1].style.display = "block";

       divsImage[midiaData[slideIndex - 1].image - 1].style.display = "block"
        
    }


    let milesimo = midiaData[slideIndex - 1].duration * 1000;

    setTimeout(showSlide, milesimo);

    slideIndex++;

    if(slideIndex > midiaData.length){
        slideIndex = 1;
    }
    
}














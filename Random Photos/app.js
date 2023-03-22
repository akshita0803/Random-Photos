const imageContainerEl = document.querySelector(".image-container");

const btnEl  =document.querySelector(".btn");

btnEl.addEventListener("click",()=>{
    let imageNumber = 9;
    addNewImages(imageNumber);
});

function addNewImages(imgNum){
    for (let index = 0; index < imgNum; index++) {
        const newImgEl =document.createElement("img");
        newImgEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imageContainerEl.appendChild(newImgEl);
        
    }
}
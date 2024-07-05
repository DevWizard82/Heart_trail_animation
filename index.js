const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove",(event)=>{
    const Posx = event.offsetX;
    const Posy = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.top = Posy + "px";
    spanEl.style.left = Posx + "px";
    const randomNum = Math.random()*100;
    spanEl.style.width = randomNum + "px";
    spanEl.style.height = randomNum + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },3000);
})
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const x = event.offsetX;
  const y = event.offsetY;

  const spanEl = document.createElement("span");
  spanEl.style.left = x + "px";
  spanEl.style.top = y + "px";

  const size = Math.random()*150;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";


  bodyEl.appendChild(spanEl);

  setTimeout(()=>{
    spanEl.remove()
  }, 3000)
});

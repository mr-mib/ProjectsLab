const aEl = document.querySelector(".btn");

aEl.addEventListener("mouseover", (event) => {
  const hPos = event.pageX - aEl.offsetLeft;
  const vPos = event.pageY - aEl.offsetTop;

  aEl.style.setProperty('--hPos', vPos + 'px');
  aEl.style.setProperty('--vPos', hPos + 'px');

});

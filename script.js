const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav-bar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    });

}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    });

}

const mainImg = document.getElementById("main-img");
const smallImgs = document.querySelectorAll(".small-img");

  smallImgs.forEach(img => {
    img.addEventListener("click", () => {
      mainImg.src = img.src;
    });
  });
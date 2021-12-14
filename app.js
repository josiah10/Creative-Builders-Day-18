const space = document.getElementById('slideSpace');
const blur = document.getElementById('slide-Blur');
const color = document.getElementById('slideColor');
const img =document.getElementById('myImage');

space.addEventListener('input',()=>{
    const val= parseInt(space.value)+5;
    img.style.padding=val+'px';
});

blur.addEventListener('input',()=>{
    const val= parseInt(blur.value);
    img.style.filter=`blur(${val}px)`;
});
color.addEventListener('input',()=>{
    img.style.backgroundColor=color.value;
});

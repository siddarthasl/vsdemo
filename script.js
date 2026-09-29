function changebg(){
    let r=Math.random() * 255;
    let g=Math.random() * 255;
    let b=Math.random() * 255;

    let body_bg=document.querySelector('body');
    body_bg.style.cssText=
    'background-color:rgb(${r},${g},${b})';
}
const btn = document.getElementById('button');

function randomBG(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = `rgb(${x}, ${y}, ${z})`;
    return document.body.style.backgroundColor = color;
}
btn.addEventListener('click',()=>{
    randomBG();
})

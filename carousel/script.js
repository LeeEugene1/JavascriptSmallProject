const img = document.querySelector('#imgs');
const imgs = document.querySelectorAll('img');

let i = 0;
function move(){
    // for(let i = 0; i<imgs.length; i++){
    //     imgs[i].style.transform = 'translateX(-500px)';
    // }
    // -500px -1000px -1500px
    
    // for(let i = 0; i<imgs.length; i++){
    //     imgs[i].style.transform = `translateX(${i * 500}px)`;
    // }

    i++;
    if(i == imgs.length){
        i = 0;
    }
    img.style.transform = `translateX(${i * -500}px)`;
}
setInterval(move, 3000);
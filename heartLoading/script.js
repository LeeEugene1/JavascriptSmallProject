//1초마다 하트만들기(5개까지만)
let index = 0
function createHeart(){
    const space = document.createElement('div')
    document.body.appendChild(space)
    const heart = space.innerText = '💜'
    index++;
    if(index>=4){
        let hearts = document.querySelectorAll('div');
        // alert('hi')
        // clearInterval(make)
        // divs.remove();  
        // document.body.removeChild(div)
        hearts.forEach(e => e.parentNode.removeChild(e));
        // break;
        // continue;
        index=0;
    }
}
const make = setInterval(createHeart, 1000)

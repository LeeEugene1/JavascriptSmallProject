//1초마다 하트만들기(5개까지만)
let count = 0;
const set = setInterval(createHeart, 1000)

function createHeart(){
    const heart = document.createElement('div');
    heart.innerText = '💜'
    document.body.appendChild(heart)
    count++;
    console.log(count)
    if (count>=5){
        clearInterval(set);
    }
}

// setInterval(createHeart, 1000)

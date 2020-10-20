const text = "u r the best 😍"

let index = 0;
function writeText(){
    document.body.innerText = text.slice(0, index);

    index++;

    if(index > text.length){
        index = 0;
    }

}
// writeText() every 3 seconds (3000 milliseconds):
setInterval(writeText, 100);
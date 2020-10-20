const btn = document.getElementById('btn');
const container = document.getElementById('container')

btn.addEventListener('click',()=>{
    createNotification();
})

function createNotification(){
    const blabla = document.createElement('div')
    blabla.innerText="u can do it";
    blabla.classList.add('toast')
    container.appendChild(blabla)

    setTimeout(()=>{
        blabla.remove();
    },3000)
}
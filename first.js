
const body = document.querySelector('body');

body.addEventListener('click',(e)=>{

    // need to create circle element
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = "Hii";

    const color = ['Red','blue','orange','grey','pink','aqua','brown','purple','yellow','white'];
    circle.style.backgroundColor = color[Math.floor(Math.random()*10)];

    circle.style.top = `${e.clientY-20}px`;
    circle.style.left = `${e.clientX-20}px`;

    body.append(circle);

    //to remove after animation, timeout run once while intervall runs infinite
    setTimeout(() => {
        circle.remove(); 
    }, 5000);
    

})

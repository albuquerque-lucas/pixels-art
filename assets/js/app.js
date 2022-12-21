const colorButton = document.querySelector('#button-random-color');

fetchColors();
generateBoard();
triggerButton(colorButton);






function triggerButton(button){
    button.addEventListener('click', ()=>{
        generateColors();
        fetchColors();
    })
}


function fetchColors (){

    const div2 = document.getElementById('color-1');
    const div3 = document.getElementById('color-2');
    const div4 = document.getElementById('color-3');


    div2.style.background = localStorage.getItem('colorOne');
    div3.style.background = localStorage.getItem('colorTwo');
    div4.style.background = localStorage.getItem('colorThree');

}


function generateColors (){

    const color1 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    const color2 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    const color3 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;


    localStorage.setItem('colorPalette', [color1, color2, color3]);

    localStorage.setItem('colorOne', color1);
    localStorage.setItem('colorTwo', color2);
    localStorage.setItem('colorThree', color3);

}

function generateBoard(){

    const board = document.getElementById('pixel-board');

    for(let i = 0; i < 5; i += 1){
        const line = document.createElement('div');
        line.classList.add('line');
        board.appendChild(line);


        for(let i = 0; i < 5; i +=1){
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            line.appendChild(pixel);
        }
    }

}


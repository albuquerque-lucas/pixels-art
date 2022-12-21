const colorButton = document.querySelector('#button-random-color');
const colorList = document.querySelectorAll('.color');

generateInitialColors(colorList);
fetchColors();
generateBoard();
colorSelection();
triggerButton(colorButton);




function generateInitialColors(list){

    const initColors = ['rgb(0, 0, 0)', 'red', 'green', 'blue'];

    for(let i = 0; i < list.length; i += 1){

        list[i].style.backgroundColor = initColors[i];

    }

}

function triggerButton(button){
    button.addEventListener('click', ()=>{
        generateColors();
        fetchColors();
    })
}


function fetchColors (){

    const div1 = document.getElementById('color-0');
    const div2 = document.getElementById('color-1');
    const div3 = document.getElementById('color-2');
    const div4 = document.getElementById('color-3');


    div1.style.background = localStorage.getItem('colorZero');
    div2.style.background = localStorage.getItem('colorOne');
    div3.style.background = localStorage.getItem('colorTwo');
    div4.style.background = localStorage.getItem('colorThree');

}


function generateColors (){

    const color0 = 'rgb(0, 0, 0)';
    const color1 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    const color2 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    const color3 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;


    localStorage.setItem('colorPalette', [color0, color1, color2, color3]);

    localStorage.setItem('colorZero', color0);
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


function colorSelection(){

    const board = document.querySelectorAll('.pixel');
    const palette = document.getElementsByClassName('color');

    let selected = 'black';

    console.log(palette[0])

    for(let i = 0; i < palette.length; i += 1){



        if(!palette[i].classList.contains('selected')){
            palette[0].classList.add('selected');
        }

        palette[i].addEventListener('click', event => {
            console.log(event.target);
            selected = palette[i].style.background;
            palette[i].classList.add('selected');
        })
    }



    for(let i = 0; i < board.length; i += 1){

        board[i].addEventListener('click', event => {
            event.target.style.background = selected;
        })

    }




}


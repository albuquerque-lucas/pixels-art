const colorButton = document.querySelector('#button-random-color');

const colorList = document.querySelectorAll('.color');

const colorPaletteDiv = document.querySelector('#color-palette');

const colorArray = ['black', 'red', 'green', 'blue'];

for(let i = 0; i < 4; i += 1){

    const colorPaletteItem = document.createElement('li');
    colorPaletteItem.classList.add('color');
    colorPaletteDiv.appendChild(colorPaletteItem);
    console.log(colorPaletteItem[i]);

}

let dives = document.querySelectorAll('.color');

for(let i = 0; i < 4; i += 1){
    dives[i].style.backgroundColor = colorArray[i];
}


generateInitialColors(colorList);
//fetchColors();
generateBoard();
colorSelection();
clearBoard();
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

    for(let i = 0; i < )

}


function generateColors (){

    const color0 = 'rgb(0, 0, 0)';
    const color1 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    const color2 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    const color3 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;


    localStorage.setItem('colorPalette', JSON.stringify([color0, color1, color2, color3]));

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
            pixel.style.backgroundColor = 'white';
            line.appendChild(pixel);
        }
    }

}


function colorSelection(){

    const board = document.querySelectorAll('.pixel');
    const palette = document.querySelectorAll('.color');

    let selectedColor = 'black';


    palette[0].classList.add('selected');

    for(let i = 0; i < palette.length; i += 1){


        palette[i].addEventListener('click', event => {

        if(!palette[i].classList.contains('selected')){
            for(let j = 0; j < palette.length; j += 1){
                if(palette[j].classList.contains('selected')){
                    palette[j].classList.remove('selected');
                }
            }
            palette[i].classList.add('selected');
        }

        selectedColor = palette[i].style.backgroundColor;
    })
        }



    for(let i = 0; i < board.length; i += 1){

        board[i].addEventListener('click', event => {
            event.target.style.backgroundColor = selectedColor;
        })

    }




}

function clearBoard(){

    const clearButton = document.querySelector('#clear-board');
    const pixels = document.querySelectorAll('.pixel');
    const lines = document.querySelectorAll('.line');
    
    clearButton.addEventListener('click', event => {

        for(let i = 0; i < pixels.length; i += 1){

            pixels[i].style.backgroundColor = 'white';

        }

        for(let i = 0; i < lines.length; i += 1){

            lines[i].style.backgroundColor = 'white';

        }

    })

}


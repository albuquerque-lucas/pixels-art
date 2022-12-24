
createPalette();
triggerColorButton();
fetchColors();
generateBoard();
colorSelection();
clearBoard();

function createPalette(){
    const colorPaletteDiv = document.querySelector('#color-palette');
    const colorArray = ['black', 'red', 'green', 'blue'];
    const paletteLength = 4;

    for(let i = 0; i < paletteLength; i += 1){
        const colorPaletteItem = document.createElement('li');
        colorPaletteItem.classList.add('color');
        colorPaletteDiv.appendChild(colorPaletteItem);
    }
    
    const colorList = document.querySelectorAll('.color');
    for(let i = 0; i < paletteLength; i += 1){
        colorList[i].style.backgroundColor = colorArray[i];
    }


}

function triggerColorButton(){
    const colorButton = document.querySelector('#button-random-color');
    colorButton.addEventListener('click', ()=>{
        generateColors();
    })
}

function generateColors (){
    const paletteList = document.querySelectorAll('.color');
    const paletteArray = [];

    for(let i = 0; i < paletteList.length; i += 1){
        if(i === 0){
            paletteList[i].style.backgroundColor = 'black';
        } else{
            const randomRGBCode = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            paletteList[i].style.backgroundColor = randomRGBCode;
            paletteArray.push(randomRGBCode);
            localStorage.setItem('colorPalette', JSON.stringify(paletteArray));
        }
    }
}


function fetchColors (){

    const paletteList = document.querySelectorAll('.color');
    const palette = JSON.parse(localStorage.getItem('colorPalette'));
    const colorArray = ['black', 'red', 'green', 'blue'];

    if(palette !== null){

        for(let i = 0; i < palette.length; i += 1){

            paletteList[i + 1].style.backgroundColor = palette[i];

        }

    }
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


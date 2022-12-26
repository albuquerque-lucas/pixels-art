const colorPaletteContainer = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const generateBoardBtn = document.querySelector('#generate-board');
const paletteLength = 4;
const input = document.querySelector('#board-size');
for(let i = 0; i < 4; i += 1){
    const colorPaletteItem = document.createElement('li');
    colorPaletteItem.classList.add('color');
    colorPaletteContainer.appendChild(colorPaletteItem);
}


createPalette();
fetchColors();
triggerColorButton();
generateBoard();
colorSelection();
boardSize();
clearBoard();



function createPalette(){

    const colorArray = ['black', 'red', 'green', 'blue'];
    const secondArray = [];

    const colorList = document.querySelectorAll('.color');
    //console.log(colorList);

    if(localStorage.getItem('colorPalette') === null){
        localStorage.setItem('colorPalette', JSON.stringify(colorArray));
        let storedPalette = JSON.parse(localStorage.getItem('colorPalette'));

        for(let i = 0; i < paletteLength; i += 1){
                colorList[i].style.backgroundColor = storedPalette[i];
                secondArray.push(colorList[i].style.backgroundColor)
        }

    } else {
        let storedPalette = JSON.parse(localStorage.getItem('colorPalette'));
        for(let i = 0; i < paletteLength; i += 1){
                colorList[i].style.backgroundColor = storedPalette[i];
    }
    }
}


function triggerColorButton(){
    const colorButton = document.querySelector('#button-random-color');
    colorButton.addEventListener('click', ()=>{
        fetchColors();
        generateColors();
    })
}

function generateColors (){

    const paletteList = document.querySelectorAll('.color');
    const paletteArray = [];

    for(let i = 0; i < paletteList.length; i += 1){

        if(i === 0){
            paletteList[i].style.backgroundColor = 'black';
            paletteArray.push(paletteList[i].style.backgroundColor);

        } else{

            const randomRGBCode = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

            paletteList[i].style.backgroundColor = randomRGBCode;
            paletteArray.push(randomRGBCode);


        }
    }

    localStorage.setItem('colorPalette', JSON.stringify(paletteArray));
}

function fetchColors (){

    const paletteList = document.querySelectorAll('.color');
    const palette = JSON.parse(localStorage.getItem('colorPalette'));

    for(let i = 0; i < palette.length; i += 1){
        paletteList[i].style.backgroundColor = palette[i];
    }
}

function generateBoard(){

    const board = document.getElementById('pixel-board');

    if(localStorage.getItem('boardSize') === null){
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
    } else{
        let storedSize = localStorage.getItem('boardSize');
        for(let i = 0; i < storedSize; i += 1){
            const line = document.createElement('div');
            line.classList.add('line');
            board.appendChild(line);
    
    
            for(let i = 0; i < storedSize; i +=1){
                const pixel = document.createElement('div');
                pixel.classList.add('pixel');
                line.appendChild(pixel);
            }
        }
    }



        const pixel = document.querySelectorAll('.pixel');

        for(let i = 0; i < pixel.length; i += 1){
            if(localStorage.getItem('pixelBoard') === null){

                pixel[i].style.backgroundColor = 'white';

            } else{
                const storedPalette = JSON.parse(localStorage.getItem('pixelBoard'));
                if(storedPalette[i] === null){
                    pixel[i].style.backgroundColor = 'white';
                } else{
                    pixel[i].style.backgroundColor = storedPalette[i];
                }

            }
        }

    }





function colorSelection(){

    const pixel = document.querySelectorAll('.pixel');
    const palette = document.querySelectorAll('.color');
    let selectedColor = 'black';

    palette[0].classList.add('selected');

    for(let i = 0; i < palette.length; i += 1){

// ADICIONA E REMOVE CLASSE SELECTED
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


// APLICA A COR SELECIONADA AO PIXEL E SALVA OS PIXELS

let pixelSaving = [];

    for(let i = 0; i < pixel.length; i += 1){

        pixel[i].addEventListener('click', event => {
            event.target.style.backgroundColor = selectedColor;


            let boardItem = document.querySelectorAll('.pixel')
            boardItem.forEach(pixel => {
                pixelSaving.push(pixel.style.backgroundColor);


            })
            localStorage.setItem('pixelBoard', JSON.stringify(pixelSaving));
            pixelSaving = [];
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

        localStorage.removeItem('pixelBoard');

    })

}

function boardSize(){
    generateBoardBtn.addEventListener('click', event => {

        let parameter = input.value;

        if(input.value === null || input.value === ''){
            alert('Board inválido!');
        } else if(input.value > 50){
            parameter = 50;
            newPixelBoard(parameter);
        } else if(input.value < 5){
            parameter = 5;
            newPixelBoard(parameter);
        } else{
            newPixelBoard(parameter);
        }

})

}

function newPixelBoard(parametro){
    pixelBoard.innerHTML = '';

    for(let i = 0; i < parametro; i += 1){
        const line = document.createElement('div');
        line.classList.add('line');
        pixelBoard.appendChild(line);

        for(let i = 0; i < parametro; i +=1){
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            line.appendChild(pixel);
        }
    }


let pixels = document.querySelectorAll('.pixel');


for(let i = 0; i < pixels.length; i += 1){

    pixels[i].style.backgroundColor = 'white';


}

// pixels.forEach(pixel => {
//         pixel.style.backgroundColor = 'white';
    

// })

localStorage.setItem('boardSize', parametro);
colorSelection();
}

const colorPaletteContainer = document.querySelector('#color-palette');
const paletteLength = 4;

for(let i = 0; i < 4; i += 1){
    const colorPaletteItem = document.createElement('li');
    colorPaletteItem.classList.add('color');
    colorPaletteContainer.appendChild(colorPaletteItem);
}

// window.onload = () => {
//     const pixels = document.querySelectorAll('.pixel');
//     const storedPixels = JSON.parse(localStorage.getItem('pixelBoard'));
    
//     for(let i = 0; i < pixels.length; i += 1){

//         if(localStorage.getItem('pixelBoard') === null){
//             generateBoard();
//             break;
//         } else{
//             //pixels[i].style.backgroundColor = storedPixels[i];
//             console.log('oi');
//         }



//     }
// }


createPalette();
fetchColors();
triggerColorButton();
generateBoard();
colorSelection();
clearBoard();

function createPalette(){

    const colorArray = ['black', 'red', 'green', 'blue'];
    const secondArray = [];

    const colorList = document.querySelectorAll('.color');
    //console.log(colorList);

    if(localStorage.getItem('colorPalette') === null){
        localStorage.setItem('colorPalette', JSON.stringify(colorArray));
        let recoveredPalette = JSON.parse(localStorage.getItem('colorPalette'));

        for(let i = 0; i < paletteLength; i += 1){
                colorList[i].style.backgroundColor = recoveredPalette[i];
                secondArray.push(colorList[i].style.backgroundColor)
        }

    } else {
        let recoveredPalette = JSON.parse(localStorage.getItem('colorPalette'));
        //console.log(recoveredPalette);

        for(let i = 0; i < paletteLength; i += 1){
                colorList[i].style.backgroundColor = recoveredPalette[i];
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


    console.log(palette);
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

        const pixel = document.querySelectorAll('.pixel');
        console.log(pixel);

        for(let i = 0; i < pixel.length; i += 1){
            if(localStorage.getItem('pixelBoard') === null){

                pixel[i].style.backgroundColor = 'white';

            } else{

                const storedPalette = JSON.parse(localStorage.getItem('pixelBoard'));
                pixel[i].style.backgroundColor = storedPalette[i];
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

    })

}

function fetchPixelBoard(){

    const pixels = document.querySelectorAll('.pixel');
    let pixelColorArray = [];

    pixels.forEach(pixel => {

        const color = pixel.style.backgroundColor;

        pixel.addEventListener('click', event =>{

        })

        pixelColorArray.push(color);
    })

}

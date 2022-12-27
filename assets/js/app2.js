const colorPalette = document.querySelector('#color-palette');
const buttonRandomColor = document.querySelector('#button-random-color');
const pixelBoard = document.querySelector('#pixel-board');
const boardSize = document.querySelector('#board-size');
const buttonGenerateBoard = document.querySelector('#generate-board');
const buttonClearBoard = document.querySelector('#clear-board');


window.onload = () => {

    createPalette(colorPalette, 4);
    createPixelBoard(pixelBoard, 5);
    paintPixelBoard();
    recoverPainting();

    buttonRandomColor.addEventListener('click', event => {
        const colors = document.querySelectorAll('.color');
        const colorArray = [];
        for(let i = 0; i < colors.length; i += 1){
            if(i === 0){
                colors[i].style.backgroundColor = 'black';
                colorArray.push(colors[i].style.backgroundColor);
            } else{
                const randomRGBCode = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;

                colors[i].style.backgroundColor = randomRGBCode;
                colorArray.push(colors[i].style.backgroundColor);
            }

        }
        localStorage.setItem('colorPalette', JSON.stringify(colorArray));
    })

    buttonGenerateBoard.addEventListener('click', event => {
        limit = boardSize.value;
        if(limit === null || limit === ''){
            alert('Board inválido!');
        } else if(limit < 5){
            pixelBoard.innerHTML = '';
            limit = 5;
            createPixelBoard(pixelBoard, limit);
        } else if(limit > 50){
            pixelBoard.innerHTML = '';
            limit = 50;
            createPixelBoard(pixelBoard, limit);
        } else{
            pixelBoard.innerHTML = '';
            createPixelBoard(pixelBoard, limit);
        }
    })
}



const createPalette = (palette, length) => {

    for(let i = 0; i < length; i += 1){
        const item = document.createElement('li');
        item.classList.add('color');
        palette.appendChild(item);
    }

    localStorage.setItem('sizePalette', length);
    const colors = document.querySelectorAll('.color');
    
    illuminatePalette(colors);
    selectColorFromPalette();
    }



const illuminatePalette = (paletteItems) => {

    const storedLength = parseInt(localStorage.getItem('sizePalette'));
    const initColors = ['black', 'red', 'green', 'blue'];
    const colorArray = [];

    for(let i = 0; i < paletteItems.length; i += 1){
        paletteItems[0].classList.add('selected');
        if(localStorage.getItem('colorPalette') === null){
            if(i < 4){
                paletteItems[i].style.backgroundColor = initColors[i];
                colorArray.push(paletteItems[i].style.backgroundColor);
            } else{
                const randomRGBCode = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;

                paletteItems[i].style.backgroundColor = randomRGBCode;
                colorArray.push(paletteItems[i].style.backgroundColor);
            }
        } else {
            if(i === 0){
                paletteItems[i].style.backgroundColor = 'black';
                colorArray.push(paletteItems[i].style.backgroundColor);
            } else{
                const reference = storedLength - 1;
                if(i <= reference){
                    const storedPalette = JSON.parse(localStorage.getItem('colorPalette'));
                    paletteItems[i].style.backgroundColor = storedPalette[i];
                    colorArray.push(storedPalette[i]);
                } else{
                    const randomRGBCode = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
                    paletteItems[i].style.backgroundColor = randomRGBCode;
                    colorArray.push(paletteItems[i].style.backgroundColor);
                }


                }
            }
        }
        localStorage.setItem('colorPalette', JSON.stringify(colorArray));

        return colorArray;

    }

const createPixelBoard = (container, number) => {

    if(localStorage.getItem('boardSize') === null){
        for(let i = 0; i < number; i += 1){
            const line = document.createElement('div');
            line.classList.add('line');
            container.appendChild(line);
    
    
            for(let i = 0; i < number; i +=1){
                const pixel = document.createElement('div');
                pixel.classList.add('pixel');
                pixel.style.backgroundColor = 'white';
                line.appendChild(pixel);
            }
        }
    }




}

const selectColorFromPalette = () => {
    const colors = document.querySelectorAll('.color');
    for(let i = 0; i < colors.length; i += 1){
        colors[i].addEventListener('click', event => {
            if(!event.target.classList.contains('selected')){
                for(let j = 0; j < colors.length; j += 1){
                    if(colors[j].classList.contains('selected')){
                        colors[j].classList.remove('selected');
                    }
                }
                event.target.classList.add('selected');
            }
        })
    }
}

const paintPixelBoard = () => {

    const pixels = document.querySelectorAll('.pixel');
    for(let i = 0; i < pixels.length; i += 1){
        pixels[i].addEventListener('click', event => {
            let selectedColor = document.querySelector('.selected');
            event.target.style.backgroundColor = selectedColor.style.backgroundColor;
            savePainting(pixels);
        })
    }

    buttonClearBoard.addEventListener('click', event => {
        for(let i = 0; i < pixels.length; i += 1){
            pixels[i].style.backgroundColor = 'white';
            localStorage.removeItem('pixelBoard');
        }


    })




}


const savePainting = item => {

    const pixelColorArray = [];

    for(let i = 0; i < item.length; i += 1){
        pixelColorArray.push(item[i].style.backgroundColor);

    }
    localStorage.setItem('pixelBoard', JSON.stringify(pixelColorArray));

}

const recoverPainting = () => {

    let recoveredPixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));
    const pixels = document.querySelectorAll('.pixel');

    if(localStorage.getItem('pixelBoard') !== null){
        for(let i = 0; i < pixels.length; i += 1){
            pixels[i].style.backgroundColor = recoveredPixelBoard[i];
    
        }
    }


}
window.onload = () => {

    iluminatePalette(createPalette(colorPalette, 4));
    createPixelBoard(pixelBoard, 5);
    
    buttonRandomColor.addEventListener('click', event => {
        const colors = document.querySelectorAll('.color');
        const colorArray = [];
        
        for(let i = 0; i < colors.length; i += 1){

            if(i === 0){
                colors[i].style.backgroundColor = 'rgb(0, 0, 0)';
                colorArray.push(colors[i].style.backgroundColor);
                console.log(colorArray);
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

const colorPalette = document.querySelector('#color-palette');
const buttonRandomColor = document.querySelector('#button-random-color');
const pixelBoard = document.querySelector('#pixel-board');
const boardSize = document.querySelector('#board-size');
const buttonGenerateBoard = document.querySelector('#generate-board');

const createPalette = (palette, length) => {

    for(let i = 0; i < length; i += 1){
        const item = document.createElement('li');
        item.classList.add('color');
        palette.appendChild(item);
    }

    const colors = document.querySelectorAll('.color');

    return colors;

    }



const iluminatePalette = (paletteItems) => {

    const initColors = ['black', 'red', 'green', 'blue'];
    const colorArray = [];

    for(let i = 0; i < paletteItems.length; i += 1){
        if(localStorage.getItem('colorPalette') === null){
            if(i < 4){
                paletteItems[i].style.backgroundColor = initColors[i];
                colorArray.push(paletteItems[i].style.backgroundColor);
            } else{
                const randomRGBCode = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;

                paletteItems[i].style.backgroundColor = randomRGBCode;
                colorArray.push(paletteItems[i].style.backgroundColor);
            }
            console.log(colorArray);
        } else {
            if(i === 0){
                paletteItems[i].style.backgroundColor = 'black';
                colorArray.push(paletteItems[i].style.backgroundColor);
            } else{
                const storedPalette = JSON.parse(localStorage.getItem('colorPalette'));
                paletteItems[i].style.backgroundColor = storedPalette[i];
                colorArray.push(paletteItems[i].style.backgroundColor);
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
                line.appendChild(pixel);
            }
        }
    }


}
window.onload = () => {

    const btnGenerateColors = document.querySelector('#button-random-color');
    const colorList = document.querySelectorAll('.color');
    fetchSavedColors(colorList);
    triggerPaletteButton(btnGenerateColors, colorList);


}

const triggerPaletteButton = (button, target) => {

    button.addEventListener('click', event => {
        event.preventDefault();
        generateColors(target);
    });

}

const generateColors = target => {

        const colorZero = 'rgb(0, 0, 0)';
        const colorOne = `rgb(${generateRGBNumber()})`;
        const colorTwo = `rgb(${generateRGBNumber()})`;
        const colorThree = `rgb(${generateRGBNumber()})`;

        const colorPalette = [colorZero, colorOne, colorTwo, colorThree];
        const colorPalette2 = JSON.stringify(colorPalette);


        localStorage.setItem('colorPalette', colorPalette);
        localStorage.setItem('colorGeneratedZero', colorZero);
        localStorage.setItem('colorGeneratedOne', colorOne);
        localStorage.setItem('colorGeneratedTwo', colorTwo);
        localStorage.setItem('colorGeneratedThree', colorThree);

        for(let i = 1; i < target.length; i += 1){
            target[i].style.backgroundColor = colorPalette[i];
        }
}

const generateRGBNumber = () => {

    let colorIndexOne = Math.floor(Math.random() * 255);
    let colorIndexTwo = Math.floor(Math.random() * 255);
    let colorIndexThree = Math.floor(Math.random() * 255);

    const rgbCode = `${colorIndexOne}, ${colorIndexTwo}, ${colorIndexThree}`;
    const rgbCode2 = JSON.stringify(colorIndexOne, colorIndexTwo, colorIndexThree);

    let stringifiedOne = JSON.stringify(colorIndexOne);
    let stringifiedTwo = JSON.stringify(colorIndexTwo);
    let stringifiedThree = JSON.stringify(colorIndexThree);

    const final = `${stringifiedOne}, ${stringifiedTwo}, ${stringifiedThree}`;

    return rgbCode;
}

const fetchSavedColors = target => {

    const colorZero = localStorage.getItem('colorGeneratedZero');
    const colorOne = localStorage.getItem('colorGeneratedOne');
    const colorTwo = localStorage.getItem('colorGeneratedTwo');
    const colorThree = localStorage.getItem('colorGeneratedThree');

    const colorPalette = localStorage.getItem('colorPalette');

    target[0].style.backgroundColor = colorZero;
    target[1].style.backgroundColor = colorOne;
    target[2].style.backgroundColor = colorTwo;
    target[3].style.backgroundColor = colorThree;


}
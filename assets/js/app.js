window.onload = () => {

    const btnGenerateColors = document.querySelector('#button-random-color');
    const colorList = document.querySelectorAll('.color');
    triggerPaletteButton(btnGenerateColors, colorList);
    fetchSavedColors(colorList);

}

const triggerPaletteButton = (button, target) => {

    button.addEventListener('click', event => {
        generateColors(target);
    });

}

const generateColors = target => {

        const colorZero = 'rgb(0, 0, 0)';
        const colorOne = `rgb(${generateRGBNumber()})`;
        const colorTwo = `rgb(${generateRGBNumber()})`;
        const colorThree = `rgb(${generateRGBNumber()})`;

        const colorArray = [colorZero, colorOne, colorTwo, colorThree];


        localStorage.setItem('colorPalette', colorArray);
        localStorage.setItem('colorGeneratedZero', colorZero);
        localStorage.setItem('colorGeneratedOne', colorOne);
        localStorage.setItem('colorGeneratedTwo', colorTwo);
        localStorage.setItem('colorGeneratedThree', colorThree);


        for(let i = 1; i < target.length; i += 1){
            target[i].style.backgroundColor = colorArray[i];
        }
}

const generateRGBNumber = () => {

    let colorIndexOne = Math.floor(Math.random() * 255);
    let colorIndexTwo = Math.floor(Math.random() * 255);
    let colorIndexThree = Math.floor(Math.random() * 255);
    const rgbCode = [colorIndexOne, colorIndexTwo, colorIndexThree].toString();

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
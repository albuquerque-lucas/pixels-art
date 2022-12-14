window.onload = () => {

    const btnGenerateColors = document.querySelector('#btn-colors');
    const colorList = document.querySelectorAll('.list-container ul li');
    generateColors(btnGenerateColors, colorList);
    fetchSavedColors(colorList);

}

const generateColors = (button, target) => {

    button.addEventListener('click', event => {

        let colorOne = `rgb(${generateRGBNumber()})`;
        let colorTwo = `rgb(${generateRGBNumber()})`;
        let colorThree = `rgb(${generateRGBNumber()})`;

        localStorage.setItem('colorGeneratedOne', colorOne);
        localStorage.setItem('colorGeneratedTwo', colorTwo);
        localStorage.setItem('colorGeneratedThree', colorThree);

        target[1].style.backgroundColor = colorOne;
        target[2].style.backgroundColor = colorTwo;
        target[3].style.backgroundColor = colorThree;

        console.log(localStorage);

    })

}

const generateRGBNumber = () => {

    let colorIndexOne = Math.floor(Math.random() * 255);
    let colorIndexTwo = Math.floor(Math.random() * 255);
    let colorIndexThree = Math.floor(Math.random() * 255);
    const rgbCode = [colorIndexOne, colorIndexTwo, colorIndexThree].toString();

    return rgbCode;
}

const fetchSavedColors = target => {

    const colorOne = localStorage.getItem('colorGeneratedOne');
    const colorTwo = localStorage.getItem('colorGeneratedTwo');
    const colorThree = localStorage.getItem('colorGeneratedThree');

    target[1].style.backgroundColor = colorOne;
    target[2].style.backgroundColor = colorTwo;
    target[3].style.backgroundColor = colorThree;


}
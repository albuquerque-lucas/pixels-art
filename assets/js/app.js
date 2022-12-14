window.onload = () => {

    const btnGenerateColors = document.querySelector('#btn-colors');
    const colorList = document.querySelectorAll('.list-container ul li');
    generateColors(btnGenerateColors, colorList);

}

const generateColors = (button, target) => {



    button.addEventListener('click', event => {

        let colorOne = `rgb(${generateRGBNumber()})`;
        let colorTwo = `rgb(${generateRGBNumber()})`;
        let colorThree = `rgb(${generateRGBNumber()})`;

        target[1].style.backgroundColor = colorOne;
        target[2].style.backgroundColor = colorTwo;
        target[3].style.backgroundColor = colorThree;

        console.log("Clicado!");

    })

}

const generateRGBNumber = () => {

    let colorIndexOne = Math.floor(Math.random() * 255);
    let colorIndexTwo = Math.floor(Math.random() * 255);
    let colorIndexThree = Math.floor(Math.random() * 255);
    const rgbCode = [colorIndexOne, colorIndexTwo, colorIndexThree].toString();

    return rgbCode;
}
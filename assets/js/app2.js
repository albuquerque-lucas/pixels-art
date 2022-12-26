const header = document.getElementById('header');

const title = document.createElement('h1');
title.setAttribute('id', 'title');
title.innerHTML = 'Paleta de Cores';
header.appendChild(title);

const palette = document.createElement('ul');
palette.setAttribute('id', 'color-palette');
header.appendChild(palette);

for(let i = 0; i < 4; i += 1){
    let color = document.createElement('li');
    color.classList.add('color');
    palette.appendChild(color);
}

const InitColors = ['black', 'red', 'green', 'blue'];
const colors = document.getElementsByClassName('color');

for(let i = 0; i < 4; i += 1){
    if(localStorage.getItem('colorPalette') === null){
        colors[i].style.backgroundColor = InitColors[i];
        console.log('nulo');
    } else {
        const recoveredPalette = JSON.parse(localStorage.getItem('colorPalette'));
        colors[i].style.backgroundColor = recoveredPalette[i];
    }
}

const buttonRandomColor = document.createElement('button');
buttonRandomColor.setAttribute('id', 'button-random-color');
buttonRandomColor.innerText = 'Cores aleatórias';
header.appendChild(buttonRandomColor);

buttonRandomColor.addEventListener('click', event => {
    const paletteArray = [];
    for(let i = 0; i < 4; i += 1){
        if(i === 0){
            colors[i].style.backgroundColor = 'black';
        } else{
            const generatedColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            colors[i].style.backgroundColor = generatedColor;
        }
        paletteArray.push(colors[i].style.backgroundColor);
    }
    localStorage.setItem('colorPalette', JSON.stringify(paletteArray));
});
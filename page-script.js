function createGrid(size) {
    if (document.querySelector('.container') != null)
        body.removeChild(document.querySelector('.container'));
    const container = document.createElement('div');
    body.appendChild(container);
    container.classList.add('container')
    for (let i = 0; i < size; i++)
    {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('line');
        for (let j = 0; j < size; j++)
        {
            const item = document.createElement('div');
            div.appendChild(item);
            item.classList.add('item');
        }
    }
    const grids = document.querySelectorAll('.item');
    addItemEvent(grids);
}

function addItemEvent(grids) {
    grids.forEach((grid) => {
        grid.addEventListener('mouseenter', function(e){
            let alpha = 0;
            if (e.target.style.background !== '')
                alpha = parseFloat(e.target.style.background.slice(-4, -1));
            e.target.style.background = addAlphaValue(alpha);
        });
    });
}

function getRandomValue(){
    let num = (Math.floor(Math.random() * 255)) + 1;
    return num;
}

function getRandomColor(){
    return ('rgb(' + getRandomValue() + ', ' + getRandomValue() + ', ' + getRandomValue() + ')');
}

function addAlphaValue(currentAlphaValue){
    const blackColor = 'rgba(0, 0, 0, ';
    let alpha = currentAlphaValue;
    if (currentAlphaValue < 1)
    {
        alpha += 0.1;
        return (blackColor + alpha.toFixed(1) + ')')
    }
    else return ('rgb(0, 0, 0)');
}

let size = 4;
const body = document.querySelector('body');
const btnSize = document.querySelector('#btn-size');

createGrid(size);

btnSize.addEventListener('click', () => {
    size = parseInt(prompt("Input Grid Size (max 100):"));
    if (size > 100) size = 100;
    createGrid(size);
})
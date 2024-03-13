//COLLEGARE IL BOTTONE PER FORMARE LA GRIGLIA
const createGrid = document.querySelector('.button');
//COLLEGARE LA SELECT
const inputElementDom = document.querySelector('.input')

//CREARE L'EVENTO SU QUEL BOTTONE
createGrid.addEventListener('click', function () {

    //CREARE LA GRIGLIA
    //CREARE LE CELLE
    const gridElement = document.querySelector('.grid');
    gridElement.innerHTML = ''
    let size;

    //PER OGNI DIFFICOLà GESTIRE LE CELLE PRESENTI IN MANIERA ORDINATA
    if (inputElementDom.value === 'easy') {
        size = 10;
        gridElement.classList.add('easy')
    } else if (inputElementDom.value === 'medium') {
        size = 9;
        gridElement.classList.add('medium')
    } else {
        size = 7;
        gridElement.classList.add('hard')
    }
    const numberOfCelles = size * size;

   

    //LEGGERE LE CELLE SINGOLARMENTE 
    for (let i = 0; i < numberOfCelles; i++) {
        const num = i + 1;

        // AGGIUNGERE LE CELLE AL DOM
        const cellElement = document.createElement('div')
        cellElement.className = 'cell'
        cellElement.innerHTML = num
        gridElement.append(cellElement)

        // AD OGNI CLICK LO SFONDO DEVE ESSERE AZZURRO
        cellElement.addEventListener('click', function () {
            cellElement.classList.toggle('bg-lightblue')
            console.log(num);
        })

    }


})






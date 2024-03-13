//COLLEGARE IL BOTTONE PER FORMARE LA GRIGLIA
const createGrid = document.querySelector('.button');

//CREARE L'EVENTO SU QUEL BOTTONE
createGrid.addEventListener('click', function () {

    //CREARE LA GRIGLIA
    //CREARE LE CELLE
    const gridElement = document.querySelector('.grid');
    const size = 10;
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

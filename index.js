(()=>{
    // variables
    const container = document.createElement("div")
    const cardsWrapper = document.createElement("div")
    
    container.classList.add("container")
    cardsWrapper.classList.add("text-center")
    
    let values = crateValues(8)
    values = shuffleAndUpgrade(values)
    let cards = [[],[],[],[]]

    // creating values for card
    function crateValues(numOfValues){
        val = []
        j = 1
        for(i=1; i <= numOfValues; i++,j+=2){
            val[j] = i
            val[j-1] = i
        }
        return val
    }
    // shuffle and upgrade array to 2 dim array
    function shuffleAndUpgrade(arr){
        let j, temp;
        let f = 0;
        let arrDim = [[],[],[],[]]
        for(let i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        for(i= 0; i<4; i++){
            for(j=0; j<4; j++){
                arrDim[i][j] = arr[f]
                f++
            }
        }
        return arrDim; 
    }

    // grid with cards creating
    function gridCreate(grid, card, val){
        for(i=0; i<4; i++){
            let row = document.createElement("div")
            row.classList.add("row")
            for(j=0; j <4; j++){
                // creating columns and give them properties
                let col = document.createElement("div")
                col.classList.add("col")
                col.textContent = val[i][j]

                card[i][j] = col
                row.append(col)
            }
            grid.append(row)
        }
        
        return grid
    }



    addEventListener("DOMContentLoaded",()=>{
        document.body.append(container)
        container.append(cardsWrapper)
        gridCreate(cardsWrapper, cards, values)
        console.log(cards)
    })
})()
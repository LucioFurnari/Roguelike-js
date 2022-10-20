const MapContainer = document.querySelector(".map-container");
let tileData = {
    terrain:"",
    wall:"||"
}

let Tiles = [
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","||","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["||","||","||","||","||","","","T","","||","||","||","||","||","||","||","||","||","||","||","||","||","||","||",],
    ["x","x","x","x","x","x","x","@","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x",],
];

function createTiles() {
    while(MapContainer.firstChild){
        MapContainer.removeChild(MapContainer.firstChild);
    }
    console.log("probando");
    Tiles.map((column) => {
        column.map((row) => {
            let tileRow = document.createElement("div");
            tileRow.classList.add("tile");
            tileRow.textContent = row;
            MapContainer.appendChild(tileRow);
        })
    })
}

createTiles()

window.addEventListener("keydown",(event) => moveCharacter(event))



let iRow = 9;
let iCol = 7;

let jRow = 8
let jCol = 7;
// console.log(Tiles[6][7]);
function moveCharacter(e){
    console.log(e.key);
    switch (e.key) {
        case "ArrowUp":
            if(!detectObjet(jRow,7)){
            [Tiles[iRow][iCol],Tiles[jRow][7]] = [Tiles[jRow][7],Tiles[iRow][iCol]];
                
            iRow = iRow-1;
            jRow = jRow-1;
            // iCol= 7;
            createTiles();
            } else {
                return
            }
            break;
        case "ArrowDown":
            if(!detectObjet(jRow,7)){
            [Tiles[iRow][iCol],Tiles[jRow][jCol]] = [Tiles[jRow][jCol],Tiles[iRow][iCol]];
                
            // jRow = jRow+1;
            // iRow = iRow+1;
            
            // iCol= 7;
            createTiles();
            } else {
                return
            }
            break;
        default:
            break;
    }
};

function detectObjet(row,column) {
    switch (true) {
        case Tiles[row][column] == "||":
            return true;
        // case Tiles[row][column] == "T": 
        //     return false;
        default:
            break;
    }
}
const MapContainer = document.querySelector(".map-container");
let tileData = {
    terrain:"",
    wall:"||"
}
let iRow = 9;
let jRow = 9;
let iCol = 7;
let jCol = 7;

let Tiles = [
    ["","","","","","","","","",""," "," ","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","||","","","","","","","","","","",],
    ["","","","","","","","","","","","","","||","","","","","","","","","","",],
    ["","","","","","","","","","","","","","||","","","","","","","","","","",],
    ["","","","","","","","||","","","","","","||","","","","","","","","","","",],
    ["","","","","","","","","","","","","","||","","","","","","","","","","",],
    ["||","||","||","||","||","","","T","","||","||","||","||","||","||","||","||","||","||","||","||","||","||","||",],
    ["","","","","","","","@","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
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
            // if(row == "||"){
            //     tileRow.style.backgroundColor ="red"
            // }
            MapContainer.appendChild(tileRow);
        })
    })
}

createTiles()
window.addEventListener("keydown",(event) => moveCharacter(event))


function moveCharacter(e){
    console.log(e.key);
    switch (e.key) {
        case "ArrowUp":
            jRow = jRow-1;
            if(detectObjet(jRow,jCol)){
                jRow = iRow;
            } else {
                [Tiles[iRow][iCol],Tiles[jRow][iCol]] = [Tiles[jRow][iCol],Tiles[iRow][iCol]];
                iRow = iRow-1;
            }
            createTiles();
            break;
        case "ArrowDown":
            console.log(jRow);
            jRow = jRow + 1;
            if(detectObjet(jRow,jCol)){
                jRow = iRow;
            } else {
                [Tiles[iRow][iCol],Tiles[jRow][iCol]] = [Tiles[jRow][iCol],Tiles[iRow][iCol]];
                iRow = iRow+1;
            }
            createTiles();
            break;
        case "ArrowRight":
            jCol = jCol + 1;
            if(detectObjet(jRow,jCol)){
                jCol = iCol;
            } else {
                [Tiles[iRow][iCol],Tiles[jRow][jCol]] = [Tiles[jRow][jCol],Tiles[iRow][iCol]];
                iCol = iCol+1;
            }
            createTiles();
            break;
        case "ArrowLeft":
            jCol = jCol - 1;
            if(detectObjet(jRow,jCol)){
                jCol = iCol;
            } else {
                [Tiles[iRow][iCol],Tiles[jRow][jCol]] = [Tiles[jRow][jCol],Tiles[iRow][iCol]];
                iCol = iCol-1;
            }
            createTiles();
            break;
        default:
            break;
    }
};

function detectObjet(row,column) {
    switch (true) {
        case Tiles[row] == undefined:
            return true
        case Tiles[row][column] == undefined:
            return true;
        case Tiles[row][column] == "||":
            return true
        default:
            break;
    }
}
const MapContainer = document.querySelector(".map-container");
let tileData = {
    terrain:"",
    wall:"||"
}

let Tiles = [
    ["","","","","","","","","",""," "," ","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
    ["","","","","","","","||","","","","","","","","","","","","","","","","",],
    ["","","","","","","","","","","","","","","","","","","","","","","","",],
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
            MapContainer.appendChild(tileRow);
        })
    })
}

createTiles()

window.addEventListener("keydown",(event) => moveCharacter(event))



let iRow = 9;
let jRow = 9;
let iCol = 7;
let jCol = 7;

// console.log(Tiles[6][7]);
function moveCharacter(e){
    console.log(e.key);
    switch (e.key) {
        case "ArrowUp":
            console.log(iRow);
            // if(!detectObjet(iRow,iCol)){
            jRow = jRow-1;
            if(Tiles[jRow] == undefined){
                jRow = iRow;
            } else {
                [Tiles[iRow][iCol],Tiles[jRow][iCol]] = [Tiles[jRow][iCol],Tiles[iRow][iCol]];
                let colorTile = MapContainer.children;
                console.log(colorTile);
                colorTile.style.backgroundColor = "red"
                iRow = iRow-1;
            }
            // iCol= 7;
            console.log(iRow);
            createTiles();
            // } else {
                return
            
            break;
        case "ArrowDown":
            console.log(jRow);
            
            // if(!detectObjet(jRow,7)){
            jRow = jRow + 1;
            if(Tiles[jRow] == undefined){
                jRow = iRow;
            } else {
            [Tiles[iRow][iCol],Tiles[jRow][iCol]] = [Tiles[jRow][iCol],Tiles[iRow][iCol]];
            iRow = iRow+1;
            }
            
            createTiles();
        
            // else {
            //     return
            // };
            break;
        case "ArrowRight":
            jCol = jCol + 1;
            if(Tiles[jCol] == undefined){
                jCol = iCol;
            } else {
            [Tiles[iRow][iCol],Tiles[jRow][jCol]] = [Tiles[jRow][jCol],Tiles[iRow][iCol]];
            iCol = iCol+1;
            }
            createTiles();
            break;
        case "ArrowLeft":
            jCol = jCol - 1;
            if(Tiles[jCol] == undefined){
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
        case Tiles[row][column] == "||":
            return true;
        // case Tiles[row][column] == "T": 
        //     return false;
        default:
            break;
    }
}
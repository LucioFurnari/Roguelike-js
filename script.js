const mapContainer = document.querySelector(".map-container");

const mapArray = [
    "                        ",
    "^^^^^^^^^^^^^^^^^^^^^^^^",
    "^^^^^^^^^^^^^^^^^^^^^^^^",
    "^^^^^^^^^^^^^^^^^^^^^^^^",
    " ^^^|||||||||||||||||||^",
    " ^^^|@@__hI|L|  V!V  R|^",
    "/^^^|_____I|+|       R|^",
    "+^^^|dD______| %lll%  |^",
    "-^^^|||||==__| %%%%% y|^",
    "*^^^^^^^||||+| sHHHs ||^",
    " ^^^^^^^#$g| | %%%%% |^^",
    "+^^^^^^^#..+ |E      |^^",
    "-^^^^^^^#Z.| |T   iii|^^",
    "*^^^^^^^#W.| ||||+||||^^",
    " ^^^^^^^#|||  &&  y u|^^",
    " ^^^^^^^^|           ||^",
    " ^^^^^^^^|RRR   y    <|^",
    " ^^^^^^^^|||||+||||||||^",
    " ^^^^^^^^##m...Y.q#^^^^^",
    " ^^^^^^^^^#m.....U#^^^^^",
    " ^^^^^^^^^##zzzz.N#^^^^^",
    " ^^^^^^^^^^########^^^^^",
    " ^^^^^^^^^^^^^^^^^^^^^^^",
    " ^^^^^^^^^^^^^^^^^^^^^^^"
];
function createMap(){
    for(let i=0;i<mapArray.length;i++){
        for(let j=0;j<mapArray[i].length;j++){
            let tile = document.createElement("div");
            tile.classList.add("tile");
            tile.textContent = `${mapArray[i][j]}`
            mapContainer.appendChild(tile);
        }
    }
};

createMap()
let initialPosition = 0;
let contRow = 0;
let char = 0;

const tileArray = document.querySelectorAll(".tile");
tileArray[initialPosition].textContent = "@"

function movePlayer(move){
    let newPosition = 0;
    switch (move) {
        case "ArrowUp":
            tileArray[initialPosition].textContent = mapArray[contRow][char]
            contRow = contRow > 0 ? contRow - 1 : contRow;
            if(!detectObjet()) {
                contRow = contRow + 1;
                newPosition = (24*contRow)+char
                tileArray[newPosition].textContent = "@";
            } else {
                newPosition = (24*contRow)+char
                tileArray[newPosition].textContent = "@"
                initialPosition = newPosition;
            }
            break;
        case "ArrowDown":
            tileArray[initialPosition].textContent = mapArray[contRow][char]
            contRow = contRow < 23 ? contRow + 1 : contRow;
            if(!detectObjet()){
                contRow = contRow - 1;
                newPosition = (24*contRow)+char;
                tileArray[newPosition].textContent = "@"
            } else {
                newPosition = (24*contRow)+char
                tileArray[newPosition].textContent = "@"
                initialPosition = newPosition;
            }
            break;
        case "ArrowLeft":
            tileArray[initialPosition].textContent = mapArray[contRow][char]
            char = char < 23 && char > 0 ? char - 1 : 0;
            if(!detectObjet()){
                char = char + 1;
                newPosition = (24*contRow)+char;
                tileArray[newPosition].textContent = "@"
            } else {
                newPosition = (24*contRow)+char;
                tileArray[newPosition].textContent = "@"
                initialPosition = newPosition;
            }
            break;
        case "ArrowRight":
            tileArray[initialPosition].textContent = mapArray[contRow][char]
            char = char < 23 ? char + 1 : 0;
            if(!detectObjet()){
                char = char - 1;
                newPosition = (24*contRow)+char;
                tileArray[newPosition].textContent = "@";
            } else {
                newPosition = (24*contRow)+char;
                tileArray[newPosition].textContent = "@";
                initialPosition = newPosition;
            }
            break;
        default:
            break;
    }
};

function detectObjet() {
    switch (true) {
        // case mapArray[contRow] == undefined || mapArray[contRow][char] == undefined:
        //     return false
        //     break;
        case mapArray[contRow][char] == "|":
            return false
        default:
            return true
            break;
    }
}

window.addEventListener("keydown",(e) => {
    const {key} = e;
    switch (key) {
        case "ArrowUp":
            movePlayer(key);
            break;
        case "ArrowDown":
            movePlayer(key);
            break;
        case "ArrowLeft":
            movePlayer(key);
            break;
        case "ArrowRight":
            movePlayer(key);
            break;
        default:
            break;
    }
})
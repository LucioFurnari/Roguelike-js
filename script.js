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

function movePlayer(initial, x,y,move){
    let newPosition = 0;
    switch (move) {
        case "ArrowUp":
            tileArray[initialPosition].textContent = mapArray[contRow][char]
            contRow = contRow > 0 ? contRow - 1 : contRow;
            newPosition = (24*contRow)+char
            if(tileArray[newPosition] != undefined){
                tileArray[newPosition].textContent = "@"
                initialPosition = newPosition;
            }
            break;
        case "ArrowDown":
            tileArray[initialPosition].textContent = mapArray[contRow][char]
            contRow = contRow < 24 ? contRow + 1 : contRow;
            newPosition = (24*contRow)+char
            if(tileArray[newPosition] != undefined){
                tileArray[newPosition].textContent = "@"
                initialPosition = newPosition;
            }
            break;
        case "ArrowLeft":
            tileArray[initialPosition].textContent = mapArray[contRow][char]
            char = char > 0 ? char - 1 : 0;
            console.log(char);
            newPosition = (24*contRow)+char-1;
            console.log(newPosition);
            if(tileArray[newPosition] != undefined){
                tileArray[newPosition].textContent = "@"
                initialPosition = newPosition;
            }
            break;
        case "ArrowRight":
            tileArray[initialPosition].textContent = mapArray[contRow][char]
            char = char < 23 ? char + 1 : 0;
            newPosition = (24*contRow)+char
            if(tileArray[newPosition] != undefined){
                tileArray[newPosition].textContent = "@"
                initialPosition = newPosition;
            }
            break;
        default:
            break;
    }
};

window.addEventListener("keydown",(e) => {
    const {key} = e;
    console.log(key);
    switch (key) {
        case "ArrowUp":
            movePlayer(initialPosition,0,24,key);
            break;
        case "ArrowDown":
            movePlayer(initialPosition,0,24,key);
            break;
        case "ArrowLeft":
            movePlayer(initialPosition,1,0,key);
            break;
        case "ArrowRight":
            movePlayer(initialPosition,1,0,key);
            break;
        default:
            break;
    }
})
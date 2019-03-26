

var box = document.getElementById('box');

box.addEventListener("click",boxClick);

var flag = 0;
function boxClick(){
    if(flag === 0) {
        this.style.backgroundColor = generateColor();
    } else if(flag === 1) {
        this.style.borderRadius = "15px";
    } else if(flag === 2) {
        this.style.background = "linear-gradient(orange,red)";
    } else if(flag === 3) {
        this.style.boxShadow = "0 0 10px gray";
    } else if(flag === 4) {
        this.style.borderRadius = "50%";
    }
    if(flag === 5){
        flag = 0;
        this.style.background = "red";
        this.style.borderRadius = "0px";
        this.style.boxShadow = "none";
    } else {
        flag++;
    }
}

function generateColor(){
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    if(color.length < 7){
        generateColor();
    }
    return color;
}




var squers = document.querySelectorAll(".color");
var check = document.querySelector("#check");
var mainColor = document.querySelector("#mainColor");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var link = document.querySelector("#link");
var colors = generateRandomColor(6);


mainColor.textContent = generateColor();
start();
link.addEventListener("click" , function(){
    check.textContent = "";
    colors = generateRandomColor(6);
    start();
    mainColor.textContent = generateColor();
});

function start(){
    for(let i=0; i<colors.length; i++){
        squers[i].setAttribute("style" , "background-color:"+colors[i]);
        squers[i].addEventListener("click" , function(){
            var color = squers[i].getAttribute("style");
            if(color === "background-color:"+mainColor.textContent){
                check.textContent = "CORRECT";
                chanageColor(mainColor.textContent);
            }else{
                check.textContent = "TRY AGAIN";
                squers[i].setAttribute("style" , "visibility:hidden");
            }
        });
    }
}
function chanageColor(color){
    for(let i=0; i<squers.length; i++){
        squers[i].setAttribute("style" , "visibility:visible")
        squers[i].style.background = color ;
    }
}
function generateColor(){
    var random = Math.floor(Math.random() * colors.length );
    return colors[random];
}
function generateRandomColor(num){
    
    var array = [];
    for(let i=0; i<num; i++){
        array[i] = randomColor();
    }
    return array ;
}
function randomColor(){
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var rgb =  "RGB("+red+","+green+","+blue+")";
    return rgb ;
}

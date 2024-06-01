//Declaration
let personne = document.querySelector("img");
let jumpBtn = document.querySelector("#jump");
let ball = document.querySelector(".ball");
let startBtn = document.querySelector("#start");

//main
    //jump when pressing jump btn
    jumpBtn.addEventListener("click",jumping);
    //ball start moving when pressing start btn
    startBtn.addEventListener("click",ballStartMoving);
//functions 
function jumping(){
    console.log("clicked");
    personne.classList.add("saute");
    let ineterval = setInterval(() => {

        if(personne.classList.contains("saute")){
            let Dellay = setTimeout(()=>{
                personne.classList.remove("saute");
            },496);
        }
    }, 1);
}
function ballStartMoving(){
    console.log("hi am start button");
    ball.classList.add("bouge")
}
//tkhrbich
setInterval(()=>{

    let stPerssone = window.getComputedStyle(personne)
    let matrixP = new WebKitCSSMatrix(stPerssone.transform);
    let translatYP = matrixP.m42;
   

    let stBall = window.getComputedStyle(ball);
    let matrixB = new WebKitCSSMatrix(stBall.transform);
    let translatYB = matrixB.m41;
    if(translatYP > -12 && translatYB < -644 ){
        alert("vous aves perdu")

    }

    


},100)
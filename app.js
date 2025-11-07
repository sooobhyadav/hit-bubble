var timer = 60;
var score = 0;
var hitrn = 0;




function increaseScore(){
    score +=10;
    document.querySelector("#scoreVal").textContent = score;
}

function getHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makebubble(){
    let ball = "";

for(let i=1;i<=171;i++){
    let rn = Math.floor(Math.random()*10)
    ball += `<div class="bubble">${rn}</div>`
}
document.querySelector(".pbottom").innerHTML = ball;
}

 function runTimer(){
    var inTimer = setInterval(function(){
        if(timer > 0){
            timer--;
        document.querySelector("#timerVal").textContent = timer
        }else{
            clearInterval(inTimer);
            document.querySelector(".pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)

 }

 document.querySelector(".pbottom").addEventListener("click", function(dets){
    var clickNum = Number(dets.target.textContent)
    console.log(clickNum);
    if(clickNum === hitrn){
        increaseScore();
        makebubble();
        getHit();

    }
 })

increaseScore();
getHit();
runTimer();
makebubble();

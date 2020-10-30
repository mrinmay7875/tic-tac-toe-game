// const gameBoard=document.querySelector(".gameboard-container");
let allBoxes=document.querySelectorAll(".box");
let heading=document.querySelector("h1")

let firstBox=document.getElementById(0);
let secondBox=document.getElementById(1);
let thirdBox=document.getElementById(2);
let fourthBox=document.getElementById(3);
let fifthBox=document.getElementById(4);
let sixthBox=document.getElementById(5);
let seventhBox=document.getElementById(6);
let eighthBox=document.getElementById(7);
let ninthBox=document.getElementById(8);



let O_player="O"
let X_player="X"
let currentPlayer=O_player;
const restartButton=document.querySelector("#restart-button")


//Adding X or O to all the boxes
allBoxes.forEach((element)=>{
    element.addEventListener("click",()=>{
element.textContent=currentPlayer;
element.style.fontSize="80px";
element.style.textAlign="center"

if(checkWinner()===X_player){
heading.innerText="Player X won the game!"
 setTimeout(() => {
    allBoxes.forEach((element)=>{
element.textContent="";
heading.innerText="Let's play!"
}) 
}, 1300);
}


else if(checkWinner()===O_player){
    
    heading.innerText="Player O won the game!"
    setTimeout(() => {
        allBoxes.forEach((element)=>{
            element.textContent="";
            heading.innerText="Let's play!"
    }) 
 }, 1300);
}

if(currentPlayer==O_player){
currentPlayer=X_player
}
else{
    currentPlayer=O_player;
}


    })
})

// adding reset button functions

restartButton.addEventListener("click",()=>{
    allBoxes.forEach((element)=>{
element.textContent="";
heading.textContent="Let's play!"
    })
})

function checkWinner(){
    let winner;
    if(firstBox.textContent==="X")
    {
        if(secondBox.textContent==="X" &&thirdBox.textContent==="X" ){
            winner=X_player;
        }

       if(fourthBox.textContent==="X" && seventhBox.textContent==="X" ){
            winner=X_player;
        }
        if(fifthBox.textContent==="X" &&ninthBox.textContent==="X" ){
            winner=X_player;
        }
        
    }

  if(firstBox.textContent==="O")
    {
        if(secondBox.textContent==="O" &&thirdBox.textContent==="O" ){
            winner=O_player;
        }

       if(fourthBox.textContent==="O" && seventhBox.textContent==="O" ){
            winner=O_player;
        }
        if(fifthBox.textContent==="O" &&ninthBox.textContent==="O" ){
            winner=O_player;
        }
        
    }


if(ninthBox.textContent==="O")
    {
        if(sixthBox.textContent==="O" &&thirdBox.textContent==="O" ){
            winner=O_player;
        }

       if(eighthBox.textContent==="O" && seventhBox.textContent==="O" ){
            winner=O_player;
        }
        if(fifthBox.textContent==="O" &&firstBox.textContent==="O" ){
            winner=O_player;
        }
        
    }

    if(ninthBox.textContent==="X")
    {
        if(sixthBox.textContent==="X" &&thirdBox.textContent==="X" ){
            winner=X_player;
        }

       if(eighthBox.textContent==="X" && seventhBox.textContent==="X" ){
            winner=X_player;
        }
        if(fifthBox.textContent==="X" &&firstBox.textContent==="X" ){
            winner=X_player;
        }
        
    }

    


    if(fifthBox.textContent==="X")
    {
        
       if(eighthBox.textContent==="X" && secondBox.textContent==="X" ){
            winner=X_player;
        }
        if(fourthBox.textContent==="X" && sixthBox.textContent==="X" ){
            winner=X_player;
        }
        if(thirdBox.textContent==="X" && seventhBox.textContent==="X" ){
            winner=X_player;
        }
        
    }



    if(fifthBox.textContent==="O")
    {
        
       if(eighthBox.textContent==="O" && secondBox.textContent==="O" ){
            winner=O_player;
        }
        if(fourthBox.textContent==="O" && sixthBox.textContent==="O" ){
            winner=O_player;
        }

         if(thirdBox.textContent==="O" && seventhBox.textContent==="O" ){
            winner=O_player;
        }


        
    }
return winner;

}


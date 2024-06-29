let userScore = 0;
let compScore = 0;

const choices  = document.querySelectorAll(".choice");
const msg = document.querySelector("#massage");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#Computer-score");
const resetButton = document.querySelector("#reset-button");

const gencompChoice = () =>{
    const option = ["rock","paper","scissors"];
    const opnIndex = Math.floor(Math.random()*3);
    return option[opnIndex];
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const playGame = (userChoice) =>{

    const compChoice = gencompChoice();
    if(userChoice === compChoice){
        msg.innerText = "draw!!!";
        msg.style.backgroundColor = "gray";
    }
    else{
        let userWin;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false:true;
        }
       else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false:true;
        }
        else{
            userWin = compChoice === "rock"? false:true;
        }
        showWinner(userWin);
    }
}

const showWinner  = (userWin) =>{
    if(userWin){
        userScore++;
        msg.innerText = "You win!!!";
        msg.style.backgroundColor = "green";
        uScore.innerText  = userScore;
    }
    else{
        compScore++;
        cScore.innerText = compScore; 
        msg.style.backgroundColor = "red";
        msg.innerText = "You lose!!!"
    }
}
resetButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    uScore.innerText = userScore;
    cScore.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "";
});

document.querySelectorAll('.choice img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.add('scale-animation');
        img.addEventListener('animationend', () => {
            img.classList.remove('scale-animation');
        }, { once: true });
    });
});


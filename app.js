const aiRoutine = () => {
    let compImage = document.getElementById('compSelection');
    let compChoice = Math.floor(Math.random() * 3);
    compImage.src = `${choices[compChoice]}.png`;
    return compChoice + 1;
}


const playGame = () => {
    let compChoice = aiRoutine();
    document.getElementById("comp").classList.remove("computerSelection");
    document.getElementById("comp").classList.add("computerSelectionVisible");
    declareWinner(calculateWinner(selection, compChoice));    
}

const selectPaper = () => {
    paperImage.classList.add("selected");
    scissorImage.classList.remove("selected");
    rockImage.classList.remove("selected");
    playBut.classList.remove("false");
    playBut.classList.add("true");
    selection = 1;
}

const selectScissors = () => {
    paperImage.classList.remove("selected");
    scissorImage.classList.add("selected");
    rockImage.classList.remove("selected");
    playBut.classList.remove("false");
    playBut.classList.add("true");
    selection = 2;
}

const selectRock = () => {
    paperImage.classList.remove("selected");
    scissorImage.classList.remove("selected");
    rockImage.classList.add("selected");
    playBut.classList.remove("false");
    playBut.classList.add("true");
    selection = 3;
}

const calculateWinner = (player, comp) => {
    // return 0 - draw
    // return 1 - player won
    // return 2 - computer won
    if (player === comp) {
        return 0;
    }
    if (player === 1 && comp === 2) {
        return 2;
    }
    if (player === 1 && comp === 3) {
        return 1;
    }
    if (player === 2 && comp === 1) {
        return 1;
    }
    if (player === 2 && comp === 3) {
        return 2;
    }
    if (player === 3 && comp === 1) {
        return 2;
    }
    if (player === 3 && comp === 2) {
        return 1;
    }
}

const declareWinner = (x) => {
    
    var tag = document.createElement("p");
    
    if(x === 1) {
        var text = document.createTextNode("Player Won");
    }
    else if (x === 2) {
        var text = document.createTextNode("Computer Won");
    }
    else {
        var text = document.createTextNode("Its a Draw");
    }
    tag.appendChild(text);
    document.getElementById("controls").appendChild(tag);
}

var selection = 0;
const playBut = document.getElementById('play');
const paperImage = document.getElementById('paper');
const scissorImage = document.getElementById('scissors')
const rockImage = document.getElementById('rock');

playBut.addEventListener("click", playGame);
paperImage.addEventListener("click", selectPaper);
scissorImage.addEventListener("click", selectScissors);
rockImage.addEventListener("click", selectRock);

const choices = ['paper', 'scissors', 'rock'];


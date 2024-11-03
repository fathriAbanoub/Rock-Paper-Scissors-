let arr = ["rock", "paper", "scissors"];
let Humanscore = 0; 
let pcscore = 0;

function playRound(n) {
    n = n.toLowerCase();
    let result = arr[Math.floor(Math.random() * arr.length)];

    if (!arr.includes(n)) {
        document.getElementById('result').innerText = "Invalid choice! Please choose rock, paper, or scissors.";
        return;
    }

    if (n === result) {
        document.getElementById('result').innerText = `It's a tie! You both chose ${n}.`;
    } else if ((n === arr[0] && result === arr[1]) ||
               (n === arr[1] && result === arr[2]) ||
               (n === arr[2] && result === arr[0])) {
        pcscore++;
        document.getElementById('result').innerText = `Computer wins! You chose ${n}, computer chose ${result}.`;
    } else {
        Humanscore++;
        document.getElementById('result').innerText = `You win! You chose ${n}, computer chose ${result}.`;
    }
    
    document.getElementById('score').innerText = `Your score: ${Humanscore}, Computer score: ${pcscore}`;
}

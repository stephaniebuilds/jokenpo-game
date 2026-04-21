const images = {
    rock: '&#x1F44A;',
    paper: '&#x1F590;',
    scissors: '&#x270C;'
}

const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0



const playHuman = (humanChoice) => {
    const machineChoice = playMachine();
    const imagemMachine = images[machineChoice];

    const resultYou = document.querySelector('.result-container-you');
    const resultContainer = document.querySelector('.result-container');
    


    resultYou.innerHTML = `
        <p>Você escolheu:</p>
        <span style="font-size: 70px;">${images[humanChoice]}</span>
    `
    resultContainer.innerHTML = `
    <p>A máquina escolheu:</p>
    <span style="font-size: 70px;">${images[machineChoice]}</span>
    <p class="result"></p>
`

    checkWinner(humanChoice, machineChoice);
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}



const checkWinner = (escolhadousuario, escolhadorobo) => {
    console.log("Humano: " + escolhadousuario + " | Máquina: " + escolhadorobo);
    const campoMensagem = document.querySelector('.result');


    if (escolhadousuario === escolhadorobo) {
        campoMensagem.innerHTML = "Empate! 🤝";
    } 
    else if (
        (escolhadousuario === 'rock' && escolhadorobo === 'scissors') ||
        (escolhadousuario === 'paper' && escolhadorobo === 'rock') ||
        (escolhadousuario === 'scissors' && escolhadorobo === 'paper')
    ) {
        // Você ganhou
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        if (escolhadousuario === 'rock') campoMensagem.innerHTML = "Pedra quebra a tesoura. <br>Você ganhou! 🏆";
        if (escolhadousuario === 'paper') campoMensagem.innerHTML = "Papel embrulha a pedra. <br>Você ganhou! 🏆";
        if (escolhadousuario === 'scissors') campoMensagem.innerHTML = "Tesoura corta o papel. <br>Você ganhou! 🏆";
    } 
    else {
        // Máquina ganhou
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        if (escolhadorobo === 'rock') campoMensagem.innerHTML = "Pedra quebra a tesoura. <br>A máquina ganhou! 🤖";
        if (escolhadorobo === 'paper') campoMensagem.innerHTML = "Papel embrulha a pedra. <br>A máquina ganhou! 🤖";
        if (escolhadorobo === 'scissors') campoMensagem.innerHTML = "Tesoura corta o papel. <br>A máquina ganhou! 🤖";
    }
}







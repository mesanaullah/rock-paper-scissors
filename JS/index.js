let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        draw: 0
    };
}

const UpdateScore = () => {
    // document.getElementsByClassName("scrbtn")[0].innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draw: ${score.draw}`;
    document.querySelector(".scrbtn").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draw: ${score.draw}`;
}

const RockMoves = () => {

    const moves = Math.random();
    let ComputerMove = '';

    if (moves >= 0 && moves < 1 / 3) {
        ComputerMove = "Rock";
    }
    else if (moves >= 1 / 3 && moves < 2 / 3) {
        ComputerMove = "Paper";
    }
    else if (moves >= 2 / 3 && moves < 1) {
        ComputerMove = "Scissors";
    }
    // console.log(ComputerMove);

    let result = '';

    if (ComputerMove === 'Rock') {
        result = 'Match Draw!';
    }
    else if (ComputerMove === 'Paper') {
        result = 'You lost 😟!';
    }
    else if (ComputerMove === 'Scissors') {
        result = 'You Win 😃!';
    }

    if (result === 'You Win 😃!') {
        score.wins += 1;
    } else if (result === 'You lost 😟!') {
        score.losses += 1;
    } else if (result === 'Match Draw!') {
        score.draw += 1;
    }

    //JSON - support only stings
    localStorage.setItem('score', JSON.stringify(score));

    document.getElementById("results").innerHTML = `You Picked Rock. Computer Picked ${ComputerMove}. ${result}
    `;
    // document.getElementsByClassName("scrbtn")[0].innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draw: ${score.draw}`;
    // document.querySelector(".scrbtn").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draw: ${score.draw}`;
    // alert(`Wins: ${score.wins}, Losses: ${score.losses}, Draw: ${score.draw}`)
    UpdateScore();
}

const PaperMoves = () => {
    const moves = Math.random();
    let ComputerMove = '';

    if (moves >= 0 && moves < 1 / 3) {
        ComputerMove = 'Rock';
    }
    else if (moves >= 1 / 3 && moves < 2 / 3) {
        ComputerMove = 'Paper';
    }
    else if (moves >= 2 / 3 && moves < 1) {
        ComputerMove = 'Scissors';
    }

    let result = '';
    if (ComputerMove === 'Paper') {
        result = 'Match Draw!'
    }
    else if (ComputerMove === 'Rock') {
        result = 'You Win 😃!'
    }
    else if (ComputerMove === 'Scissors') {
        result = 'You lost 😟!'
    }

    if (result === 'You Win 😃!') {
        score.wins += 1;
    } else if (result === 'You lost 😟!') {
        score.losses += 1;
    } else if (result === 'Match Draw!') {
        score.draw += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    // alert(`You Picked Paper. Computer Picked ${ComputerMove}. ${result}`)
    document.getElementById("results").innerHTML = `You Picked Paper. Computer Picked ${ComputerMove}. ${result}`;
    // document.getElementsByClassName("scrbtn")[0].innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draw: ${score.draw}`;
    // alert(`Wins: ${score.wins}, Losses: ${score.losses}, Draw: ${score.draw}`)
    UpdateScore();
}


const ScissorsMove = () => {
    const moves = Math.random();
    let ComputerMove = '';

    if (moves >= 0 && moves < 1 / 3) {
        ComputerMove = 'Rock';
    }
    else if (moves >= 1 / 3 && moves < 2 / 3) {
        ComputerMove = 'Paper';
    }
    else if (moves >= 2 / 3 && moves < 1) {
        ComputerMove = 'Scissors';
    }

    let result = '';
    if (ComputerMove === 'Scissors') {
        result = 'Match Draw!'
    }
    else if (ComputerMove === 'Rock') {
        result = 'You Lost 😟!'
    }
    else if (ComputerMove === 'Paper') {
        result = 'You Win 😃!'
    }


    if (result === 'You Win 😃!') {
        score.wins += 1;
    } else if (result === 'You lost 😟!') {
        score.losses += 1;
    } else if (result === 'Match Draw!') {
        score.draw += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.getElementById("results").innerHTML = `You Picked Scissor. Computer Picked ${ComputerMove}. ${result}`;
    // alert(`You Picked Scissor. Computer Picked ${ComputerMove}. ${result}`)
    // document.getElementsByClassName("scrbtn")[0].innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draw: ${score.draw}`;
    // alert(`Wins: ${score.wins}, Losses: ${score.losses}, Draw: ${score.draw}`)
    UpdateScore();
}


const ResetScore = () => {
    score.wins = 0;
    score.losses = 0;
    score.draw = 0;

    localStorage.removeItem('score');
    UpdateScore();

    const btnElm = document.querySelector('.clr-btn');
    if (btnElm.innerText === 'Reset') {
        btnElm.innerHTML ==='Cleared';
        
    } else {
        btnElm.innerHTML === 'Reset';
    }
    console.log(btnElm.innerText);
    console.log(btnElm.innerHTML);
}


let choices = ['Snake', 'Water', 'Gun'];
let scores = {
win: 0,
lose: 0,
total: 0
};

document.querySelectorAll('#snake, #water, #gun').forEach(button => {
button.addEventListener('click', () => {
    let userChoice = button.id.charAt(0).toUpperCase() + button.id.slice(1);
    let compChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('computerReply').innerText = compChoice;

    if (userChoice === compChoice) {
    document.getElementById('result').innerText = "It's a tie!";
    } else if (
    (userChoice === 'Snake' && compChoice === 'Water') ||
    (userChoice === 'Water' && compChoice === 'Gun') ||
    (userChoice === 'Gun' && compChoice === 'Snake')
    ) {
    document.getElementById('result').innerText = 'You win!';
    scores.win++;
    } else {
    document.getElementById('result').innerText = 'Computer wins!';
    scores.lose++;
    }

    scores.total++;
    document.getElementById('win').innerText = scores.win;
    document.getElementById('lose').innerText = scores.lose;
    document.getElementById('total').innerText = scores.total;
});
});
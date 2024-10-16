// Function to check if the selected answer is correct
function checkAnswer(button, isCorrect) {
    // Disable all buttons after an answer is chosen
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    });

    // If the answer is correct, turn it green, else red
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
}

// wait for dom content to load
document.addEventListener('DOMContentLoaded', function() {
    // add event listeners to buttons
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function() {
           if(this.getAttribute('data-type') === 'submit') {
            alert('You clicked the submit button');
            checkAnswer();
            } else {
            let gameType = this.getAttribute('data-type');
            alert(`You clicked the ${gameType} button`);
            runGame(gameType);
           }
        });
    }

});

// game functions
function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {
  
}

function incrementWrongAnswer() {
    
}
 
function displayAdditionQuestion() {
}

function displaySubtractionQuestion() {
}

function displayMultiplyQuestion() {
}


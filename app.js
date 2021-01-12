// import functions 
import { yesAnswer } from './utils.js';

//Grab DOM elements
const quizButton = document.getElementById('quiz-button');
const quizResult = document.getElementById('quiz-result');

// initialize state


// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {

    //Alert    
    alert("It's time to take the quiz");

    const confirmation = confirm('Do you want to proceed?');

    if (!confirmation) return;

    let correctAnswerCount = 0;

    //Name prompts
    const firstName = prompt("What's your first name?");
    const lastName = prompt("What's your last name?");


    //Dog question prompts
    const dogTypeAnswer = prompt('Is Chloe a Chiweenie?');

    if (yesAnswer(dogTypeAnswer)) correctAnswerCount++;

    const dogWellAnswer = prompt('Does Chloe dog very well?');

    if (!yesAnswer(dogWellAnswer)) correctAnswerCount++;

    const dogFiveAnswer = prompt('Can Chloe high-five?');

    if (yesAnswer(dogFiveAnswer)) correctAnswerCount++;

    //Results
    const resultString = `Hello ${firstName} ${lastName}! You got ${Math.round(correctAnswerCount / 3 * 100)}% of the questions right.`;

    quizResult.textContent = resultString;

});
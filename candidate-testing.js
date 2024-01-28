const input = require('readline-sync');



// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName(candidateName) {
  // TODO 1.1b: Ask for candidate's name //
input.question("Hello! Please enter your name: ");
}

function askQuestion(questions) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  //iterates thru the questions array until the end, asks a question for each count, pushes the input to the candidate answers array//
for (let i=0; i<=questions.length; i++)
input.question(questions[i]);
candidateAnswers.push(input[i])
}

function gradeQuiz(candidateAnswers) {
var correctCount = 0;
var incorrectCount = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//if (candidateAnswer === "Sally Ride") {
  //console.log("Correct!");
//} else {
  //console.log("Incorrect!")
//}

var i
for (let i=0; i<=correctAnswers.length; i ++);{
let correctAnswersLower = correctAnswers.map(element => {
  return element.toLowerCase();
});
 let candidateAnswersLower = candidateAnswers.map(element => {
  return element.toLowerCase();
});
  if (correctAnswersLower[i] === candidateAnswersLower[i]) {
    console.log("Correct!");
       var correctCount = correctCount + 1
  } else {
    console.log("Incorrect!");
    var incorrectCount = incorrectCount + 1
  }
}
//console.log(correctCount);
//console.log(incorrectCount);
  let grade = (correctCount)/(incorrectCount)*100;  //TODO 3.2 use this variable to calculate the candidates score.
//grade = (number correct)/(number incorrect)*100,, updating already written code + some new code
//use map method to convert all elements in arrays to lowercase (x = z.map(word => word.toLowerCase))
//for each candidate answer that case-insensitively = the correct answer, add 1 to the 'correctCount' value (number value). else, add 1 to incorrectCount. 
//after, divide correctCount/incorrectCount, multiply by 100
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName+ "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
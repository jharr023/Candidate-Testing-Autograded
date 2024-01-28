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
canditateName = input.question("Hello! Please enter your name: ");
}

function askQuestion(questions) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  //iterates thru the questions array until the end, asks a question for each count, pushes the input to the candidate answers array//
for (let i=0; i < questions.length; i++) {
candidateAnswer = input.question(questions[i]);
candidateAnswers.push(candidateAnswer);
}
}

function gradeQuiz(candidateAnswers) {
let correctCount = 0;
let totalQuestions = 5
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//if (candidateAnswer === "Sally Ride") {
  //console.log("Correct!");
//} else {
  //console.log("Incorrect!")
//}
/*if (correctAnswers.length !== candidateAnswers.length) {
  console.error("Error: Array lengths mismatch.");
}*/

for (let i=0; i < totalQuestions; i ++){
let correctAnswerLower = correctAnswers[i].toLowerCase();
let candidateAnswerLower = candidateAnswers[i].toLowerCase();

console.log(`Q${i + 1}: Correct Answer: ${correctAnswerLower}, Candidate Answer: ${candidateAnswerLower}`);

  if (correctAnswerLower === candidateAnswerLower) {
    correctCount = correctCount + 1;
    /*console.log(`Q${i + 1}: Correct!`);
  } else {
    console.log(`Q${i + 1}: Incorrect. Correct answer: ${correctAnswerLower}, Case-insensitive comparison result: ${correctAnswerLower === candidateAnswerLower}`);
  }*/
}
}
  let grade = (correctCount / totalQuestions) * 100;  //TODO 3.2 use this variable to calculate the candidates score.
//grade = (number correct)/(number incorrect)*100,, updating already written code + some new code
//use map method to convert all elements in arrays to lowercase (x = z.map(word => word.toLowerCase))
//for each candidate answer that case-insensitively = the correct answer, add 1 to the 'correctCount' value (number value). else, add 1 to incorrectCount. 
//after, divide correctCount/incorrectCount, multiply by 100
/*console.log("Candidate Name: " = candidateName);
console.log('Total Correct Answers : ' + correctAnswers);
console.log('Candidate Score: ${grade.toFixed(2)}%)');*/


console.log(`Total Correct Answers: ${correctCount}`);
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
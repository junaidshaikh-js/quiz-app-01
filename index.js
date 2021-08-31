const readlineSync = require("readline-sync");

let score = 0;

// Welcome user
const userName = readlineSync.question(`What's your name? `);
console.log(`Welcome ${userName} to HOW WELL YOU KNOW Junaid
Let's begin...`);

// store question in array of objects
const questions = [
  {
    question: "In which state do I live? ",
    answer: "Maharashtra",
  },
  {
    question: "What do I do? ",
    answer: "student",
  },
  {
    question: "How old I am? ",
    answer: "21",
  },
  {
    question: "What is my favourite drink? ",
    answer: "tea",
  },
  {
    question: "Did I ever go to summer camp? ",
    answer: "no",
  },
];

// check if the user answer is correct, if yes increase the score
function checkAnswer(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log("Right!");
    score++;
  } else {
    console.log("Wrong!");
  }

  console.log(`Current score: ${score}`);
  console.log(`------------------------`);
}

// loop through questions and call function in time with new arguments
for (i = 0; i < questions.length; i++) {
  let currentQuestion = questions[i].question;
  let currentAnswer = questions[i].answer;
  checkAnswer(currentQuestion, currentAnswer);
}

let highScoreRecord = [
  {
    name: "Junaid",
    score: 5,
  },
  {
    name: "Mr. X",
    score: 3,
  },
];

function displayHighScore() {
  console.log(`Yayy!! You scored: ${score}`);

  console.log(
    "Check out the high scores. If you think you should be on the list, ping me and I will update it"
  );

  highScoreRecord.forEach((player) => {
    console.log(`${player.name} : ${player.score}`);
  });
}

displayHighScore();

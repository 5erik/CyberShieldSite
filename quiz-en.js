const questions = [
  {
    q: "You receive an email from your bank asking you to click a link. What should you do?",
    a: ["Click the link", "Verify the sender and call the bank", "Delete it without reading"],
    correct: 1
  },
  {
    q: "A stranger asks for your account information to 'recover access'.",
    a: ["Give them the info", "Ignore them", "Ask more questions and then decide"],
    correct: 1
  },
  {
    q: "You get an SMS saying 'You won a prize!' with a link. What’s your reaction?",
    a: ["Open the link", "Delete it", "Forward it to a friend"],
    correct: 1
  },
  {
    q: "Someone calls claiming to be tech support and asks for a code. What do you do?",
    a: ["Give the code", "Ask who they are and hang up", "Give them all info"],
    correct: 1
  },
  {
    q: "What is the best way to protect your account?",
    a: ["Just a password", "Two-factor authentication", "Secret answers on public sites"],
    correct: 1
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById('question').textContent = q.q;
  const answers = document.getElementById('answers');
  answers.innerHTML = '';
  q.a.forEach((opt, i) => {
    const li = document.createElement('li');
    li.textContent = opt;
    li.onclick = () => checkAnswer(i);
    answers.appendChild(li);
  });
  document.getElementById('result').textContent = '';
}

function checkAnswer(index) {
  const isCorrect = index === questions[current].correct;
  if (isCorrect) {
    score++;
    document.getElementById('result').textContent = "Correct!";
    document.getElementById('result').style.color = "green";
  } else {
    document.getElementById('result').textContent = "Incorrect!";
    document.getElementById('result').style.color = "red";
  }
  current++;
  setTimeout(() => {
    if (current < questions.length) showQuestion();
    else {
      document.getElementById('question').textContent = "Quiz completed. Your score: " + score + "/" + questions.length;
      document.getElementById('answers').innerHTML = "";
      document.getElementById('result').textContent = "";
    }
  }, 1200);
}

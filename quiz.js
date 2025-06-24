const questions = [
  {
    q: "Вы получили письмо от банка с просьбой перейти по ссылке. Что вы сделаете?",
    a: ["Перейду по ссылке", "Проверю отправителя и позвоню в банк", "Удалю не читая"],
    correct: 1
  },
  {
    q: "Незнакомец просит ваши данные для 'восстановления аккаунта'.",
    a: ["Дам данные", "Проигнорирую", "Отвечу и уточню"],
    correct: 1
  },
  {
    q: "SMS с текстом 'Вы выиграли приз!' и ссылкой. Ваши действия?",
    a: ["Открою ссылку", "Удалю", "Перешлю другу"],
    correct: 1
  },
  {
    q: "Звонят и представляются техподдержкой. Спрашивают код. Что делаете?",
    a: ["Даю код", "Спрашиваю имя и вешаю трубку", "Сообщаю все данные"],
    correct: 1
  },
  {
    q: "Что лучше всего защищает учётную запись?",
    a: ["Только пароль", "Двухфакторная аутентификация", "Публичные ответы"],
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
    document.getElementById('result').textContent = "Верно!";
    document.getElementById('result').style.color = "green";
  } else {
    document.getElementById('result').textContent = "Неверно!";
    document.getElementById('result').style.color = "red";
  }
  current++;
  setTimeout(() => {
    if (current < questions.length) showQuestion();
    else {
      document.getElementById('question').textContent = "Тест завершён. Результат: " + score + "/" + questions.length;
      document.getElementById('answers').innerHTML = "";
      document.getElementById('result').textContent = "";
    }
  }, 1200);
}

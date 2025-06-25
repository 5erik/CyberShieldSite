const questions = [
  {
    q: "Բանկից նամակ եք ստացել հղումով։ Ի՞նչ պետք է անեք։",
    a: ["Սեղմել հղումը", "Ստուգել ուղարկողին և զանգել բանկ", "Ջնջել առանց բացելու"],
    correct: 1
  },
  {
    q: "Օտար մեկը պահանջում է ձեր հաշվի տվյալները՝ «վերականգնելու» համար։",
    a: ["Տալ տվյալները", "Անտեսել", "Հարցեր տալ ու հետո որոշել"],
    correct: 1
  },
  {
    q: "SMS եք ստացել «Դուք շահել եք մրցանակ»։ Ինչպե՞ս կարձագանքեք։",
    a: ["Կբացեք հղումը", "Կջնջեք", "Կուղարկեք ընկերոջը"],
    correct: 1
  },
  {
    q: "Զանգում են՝ ներկայանալով որպես տեխնիկական աջակցություն և հարցնում են կոդ։",
    a: ["Տալ կոդը", "Հարցնել ով է և անջատել", "Տալ բոլոր տվյալները"],
    correct: 1
  },
  {
    q: "Ո՞րը կպաշտպանի ձեր հաշիվը լավագույն ձևով։",
    a: ["Միայն գաղտնաբառ", "Երկփուլանոց նույնականացում", "Հանրային գաղտնի պատասխաններ"],
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
    document.getElementById('result').textContent = "Ճիշտ է!";
    document.getElementById('result').style.color = "green";
  } else {
    document.getElementById('result').textContent = "Սխալ է!";
    document.getElementById('result').style.color = "red";
  }
  current++;
  setTimeout(() => {
    if (current < questions.length) showQuestion();
    else {
      document.getElementById('question').textContent = "Թեստն ավարտված է։ Ձեր արդյունքը՝ " + score + "/" + questions.length;
      document.getElementById('answers').innerHTML = "";
      document.getElementById('result').textContent = "";
    }
  }, 1200);
}

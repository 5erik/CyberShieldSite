function checkAnswer(index) {
  const correct = 1;
  const result = document.getElementById('result');
  if (index === correct) {
    result.textContent = 'Верно! Это безопасный подход.';
    result.style.color = 'green';
  } else {
    result.textContent = 'Неверно. Подобные письма могут быть фишингом.';
    result.style.color = 'red';
  }
}
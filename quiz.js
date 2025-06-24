function checkAnswer(i){
  let result = document.getElementById('result');
  if(i === 1){
    result.textContent = "Верно! Это безопасное поведение.";
    result.style.color = "green";
  } else {
    result.textContent = "Неверно. Это может быть фишинг.";
    result.style.color = "red";
  }
}
function checkAnswer(e, i) {
  const correctAnswer = document.querySelector(
    `#question-${i} .choices .answer.correct`
  );

  const nextQuestion = document.querySelector(`#question-${i} button`);

  const allChoices = document.querySelectorAll(
    `#question-${i} .choices .answer`
  );

  const allRadio = document.querySelectorAll(
    `#question-${i} .choices .answer input`
  );

  // resetClass(i);

  if (e === correctAnswer) {
    correctAnswer.classList.add('blue');
  } else {
    e.classList.add('red');
    correctAnswer.classList.add('green');
  }

  allChoices.forEach((el, index) => {
    el.removeAttribute('onclick');
  });

  allRadio.forEach((el, index) => {
    el.setAttribute('disabled', true);
  });

  nextQuestion.removeAttribute('disabled');
  nextQuestion.classList.add('allowed');
}

function nextQuestion(i) {
  document.getElementById(`question-${i}`).style.display = 'block';
  document.getElementById(`question-${i - 1}`).style.display = 'none';
}

function resetClass(i) {
  const green = document.querySelector(`#question-${i} .choices .answer.green`);
  const red = document.querySelector(`#question-${i} .choices .answer.red`);
  const blue = document.querySelector(`#question-${i} .choices .answer.blue`);

  if (green) green.classList.remove('green');
  if (red) red.classList.remove('red');
  if (blue) blue.classList.remove('blue');
}

const callbackQuiz = () => {};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callbackQuiz();
} else {
  document.addEventListener('DOMContentLoaded', callbackQuiz);
}

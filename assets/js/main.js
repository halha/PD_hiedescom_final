function rateClick(e) {
  console.log(e);
  e.classList.toggle('active');
}

function addComment(event, i) {
  event.preventDefault();

  const nComment = document.getElementById(`value-${i}`).value;

  console.log(nComment);

  document.getElementById(`newComment-${i}`).style.display = 'flex';
  document.querySelector(`#newComment-${i} .box p`).innerHTML = nComment;

  document.getElementById(`value-${i}`).value = '';
}

function openSocialModal() {
  document.getElementById('social-modal').style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';
  document.getElementById('all-content').style.filter = 'blur(5px)';
}

function openPostModal() {
  document.getElementById('post-modal').style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';
  document.getElementById('all-content').style.filter = 'blur(5px)';
}

function closeModal() {
  document.querySelector('body').style.overflow = 'auto';
  document.getElementById('all-content').style.filter = 'unset';
  document.getElementById('social-modal').style.display = 'none';
  document.getElementById('post-modal').style.display = 'none';
}

const callbackMain = () => {
  const activity = document.querySelectorAll('.activity');
  const quiz = document.querySelectorAll('.quiz');
  const material = document.querySelectorAll('.material');
  const question = document.querySelectorAll('.question');

  const fActivity = document.getElementById('f-activity');
  const fQuiz = document.getElementById('f-quiz');
  const fMaterial = document.getElementById('f-material');
  const fQuestion = document.getElementById('f-question');
  const fAll = document.getElementById('f-all');

  fActivity.addEventListener('click', () => {
    fActivity.classList.add('active');
    fQuiz.classList.remove('active');
    fMaterial.classList.remove('active');
    fQuestion.classList.remove('active');

    activity.forEach((el, i) => {
      el.style.display = 'block';
    });
    quiz.forEach((el, i) => {
      el.style.display = 'none';
    });
    material.forEach((el, i) => {
      el.style.display = 'none';
    });
    question.forEach((el, i) => {
      el.style.display = 'none';
    });
  });

  fQuiz.addEventListener('click', () => {
    fQuiz.classList.add('active');
    fActivity.classList.remove('active');
    fMaterial.classList.remove('active');
    fQuestion.classList.remove('active');

    quiz.forEach((el, i) => {
      el.style.display = 'block';
    });
    activity.forEach((el, i) => {
      el.style.display = 'none';
    });
    material.forEach((el, i) => {
      el.style.display = 'none';
    });
    question.forEach((el, i) => {
      el.style.display = 'none';
    });
  });

  fMaterial.addEventListener('click', () => {
    fMaterial.classList.add('active');
    fActivity.classList.remove('active');
    fQuiz.classList.remove('active');
    fQuestion.classList.remove('active');

    material.forEach((el, i) => {
      el.style.display = 'block';
    });
    activity.forEach((el, i) => {
      el.style.display = 'none';
    });
    quiz.forEach((el, i) => {
      el.style.display = 'none';
    });
    question.forEach((el, i) => {
      el.style.display = 'none';
    });
  });

  fQuestion.addEventListener('click', () => {
    fQuestion.classList.add('active');
    fActivity.classList.remove('active');
    fQuiz.classList.remove('active');
    fMaterial.classList.remove('active');

    question.forEach((el, i) => {
      el.style.display = 'block';
    });
    activity.forEach((el, i) => {
      el.style.display = 'none';
    });
    quiz.forEach((el, i) => {
      el.style.display = 'none';
    });
    material.forEach((el, i) => {
      el.style.display = 'none';
    });
  });

  fAll.addEventListener('click', () => {
    fQuestion.classList.remove('active');
    fActivity.classList.remove('active');
    fQuiz.classList.remove('active');
    fMaterial.classList.remove('active');

    question.forEach((el, i) => {
      el.style.display = 'block';
    });
    activity.forEach((el, i) => {
      el.style.display = 'block';
    });
    quiz.forEach((el, i) => {
      el.style.display = 'block';
    });
    material.forEach((el, i) => {
      el.style.display = 'block';
    });
  });
};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callbackMain();
} else {
  document.addEventListener('DOMContentLoaded', callbackMain);
}

let currentQuestion = 1;
const totalQuestions = 4; 
const answers = {};
const correctAnswers = {
  q1: 'a',
  q2: 'b',
  q3: 'c',
  q4: 'd',
};

function showQuestion(questionNumber) {
  document.querySelectorAll('.question-container').forEach((container) => {
    container.style.display = 'none';
  });

  const currentContainer = document.getElementById(`question${questionNumber}`);
  if (currentContainer) {
    currentContainer.style.display = 'block';
  }

  document.getElementById('prevBtn').style.display = questionNumber > 1 ? 'block' : 'none';
}

function nextQuestion() {
  if (currentQuestion < totalQuestions) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}

function prevQuestion() {
  if (currentQuestion > 1) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

function saveAnswer() {
  const radios = document.getElementsByName(`q${currentQuestion}`);
  for (const radio of radios) {
    if (radio.checked) {
      answers[`q${currentQuestion}`] = radio.value;
      break;
    }
  }
}

function submitQuiz() {
  saveAnswer();

  let correctCount = 0;
  for (let i = 1; i <= totalQuestions; i++) {
    if (answers[`q${i}`] && answers[`q${i}`] === correctAnswers[`q${i}`]) {
      correctCount++;
    }
  }

  alert(`You got ${correctCount} out of ${totalQuestions} questions correct!`);
}

showQuestion(currentQuestion);

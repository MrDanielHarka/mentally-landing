const questionElements = document.getElementsByClassName('onboarding-question');

const createQuerySelectorForQuestion = currentQuestion => {
  document
    .querySelector(`.button-onboarding-${currentQuestion}`)
    .addEventListener('click', () => {
      document.querySelector(
        `.onboarding-question-${currentQuestion}`
      ).style.display = 'none';
      document.querySelector(
        `.onboarding-question-${currentQuestion + 1}`
      ).style.display = 'block';
    });
};

const addEventListenerToAllQuestionElements = () => {
  for (let i = 1; i < questionElements.length + 1; i++) {
    if (i === questionElements.length) {
      document
        .querySelector(`.button-onboarding-${questionElements.length}`)
        .addEventListener('click', () => {
          document.querySelector(
            `.onboarding-question-${questionElements.length}`
          ).innerHTML =
            'Thanks for completing the onboarding process! <br> <br> You´ll receive an email with your login details soon. <br> <br> <a href="index.html">Go to the homepage</a>';
        });
    } else {
      createQuerySelectorForQuestion(i);
    }
  }
};

addEventListenerToAllQuestionElements();

document.querySelector('.button-sign-up').addEventListener('click', () => {
  document.querySelector('.onboarding').style.display = 'none';
  document.querySelector('.onboarding-question-1').style.display = 'block';
});

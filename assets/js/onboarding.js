document.querySelector('.button-sign-up').addEventListener('click', () => {
  document.querySelector('.onboarding').style.display = 'none';
  document.querySelector('.onboarding-question-1').style.display = 'block';
});

document.querySelector('.button-onboarding-1').addEventListener('click', () => {
  document.querySelector('.onboarding-question-1').style.display = 'none';
  document.querySelector('.onboarding-question-2').style.display = 'block';
});

document.querySelector('.button-onboarding-2').addEventListener('click', () => {
  document.querySelector('.onboarding-question-2').style.display = 'none';
  document.querySelector('.onboarding-question-3').style.display = 'block';
});

document.querySelector('.button-onboarding-3').addEventListener('click', () => {
  document.querySelector('.onboarding-question-3').style.display = 'none';
  document.querySelector('.onboarding-question-4').style.display = 'block';
});

document.querySelector('.button-onboarding-4').addEventListener('click', () => {
  document.querySelector('.onboarding-question-4').style.display = 'none';
  document.querySelector('.onboarding-question-5').style.display = 'block';
});

document.querySelector('.button-onboarding-5').addEventListener('click', () => {
  document.querySelector('.onboarding-question-5').innerHTML = 'Thanks!';
});

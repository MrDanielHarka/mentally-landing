const questionElements = document.getElementsByClassName('onboarding-question');
const form = document.getElementsByTagName('form')[0];
const xhr = new XMLHttpRequest();
const backendURL = 'http://localhost:3030';

form.addEventListener('submit', e => {
  e.preventDefault();
});

const getUserDataFromForm = () => {
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;
  return { email: userEmail, password: userPassword };
};

const sendRegisteredUserData = () => {
  xhr.open('POST', `${backendURL}/users/`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 201) {
      console.log('User created.');
    } else if (xhr.status === 401) {
      console.err('Some error.');
    }
  };
  xhr.send(JSON.stringify(getUserDataFromForm()));
};

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
          sendRegisteredUserData();
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

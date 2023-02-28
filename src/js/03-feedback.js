import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(localData, 500));

const email = document.querySelector('[name = "email"]');
const message = document.querySelector('[name = "message"]');

function localData() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onLocalData() {
  let localData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (localData !== null) {
    email.value = localData.email;
    message.value = localData.message;
  }
}

onLocalData();

feedbackForm.addEventListener('submit', onSubmitData);

function onSubmitData(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

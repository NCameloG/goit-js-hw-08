import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-from-state';

const populateForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    Object.entries(parsedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
};

const saveFormData = () => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const formData = { email, message };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

form.addEventListener('input', throttle(saveFormData, 500));

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
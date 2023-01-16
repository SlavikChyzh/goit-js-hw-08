import { save, load } from './localStorage';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit');

const localStorageKey = 'feedback-form-state';
let storeData = load(localStorageKey) || { message: '', mail: '' };

message.value = storeData.message;
email.value = storeData.mail;

message.addEventListener(
  'input',
  throttle(event => {
    storeData.message = event.currentTarget.value;
    save(localStorageKey, storeData);
  }),
  500
);
email.addEventListener(
  'input',
  throttle(event => {
    storeData.mail = event.currentTarget.value;
    save(localStorageKey, storeData);
  }),
  500
);

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(`email:${storeData.mail}, message:${storeData.message}`);
  localStorage.removeItem(localStorageKey);
});

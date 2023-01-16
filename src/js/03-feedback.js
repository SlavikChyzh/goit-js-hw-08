import { save, load } from './localStorage';
import throttle from 'lodash.throttle';

const localStorageKey = 'feedback-form-state';
let storeData = {
  messageStore: '',
  mailStore: '',
};
const form = document.getElementsByClassName('feedback-form');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitBtn = document.querySelector('button');

message.textContent = load(localStorageKey).messageStore;
email.value = load(localStorageKey).mailStore;

message.addEventListener('input', event => {
  //console.log(email.textContent);
  console.log(event.currentTarget.value);
  storeData.messageStore = event.currentTarget.value;
  save(localStorageKey, storeData);
});
email.addEventListener('input', event => {
  //console.log(email.textContent);
  console.log(event.currentTarget.value);
  storeData.mailStore = event.currentTarget.value;
  save(localStorageKey, storeData);
});

// message.addEventListener('input', event => {
//   save(localStorageKey, {
//     emailStorage: email.values,
//     messageStorage: message.values,
//   });
//   console.log(email.values);
//   console.log(message.values);
// });

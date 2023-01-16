import { save, load } from './localStorage';
import throttle from 'lodash.throttle';

const localStorageKey = 'feedback-form-state';
const form = document.getElementsByClassName('feedback-form');
const email = document.getElementsByName('email');
const message = document.getElementsByName('message');
const submitBtn = document.querySelector('button');
console.log(form);
console.log(email);
console.log(message);
console.log(submitBtn);

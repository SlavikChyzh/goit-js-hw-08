import Player from '@vimeo/player';
import { load, save } from './localStorage';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = load('videoplayer-current-time');

player.setCurrentTime(currentTime);
player.on(
  'timeupdate',
  throttle(function (data) {
    const time = data.seconds;
    console.log(time);
    save('videoplayer-current-time', time);
  }, 2000)
);

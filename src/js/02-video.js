import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000)

player.on('timeupdate', onPlay);

const resumePlayTime = ()  => {
const storedPlaybackTime = localStorage.getItem('videoplayer-current-time');
if (storedPlaybackTime !== null) {
  player.setCurrentTime(storedPlaybackTime).catch(function(error){
    console.error("Error setting video time:", error);
  });
}
}

player
  .ready()
  .then(() => {
    resumePlayTime();
  })
  .catch(function (error) {
    console.error('Error when initializing player: ', error);
  });
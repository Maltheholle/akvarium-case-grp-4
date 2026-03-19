'use strict';

//Tilføjer lyd til Kalle Krabbe ved klik//
const kallekrabbeLyd = new Audio('sounds/kallekrabbelyd.m4a');
kallekrabbeLyd.volume = 1.0;

// Tilføjer baggrundsmusik til vendespillet//
//Justerer lydstyrke for baggrundsmusik og krabbelyd //
const baggrundsLyd = new Audio('sounds/baggrundslyd.m4a');
baggrundsLyd.volume = 0.3;
baggrundsLyd.loop = true; 

// Tilføjer havdyrsbilleder til kortene//
const cardsArray = [
  {
    name: 'item01',
    img: 'vendespil/vendespil.img/dory.png'
  },
  {
    name: 'item02',
    img: 'vendespil/vendespil.img/haj.png'
  },
  {
    name: 'item03',
    img: 'vendespil/vendespil.img/havfrue.png'
  },
  {
    name: 'item04',
    img: 'vendespil/vendespil.img/hval.png'
  },
  {
    name: 'item05',
    img: 'vendespil/vendespil.img/krabbe.png'
  },
  {
    name: 'item06',
    img: 'vendespil/vendespil.img/nemo.png'
  },
  {
    name: 'item07',
    img: 'vendespil/vendespil.img/soehest.png'
  },
  {
    name: 'item08',
    img: 'vendespil/vendespil.img/soestjerne.png'
  }
];

// Opretter grundstruktur for fiske vendespil//
const gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let pairsFound = 0;
let timerInterval;
let musikStartet = false;

//Opretter grundstruktur for fiske vendespil//
const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

//Opretter grundstruktur for fiske vendespil//
//Retter størrelse og visning af billeder på kortene//
gameGrid.forEach(function (item) {
  const name = item.name;
  const img = item.img;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

//Opretter grundstruktur for fiske vendespil//
function match() {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
}

//Opretter grundstruktur for fiske vendespil//
function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  const selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
}

grid.addEventListener('click', function (event) {
  const clicked = event.target;

  // Starter baggrundsmusik ved første brugerinteraktion
  if (!musikStartet) {
    baggrundsLyd.play();
    musikStartet = true;
  }

  // Tilføjer win condition når alle fiskepar er fundet//
  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;

    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        pairsFound++;

        if (pairsFound === 8) {
          clearInterval(timerInterval);
          baggrundsLyd.pause();
          baggrundsLyd.currentTime = 0;

          setTimeout(function () {
            alert('Mega godt gået! Du har fundet alle fiske-par!');
            location.reload();
          }, delay);
        }
      }

      setTimeout(resetGuesses, delay);
    }

    previousTarget = clicked;
  }

  document.getElementById('pairsFound').textContent = pairsFound;
});

//Tilføjer timer til vendespillet//
function startTimer(duration, display) {
  let timer = duration;
  let minutes;
  let seconds;

  timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      clearInterval(timerInterval);
      baggrundsLyd.pause();
      baggrundsLyd.currentTime = 0;
      alert('Godt gået! Du fandt ' + pairsFound + ' fiske-par.');
      location.reload();
    }
  }, 1000);
}

//Forbedrer brugeroplevelse med lyd//
window.onload = function () {
  const oneMinute = 80 * 1;
  const display = document.querySelector('#time');
  const boble = document.querySelector('.kallekrabbe-boble');
  const kallekrabbe = document.querySelector('.kallekrabbe');

  startTimer(oneMinute, display);

  boble.textContent = 'Pas på der ikke går fisk i den!';
  
//Tilføjer klikfunktion til Kalle Krabbe//
  kallekrabbe.addEventListener('click', function () {
    kallekrabbeLyd.currentTime = 0;
    kallekrabbeLyd.play();
    boble.textContent = 'Pas på der ikke går fisk i den!';
  });
};
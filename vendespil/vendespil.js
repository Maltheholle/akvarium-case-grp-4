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
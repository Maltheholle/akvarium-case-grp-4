'use strict';

//Tilføjer lyd til Kalle Krabbe ved klik//
const kallekrabbeLyd = new Audio('sounds/kallekrabbelyd.m4a');
kallekrabbeLyd.volume = 1.0;

// Tilføjer baggrundsmusik til vendespillet//
//Justerer lydstyrke for baggrundsmusik og krabbelyd //
const baggrundsLyd = new Audio('sounds/baggrundslyd.m4a');
baggrundsLyd.volume = 0.3;
baggrundsLyd.loop = true; 
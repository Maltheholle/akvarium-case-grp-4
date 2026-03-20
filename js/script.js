"use strict";
// Opbygger vores data-strukturer med med et Array som indeholder JS objekter
const fishInfo = [
   {
      className: "nemo",
      info: "Klovnfisk. Mit navn er nemo, jeg er 15 år gammel og kan findes i Stillehavet, det Indiske Ocean og the Great Barrier Reef i Australien. Jeg spiser både Plankton, Alger, Fiske-larver og æg. Jeg bor i den samme havanemone hele mit liv"
      
   },
   
   {
      className: "blob",
      info: "Blå Chromis fisk. Hej, jeg hedder Blob. Jeg bliver ca. 13 år gammel. Jeg lever i det østlige Indiske ocean. Når solen rammer mig skinner jeg som en stjerne. Jeg spiser både Plankton, Alger og mini-rejer. Jeg bliver ca. 7-10 cm lang"

   },

   {
      className: "dory",
      info:"Paletkirurgfisk. Hej, jeg hedder Dory og jeg bliver ca. 10-20 år gammel. Jeg lever i Stillehavet og det Indiske Ocean, blandt andet ved Great Barrier Reef i Australien. Jeg spiser plankton, små dyr i vandet og alger.Jeg bor ved et koralrev, hvor jeg svømmer rundt mellem korallerne og finder mad."
   },
   {
      className: "palle",
      info:"Pudsefisk. Hej, jeg hedder Palle Pudsefisk. Jeg bliver ca. 4-6 år gammel. Jeg lever i Stillehavet og Det Indiske Ocean. Jeg spiser parasitter, dødt hud og små dyr, som sidder på andre fisk. Jeg bor ved en “rengøringsstation” på koralrevet, hvor andre fisk kommer for at blive gjort rene"
   }
];



const tooltip = document.getElementById("tooltip");
let activeFish = null;

function closeTooltip() {
   if (tooltip) {
      tooltip.classList.remove("is-visible");
      tooltip.style.display = "none";
   }

   if (activeFish) {
      activeFish.classList.remove("paused");
      activeFish.classList.remove("active-fish");
      activeFish = null;
   }
}

function showTooltip(html) {
   if (tooltip) {
      tooltip.innerHTML = html;
      tooltip.classList.add("is-visible");
      tooltip.style.display = "block";
   }
}

fishInfo.forEach((fish) => {
   document.querySelectorAll("." + fish.className).forEach((elem) => {
      elem.addEventListener("click", () => {
         const [title, ...rest] = fish.info.split(".");
         const description = rest.join(".");

        if (activeFish) {
         activeFish.classList.remove("paused");
         activeFish.classList.remove("active-fish");
         }

         activeFish = elem;
         elem.classList.add("paused");
         elem.classList.add("active-fish");

         const fishDetails = `
         <div class="aquarium-popup">
         <div class="blue-bubble">
         <div class="close-icon">×</div>
         <h2>${title}</h2>
         <p>${description}</p>
         </div>
         </div>
         `;

         showTooltip(fishDetails);

         document.querySelector(".close-icon").addEventListener("click", closeTooltip);
      });
   });
});




 // Hent DOM Elementer 
const getBlob = document.getElementsByClassName("blob");
const getDory = document.getElementsByClassName("dory");
const getNemo = document.getElementsByClassName("nemo");
const getPalle = document.getElementsByClassName("palle");
const getKalle = document.getElementsByClassName ("krabbe");

const soundBlob = new Audio("audio/blob.m4a");
const soundNemo = new Audio("audio/nemo.m4a");
const soundDory = new Audio("audio/dory.m4a");
const soundPalle = new Audio("audio/palle.m4a");
const soundKalle= new Audio ("audio/kalle.m4a");

document.querySelectorAll(".blob").forEach((elem) => {
   elem.addEventListener("click", () => {
      soundBlob.play();
   });
});

document.querySelectorAll(".nemo").forEach((elem) => {
   elem.addEventListener("click", () => {
      soundNemo.play();
   });
});

document.querySelectorAll(".dory").forEach((elem) => {
   elem.addEventListener("click", () => {
      soundDory.play();
   });
});

document.querySelectorAll(".palle").forEach((elem) => {
   elem.addEventListener("click", () => {
      soundPalle.play();
   });
});

document.querySelectorAll(".krabbe").forEach((elem) => {
   elem.addEventListener("click", () => {
      soundKalle.play();
   });
});

function closeTooltip() {
   if (tooltip) {
      tooltip.classList.remove("is-visible");
      tooltip.style.display = "none";
   }

   if (activeFish) {
      activeFish.classList.remove("paused");
      activeFish.classList.remove("active-fish");
      activeFish = null;
   }

   // STOP ALLE LYDE
   soundBlob.pause();
   soundBlob.currentTime = 0;

   soundNemo.pause();
   soundNemo.currentTime = 0;

   soundDory.pause();
   soundDory.currentTime = 0;

   soundPalle.pause();
   soundPalle.currentTime = 0;

    soundKalle.pause();
   soundKalle.currentTime = 0;
}


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
      info:"Pudsefisk. Hej, jeg hedder Palle Pudsefisk Jeg bliver ca. 4-6 år gammelJeg lever i Stillehavet og Det Indiske OceanJeg spiser parasitter, dødt hud og små dyr, som sidder på andre fiskJeg bor ved en “rengøringsstation” på koralrevet, hvor andre fisk kommer for at blive gjort rene"
   }
];


//----------------------------------//
//ALT NEDEN FOR ER FORSKELLIGE COMMITS FRA EMILIE//
//----------------------------------//

 // finder tooltip id og gemmer det i en variabel
   const tooltip = document.getElementById("tooltip");

// Funktion der viser tooltip med biloplysninger
   // Parameter: html = den tekst indeholdende html-tags som vi vil vise i tooltip'en
   function showTooltip(html) {
      // Tjekker om tooltip-elementet eksisterer i DOM'en
      if (tooltip) {
         // Indsætter teksten i tooltip'en
         tooltip.innerHTML = html;
         // Gør tooltip'en synlig med css klassen
         tooltip.classList.add("is-visible");
         tooltip.style.display = "block";

         // Sætter en timer til at skjule tooltip'en efter 8 sekunder
         setTimeout( function() {
            // Fjerner css klassen så tooltip'en skjules igen
            tooltip.classList.remove("is-visible");
         },8000);
      }
   }

// Gennemløber info i array
   fishInfo.forEach((fish) => {
      // Finder alle HTML-elementer med den aktuelle bils className
      document.querySelectorAll("." + fish.className).forEach((elem) => {
            // Tilføjer mouseover event listener til hvert element
            elem.addEventListener("click", () => {
               // Opretter HTML-strengen med bilens detaljer
               const imageSrc = elem.getAttribute("src");

// !NATASJA COMMIT!//
const [title, ...rest] = fish.info.split(".");
const description = rest.join(".");

const fishDetails = `
    <div class="aquarium-popup">
        <img src="${imageSrc}" class="popup-fish-img">
        
        <div class="blue-bubble">
            <div class="close-icon" onclick="document.getElementById('tooltip').style.display='none'">×</div>
            
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
    </div>
`;
// !NATASJA COMMIT STOPPER HER!//
               // Kalder showTooltip funktionen med bilens detaljer
               showTooltip(fishDetails);
               elem.classList.toggle("paused")
            });

      });
   });
import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let pronoun = ["the", "our", "your", "my", "super", "mega", "ultra"];
  let adj = ["epic", "smart", "cloud", "agile", "neural", "crypto", "zenith"];
  let noun = ["hacker", "nexus", "logic", "flow", "code", "space", "vision"];
  let extension = [".com", ".es", ".ve", ".net",];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          let domainName = `${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`;
          console.log(domainName);
        }
      }
    }
  }

  let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let randomAdj = adj[Math.floor(Math.random() * adj.length)];
  let randomNoun = noun[Math.floor(Math.random() * noun.length)];
  let randomExtension = extension[Math.floor(Math.random() * extension.length)];

  const fullDomain = `${randomPronoun}${randomAdj}${randomNoun}${randomExtension}`;

  document.getElementById("dominio").innerHTML = fullDomain
};

"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:   
   Date:     

   Filename: js11.js


*/

window.addEventListener("load", init);

function init() {
   // Page Objects
   let stories = document.getElementById("stories");
   let news = document.getElementById("news");
   let sInput = document.getElementById("sInput");
   let sButton = document.getElementById("sButton"); 
   let suggestBox = document.getElementById("suggestBox");    
 
   const xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        
        if (xhr.status >= 200 && xhr.status < 300) {
            stories.innerHTML = xhr.responseText;
        } else {
            console.log("Request failed: " + xhr.statusText);
        }
      }
   }
   
   xhr.open("get", "commentary.html");
   xhr.send(null); 
}
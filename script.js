"use strict";
const input = document.querySelector("#input");
const dropdown = document.querySelector("#dropdown");
const output = document.querySelector("#output");

document.querySelector("#result").addEventListener("click", () => {
  const firstSpace = input.value.indexOf(" ");
  const lastSpace = input.value.lastIndexOf(" ");
  if (dropdown.value === "a") {
    output.value =
      input.value.charAt(0).toUpperCase() +
      input.value.substring(1).toLowerCase();
  }
  if (dropdown.value === "b") {
    output.value = input.value.substring(0, firstSpace);
  }
  if (dropdown.value === "c") {
    output.value = input.value.substring(0, firstSpace).length;
  }
  if (dropdown.value === "d") {
    output.value = input.value.substring(firstSpace + 1, lastSpace);
  }
  if (dropdown.value === "e") {
    if (input.value.endsWith(".jpg") || input.value.endsWith(".png")) {
      output.value = true;
    } else {
      output.value = false;
    }
  }
  if (dropdown.value === "f") {
    const astryx = "*";
    output.value = astryx.repeat(input.value.length);
  }
  if (dropdown.value === "g") {
    output.value =
      input.value.substring(0, 2).toLowerCase() +
      input.value.charAt(2).toUpperCase() +
      input.value.substring(3).toLowerCase();
  }
  if (dropdown.value === "h") {
    output.value = "i don´t work";
    //I AM STUCK HERE
    let space = input.value.split(" ");

    space.forEach((firstLetter) => {
      const capital = firstLetter.charAt(0).toUpperCase();
      console.log(capital);
    });
  }
});

//  clear forms
document.querySelector(".close").addEventListener("click", () => {
  input.value = "";
  output.value = "";
});

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { arrow } from "@popperjs/core";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const genRandom = arr => {
    return Math.floor(Math.random() * arr.length);
  };

  console.log(
    who[genRandom(who)] +
      " " +
      action[genRandom(action)] +
      " " +
      what[genRandom(what)] +
      " " +
      when[genRandom(when)]
  );
};

// Import stylesheets
import "./style.css";
import { interval } from "rxjs";
import {} from "rxjs/operators";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const countText = document.getElementById("count");
const stop = document.getElementById("stopBtn");
const count$ = interval(1000);

const countSubscription = count$.subscribe(val => {
  countText.innerHTML = String(val);
});

stop.addEventListener('click', () => countSubscription.unsubscribe())
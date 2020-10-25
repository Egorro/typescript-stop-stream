// Import stylesheets
import "./style.css";
import { Observable, interval } from "rxjs";
import { map, filter } from "rxjs/operators";

const stream$ = new Observable(observer => {
  setTimeout(() => observer.next(1), 100);
  setTimeout(() => observer.error('error'), 1000);
});

const subscription = stream$.subscribe(
  val => console.log('value: ', val),
  val => console.log('error text: ', val),
  () => console.log('comlete')
);

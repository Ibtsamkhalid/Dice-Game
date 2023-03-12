'use strict';
const gameevents = new Map([
  [17, 'Goals'],
  [36, 'itteration'],
  [96, 'local'],
  [45, 'Todo'],
  [18, 'Goals'],
  [23, 'No more'],
]);
const events = [...new Set(gameevents.values())];
console.log(events);
console.log(`An event happened, ${90 / gameevents.size}`);
const time = [...gameevents.keys()];
console.log(time);


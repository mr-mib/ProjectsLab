const now = new Date();

const monthIndex = now.getMonth();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = months[monthIndex];

const weekDayIndex = now.getDay();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const weekday = weekdays[weekDayIndex];

const day = now.getDate();

const year = now.getFullYear();

console.log(`Month: ${month}`);
console.log(`Day of the week: ${weekday}`);
console.log(`Day: ${day}`);
console.log(`Year: ${year}`);


function $(selector){return document.querySelector(selector)};

const monthEl = $(".month");
monthEl.textContent = `${month}`

const weekDay = $('.week-day');
weekDay.textContent = `${weekday}`;

const nameDay = $('.day');
nameDay.textContent = `${day}`;

const yearEl = $('.year');
yearEl.textContent = `${year}`

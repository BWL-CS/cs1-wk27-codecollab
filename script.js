// THIS IS A JS COMMENT (a note to yourself, ignored by browser)
// Comments in this program are used to identify different sections
// Pick one of the sections to focus on in your discussion post

// SECTION 1: Boolean Values
console.log("----- SECTION 1 ------");

let doorIsLocked = true;
let candleIsLit = false;

console.log("Is the door locked? " + doorIsLocked);
console.log("Is the candle lit? " + candleIsLit);


// SECTION 2: Conditional Expressions
console.log("----- SECTION 2 ------");

let ghostCount = 3; // try changing value!

console.log("Are there more than 2 ghosts?", (ghostCount > 2));
console.log("Are there exactly 3 ghosts?", (ghostCount == 3));
console.log("Is there only 1 ghost?", (ghostCount == 1));


// SECTION 3: if Statements
console.log("----- SECTION 3 ------");

let isNight = true; // try changing value!

if (isNight) {
  console.log("It's nighttime, the shadows are extra haunting...");
} 
else {
  console.log("Daylight! The ghosts are hiding for now.");
}


// SECTION 4: if, else if, else Blocks
console.log("----- SECTION 4 ------");

ghostCount = 1; // try changing value!

if (ghostCount == 0) {
  console.log("The hallway is eerily quiet... no ghosts at all.");
}
else if (ghostCount == 1) {
  console.log("A single ghost drifts by. It's a bit creepy! 👻");
}
else {
  console.log("The hall is swarming with ghosts! It's super spooky! 👻👻👻");
}


// SECTION 5: while Loop
console.log("----- SECTION 5 ------");

let scaresLeft = 4;

while (scaresLeft > 0) {
  console.log("BOO! You hear a spooky sound... Scares remaining: " + scaresLeft);
  scaresLeft--;
}

console.log("No more ghostly sounds. The corridor seems calmer now.");


// SECTION 6: for Loop
console.log("----- SECTION 6 ------");

for (let i = 1; i <= 3; i++) {
  console.log("Flicker #" + i + ": The lights dim and flicker... 🕯️");
}

console.log("The candle lights steady. Maybe it's safe... for now.");

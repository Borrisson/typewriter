const sentence = "hello there from lighthouse labs";
let x = 50;
for (const char of sentence) {
  if (sentence.length * 50  === x) { // if we are at the end of our sentence stop the process
    setTimeout(() => {
      process.stdout.write(char + '\n'); 
    }, x); 
    continue;
  }
  setTimeout(() => {
    process.stdout.write(char); // print char on one line.
  }, x); // <= 1s delay to make it noticeable. Can dial it down later.
  x += 50;
}


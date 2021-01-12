const sentence = "hello there from lighthouse labs";
let x = 50;
for (const char of sentence) {
  if (sentence.length * 50  === x) {
    setTimeout(() => {
      process.stdout.write('\n');
    }, x); // <= 1s delay to make it noticeable. Can dial it down later.
    continue;
  }
  setTimeout(() => {
    process.stdout.write(char);
  }, x); // <= 1s delay to make it noticeable. Can dial it down later.
  x += 50;
}


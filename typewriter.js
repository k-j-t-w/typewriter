const sentence = "Hello there, thanks for the pizza last night.";
let delay = 0;
for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay);
const word = document.querySelector('.word');
let strIndex = 0;
const phrases = [
  'a junior software programmer',
  'a web developer',
  'an UX UI world explorer'
];

function setText(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      word.innerHTML = t;
      resolve();
    }, 100);
  });
}

async function main() {
  const phrase = phrases[strIndex];
  for (let i = 1; i <= phrase.length; i++) {
    await setText(phrase.substr(0, i));
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  for (let i = phrase.length; i > 0; i--) {
    await setText(phrase.substr(0, i));
  }
  strIndex = (strIndex + 1) % phrases.length;
  main();
}

main();

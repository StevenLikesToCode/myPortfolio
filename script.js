let list = document.querySelector('.list')

list.innerHTML += list.innerHTML

let left = 0

setInterval(function (){
  left -= 0.1;
  if (left < -169){
    left = -59
  }
  list.style.left = left + 'rem'
}, 20)

const word = document.querySelector('.word');
let strIndex = 0;
const phrases = [
  'a junior programmer',
  'a web developer',
  'a full-stack software developer'
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

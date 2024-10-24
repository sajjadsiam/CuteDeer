let text = document.getElementById('text');
let bird = document.getElementById('bird');
let deer = document.getElementById('deer');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let plant = document.getElementById('plant');
let sun = document.getElementById('sun');
let tree = document.getElementById('tree');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 3 + 'px';

  deer.style.left = value * 2 + 'px';

  tree.style.left = value * 0.5 + 'px';

  hill1.style.opacity = 1 - value * 0.003;

  hill2.style.opacity = 1 - value * 0.003;
  hill2.style.left = value * -1.5 + 'px';

  sun.style.top = value * 1.5 + 'px';
  sun.style.left = value * -0.5 + 'px';
  sun.style.opacity = 1 - value * 0.001;

  bird.style.left = value * -1.5 + 'px';
  bird.style.top = value * 0.5 + 'px';
  bird.style.opacity = 1 - value * 0.005;
});

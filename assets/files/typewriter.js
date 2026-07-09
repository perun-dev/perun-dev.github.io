// Анимация "пишущей машинки" для perun.dev
const text = 'perun.dev';
const el = document.getElementById('typewriter-text');
const cursor = document.querySelector('.typewriter-cursor');
let i = 0;
let forward = true;

function type() {
  if (!el) return;
  if (forward) {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 120);
    } else {
      forward = false;
      setTimeout(type, 900);
    }
  } else {
    if (i >= 0) {
      el.textContent = text.slice(0, i);
      i--;
      setTimeout(type, 60);
    } else {
      forward = true;
      setTimeout(type, 500);
    }
  }
}

document.addEventListener('DOMContentLoaded', type);

// Мигающий курсор (CSS-анимация предпочтительнее, но дублируем на всякий случай)
setInterval(() => {
  if (cursor) cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
}, 500);

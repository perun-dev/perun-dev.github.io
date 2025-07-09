
// Анимация смены подзаголовка под perun.dev
(function() {
  const subtitles = ['Developer', 'Siberia'];
  let idx = 0;
  let i = 0;
  let forward = true;
  let el, cursor;

  function typeSubtitle() {
    if (!el) {
      el = document.getElementById('subtitle-typewriter');
      if (!el) return setTimeout(typeSubtitle, 100);
    }
    if (!cursor) cursor = document.querySelector('.subtitle-cursor');
    const text = subtitles[idx];
    el.textContent = text.slice(0, i);
    if (forward) {
      if (i < text.length) {
        i++;
        setTimeout(typeSubtitle, 110);
      } else {
        forward = false;
        setTimeout(typeSubtitle, 1200);
      }
    } else {
      if (i > 0) {
        i--;
        setTimeout(typeSubtitle, 60);
      } else {
        forward = true;
        idx = (idx + 1) % subtitles.length;
        setTimeout(typeSubtitle, 400);
      }
    }
  }

  window.addEventListener('DOMContentLoaded', function() {
    el = document.getElementById('subtitle-typewriter');
    cursor = document.querySelector('.subtitle-cursor');
    typeSubtitle();
  });

  // Мигающий курсор (на всякий случай, если не сработает CSS)
  setInterval(() => {
    if (cursor) cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
  }, 500);
})();

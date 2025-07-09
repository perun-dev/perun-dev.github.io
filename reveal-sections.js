// Этот скрипт добавляет/убирает класс .in-view для секций #experience и #projects при скролле
function onScrollRevealSections() {
  const revealSections = ['experience', 'projects'];
  revealSections.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    // Секция считается "в зоне видимости", если хотя бы 40% её высоты видимо
    const visible = rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.15;
    if (visible) {
      section.classList.add('in-view');
    } else {
      section.classList.remove('in-view');
    }
  });
}
window.addEventListener('scroll', onScrollRevealSections);
window.addEventListener('DOMContentLoaded', onScrollRevealSections);

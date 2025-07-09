// Мобильная навигация между секциями
function mobileNavInit() {
  const navBtns = document.querySelectorAll('.mobile-nav-btn');
  const sections = document.querySelectorAll('.mobile-section');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-target');
      sections.forEach(sec => {
        if (sec.id === target) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });
    });
  });
}
window.addEventListener('DOMContentLoaded', mobileNavInit);

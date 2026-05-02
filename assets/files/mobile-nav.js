// Мобильная навигация между секциями
document.addEventListener('DOMContentLoaded', function() {
  // Получаем все кнопки навигации и секции
  const navBtns = document.querySelectorAll('.mobile-nav-btn');
  const sections = document.querySelectorAll('.mobile-section');
  
  // Функция для переключения секций
  function switchSection(sectionId) {
    // Убираем активный класс со всех кнопок и секций
    navBtns.forEach(btn => btn.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    
    // Добавляем активный класс нужной кнопке и секции
    const activeBtn = document.querySelector(`.mobile-nav-btn[data-section="${sectionId}"]`);
    const activeSection = document.getElementById(sectionId);
    
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
    
    if (activeSection) {
      activeSection.classList.add('active');
    }
    
    // Прокручиваем страницу вверх при смене секции
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Добавляем обработчики событий для кнопок навигации
  navBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-section');
      switchSection(sectionId);
    });
  });
  
  // Проверяем, находимся ли мы на мобильном устройстве
  function isMobile() {
    return window.innerWidth <= 768;
  }
  
  // Инициализация - показываем первую секцию на мобильных устройствах
  function initMobileNav() {
    if (isMobile()) {
      // На мобильных устройствах показываем только активную секцию
      const activeBtn = document.querySelector('.mobile-nav-btn.active');
      if (activeBtn) {
        const sectionId = activeBtn.getAttribute('data-section');
        switchSection(sectionId);
      } else {
        // Если нет активной кнопки, активируем первую
        const firstSectionId = navBtns[0].getAttribute('data-section');
        switchSection(firstSectionId);
      }
    } else {
      // На десктопе показываем все секции
      sections.forEach(section => section.classList.add('active'));
    }
  }
  
  // Инициализация при загрузке страницы
  initMobileNav();
  
  // Обновление при изменении размера окна
  window.addEventListener('resize', initMobileNav);
});
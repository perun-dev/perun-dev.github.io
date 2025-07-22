// Liquid Glass Effects and Interactions

// Добавляем интерактивность к skill tags
document.addEventListener('DOMContentLoaded', function() {
  const skillTags = document.querySelectorAll('.skill-tag');
  
  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      // Добавляем ripple эффект
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Параллакс эффект для glass карточек
  const glassCards = document.querySelectorAll('.glass-card');
  
  document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    glassCards.forEach((card, index) => {
      const speed = (index % 3 + 1) * 0.5;
      const x = (mouseX - 0.5) * speed;
      const y = (mouseY - 0.5) * speed;
      
      card.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // Анимация появления элементов при скролле
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Наблюдаем за всеми glass элементами
  document.querySelectorAll('.glass-card, .business-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Добавляем случайные блики на glass элементы
  function addRandomGlare() {
    const glassElements = document.querySelectorAll('.glass-card');
    
    glassElements.forEach(element => {
      if (Math.random() > 0.7) { // 30% шанс
        element.classList.add('glare-effect');
        setTimeout(() => {
          element.classList.remove('glare-effect');
        }, 1000);
      }
    });
  }

  // Запускаем блики каждые 3-7 секунд
  setInterval(addRandomGlare, Math.random() * 4000 + 3000);
});

// Добавляем CSS для ripple эффекта
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .glare-effect::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    animation: glare-sweep 1s ease-out;
    pointer-events: none;
  }

  @keyframes glare-sweep {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
`;
document.head.appendChild(style);
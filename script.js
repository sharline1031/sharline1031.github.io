// Responsive navigation
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const bars = document.querySelectorAll('.bar');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  bars.forEach(bar => bar.classList.toggle('active'));
});

// Section toggle
const sections = document.querySelectorAll('section');

sections.forEach(section => {
  const heading = section.querySelector('h2');
  const content = section.querySelector('div');

  heading.addEventListener('click', () => {
    content.classList.toggle('hidden');
  });
});
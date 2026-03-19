// Smooth scroll for nav links
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Animate elements on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Simple contact form alert
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! Thank you.');
  e.target.reset();
});

// Select all overlays
const overlays = document.querySelectorAll('.portfolio-item .overlay');

// Add click events
overlays[0].addEventListener('click', () => {
  window.open('iley-designs.local', '_blank');
});

overlays[1].addEventListener('click', () => {
  window.open('https://project-10kzq.vercel.app/', '_blank');
});

overlays[2].addEventListener('click', () => {
  window.open('https://portfolio-eosin-five-jfg75bxuhj.vercel.app/', '_blank');
});

// Side Bar
function openMenu() {
  document.querySelector('.side-menu').style.right = '0';
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  document.querySelector('.side-menu').style.right = '-300px';
  document.body.classList.remove('no-scroll');
}

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.getElementById('hamburgerButton');
  const sideMenu = document.getElementById('sideMenu');
  const topBarLogo = document.getElementById('topBarLogo');
  const topNav = document.getElementById('navbar');
  const overlay = document.getElementById('overlay');

  function closeSideMenu() {
    sideMenu.classList.remove('open');
    overlay?.classList.add('hidden');
  }

  function toggleMenu() {
    const isOpen = sideMenu.classList.toggle('open');
    if (overlay) {
      overlay.classList.toggle('hidden', !isOpen);
    }
    if (isOpen) {
      closeAllDropdowns();
    }
  }

  hamburgerButton.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  topBarLogo?.addEventListener('click', closeSideMenu);
  sideBarLogo?.addEventListener('click', closeSideMenu);

  topNav?.addEventListener('click', closeSideMenu);

  overlay?.addEventListener('click', closeSideMenu);
});

// Close Right-Bar
document.addEventListener('click', function(e) {
  if (sideMenu.classList.contains('open') && !sideMenu.contains(e.target) && e.target !== hamburgerButton) {
    sideMenu.classList.remove('open');
  }
});
let toggle = document.getElementById('hamburgerButton');
toggle.addEventListener('click',() => {
    document.documentElement.classList.toggle('dark')
    document.documentElement.classList.contains('dark')? toggle.innerText = "☰" : toggle.innerText = "☰"
})

// Main Content Animation
const reveals = document.querySelectorAll('.reveal');
      
window.addEventListener('scroll', () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('opacity-100', 'translate-y-0');
      el.classList.remove('opacity-0', 'translate-y-10');
    }
  });
});

// Navbar Scroll
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollY = window.scrollY;
});

// Cards Transition
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  // 3 Cards
  cards.forEach((card, index) => {
    if (index < 3) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 300);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach((card, index) => {
    if (index >= 3) {
      observer.observe(card);
    }
  });
});

// FAQ Features
document.querySelectorAll('.faq-btn').forEach(btn => 
  { 
    btn.addEventListener('click', () => { 
      const content = btn.nextElementSibling; const icon = btn.querySelector('svg'); content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px'; icon.classList.toggle('rotate-180'); 
    }); 
  }); 

// Sidebar Button Close
let lastScrollTop = 0;

function openSidebar() {
document.getElementById("overlay").classList.remove("hidden");
document.body.classList.add("overflow-hidden");
}

function closeSidebar() {
document.getElementById("sideMenu").classList.add("hidden");
document.getElementById("overlay").classList.add("hidden");
document.body.classList.remove("overflow-hidden");
}

document.getElementById('overlay').addEventListener('click', closeSidebar);

document.querySelector('.btn-close').addEventListener('click', closeSidebar);

function closeSidebar() {
document.getElementById('sideMenu').classList.remove('open');
document.getElementById('overlay').classList.add('hidden');
}

// Hero Section Effect
const images = [
  "IMG/Background 3.jpg",
  "IMG/Background 4.jpg",
  "IMG/Background 7.jpg",
  "IMG/Background 6.jpg"
];

let current = 0;
let next = 1;

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

setInterval(() => {
  // Active - Next
  const activeImg = current % 2 === 0 ? img1 : img2;
  const nextImg = current % 2 === 0 ? img2 : img1;

  nextImg.src = images[next];

  // Fade effect
  activeImg.classList.remove("opacity-100");
  activeImg.classList.add("opacity-0");

  nextImg.classList.remove("opacity-0");
  nextImg.classList.add("opacity-100");

  current = next;
  next = (next + 1) % images.length;
}, 5000);

// Parallax Effect
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const parallax = document.getElementById("parallax");
  parallax.style.transform = `translateY(${scrollY * 0.3}px)`;
});

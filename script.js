// Hàm nạp component HTML vào phần tử
async function loadComponent(id, file) {
  const res = await fetch(`components/${file}`);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}


// Nạp tất cả component
async function init() {
  await Promise.all([
    loadComponent("header", "header.html"),
    loadComponent("delivery", "delivery.html"),
    loadComponent("slideshow", "slideshow.html"),
    loadComponent("featured", "featured.html"),
    loadComponent("trail-acg", "trail-acg.html"),
    loadComponent("shop-by-sport", "shop-by-sport.html"),
    loadComponent("footer", "footer.html"),
  ]);


  initSlideshow();

}

// Slideshow
function initSlideshow() {
  const slides = document.querySelectorAll(".slideshow img");
  const dotsContainer = document.querySelector(".dots-container");
  if (!slides.length || !dotsContainer) return;

  let currentSlide = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.index = i;
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
  }

  function showDot(n) {
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[n].classList.add("active");
  }

  function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
    showDot(currentSlide);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
  }

  goToSlide(0);
  setInterval(nextSlide, 3000);
}



init();

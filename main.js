const carousel = document.getElementById('carousel');
  const itemWidth = () => carousel.querySelector('.carousel-item').offsetWidth + 16; // 16px = gap

  document.querySelector('.next').addEventListener('click', () => {
    carousel.scrollBy({ left: itemWidth(), behavior: 'smooth' });
});

document.querySelector('.prev').addEventListener('click', () => {
    carousel.scrollBy({ left: -itemWidth(), behavior: 'smooth' });
});

window.addEventListener('resize', () => {
    // Optional: snap back to nearest item on resize
    carousel.scrollTo({ left: Math.round(carousel.scrollLeft / itemWidth()) * itemWidth(), behavior: 'smooth' });
});

const mediaitemWidth = () => {
    const item = carousel.querySelector('.carousel-item');
    const style = getComputedStyle(carousel);
    const gap = parseInt(style.gap) || 0;
    return item.offsetWidth + gap;
};
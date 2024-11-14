document.querySelectorAll('.nav-link').forEach(link => {
   link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      smoothScroll(targetSection, 1000);
   });
});

function smoothScroll(target, duration) {
   const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
   const startPosition = window.pageYOffset;
   const distance = targetPosition - startPosition;
   let startTime = null;

   function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
   }

   function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
   }

   requestAnimationFrame(animation);
}

document.querySelectorAll('.nav-link').forEach(link => {
   link.addEventListener('click', () => {
      link.classList.toggle('flipped');
   });
});

document.querySelector('.goTop').addEventListener('click', event => {
   event.preventDefault();
   window.scrollTo({
      top: 0,
      behavior: 'smooth',
   });
});

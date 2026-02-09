const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(1.3)' }, { transform: 'scale(1)' }],
    { duration: 3000, iterations: Infinity }
  );
});


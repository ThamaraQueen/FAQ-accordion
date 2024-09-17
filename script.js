const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(item => {
  const question = item.querySelector('.question');
  const para = item.querySelector('.para');
  const plus = item.querySelector('.plus');
  const minus = item.querySelector('.minus');

  question.addEventListener('click', function() {
    // Toggle hidden class for plus, minus, and the paragraph
    plus.classList.toggle('hidden');
    minus.classList.toggle('hidden');
    para.classList.toggle('hidden');
  });
});

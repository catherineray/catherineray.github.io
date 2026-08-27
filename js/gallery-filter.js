document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('#filter-buttons .filter');
  const galleryItems = document.querySelectorAll('.thumbnails a');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      galleryItems.forEach(item => {
        if (filter === 'all') {
          item.style.display = 'inline-block';
        } else if (item.classList.contains(filter)) {
          item.style.display = 'inline-block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

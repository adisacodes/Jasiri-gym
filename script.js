const filterButtons = document.querySelectorAll('.filter-btn')
const classCards = document.querySelectorAll('.class-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        classCards.forEach(card => {
            if (filter==='all') {
                card.style.display = 'block';
            } else if (card.getAttribute('data-category') === filter) {
                card.style.display ='block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
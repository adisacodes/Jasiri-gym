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


const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit',function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const selectedClass = document.getElementById('class').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;


    localStorage.setItem('confirm-name', name);
    localStorage.setItem('confirm-email', email);
    localStorage.setItem('confirm-phone', phone);
    localStorage.setItem('confirm-class', selectedClass);
    localStorage.setItem('confirm-date', date);
    localStorage.setItem('confirm-time', time);

    window.location.href = 'confirmation.html';
    });
}

const confirmName = document.getElementById('confirm-name');
if (confirmName) {
    document.getElementById('confirm-name').textContent = localStorage.getItem('confirm-name');
    document.getElementById('confirm-email').textContent = localStorage.getItem('confirm-email');
    document.getElementById('confirm-phone').textContent = localStorage.getItem('confirm-phone');
    document.getElementById('confirm-class').textContent = localStorage.getItem('confirm-class');
    document.getElementById('confirm-date').textContent = localStorage.getItem('confirm-date');
    document.getElementById('confirm-time').textContent = localStorage.getItem('confirm-time');
}

const exerciseCards = document.getElementById('exerciseCards');

if (exerciseCards) {
    fetch('https://wger.de/api/v2/exerciseinfo/?format=json&language=2&limit=9')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.results[0]);
        exerciseCards.innerHTML = '';
        data.results.forEach(function(exercise) {
            const englishTranslation = exercise.translations.find(function(t) {
                return t.language ===2;
            });
            const name = englishTranslation? englishTranslation.name:null;
            const description = englishTranslation&&englishTranslation.description? englishTranslation.description.replace(/<[^>]*>/g, '').substring(0, 100)+'...' : 'A great exercise for your fitness journey.';
            
                const card = document.createElement('div');
                card.classList.add('exercise-card');
                card.innerHTML = `
                    <h3>${name}</h3>
                    <p>${description}</p>
                `;
                exerciseCards.appendChild(card);
        });
    })
    .catch(function(error) {
        exerciseCards.innerHTML = '<p>Unable to load exercises at this time. Please try again later.</p>';
    });
}
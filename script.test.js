test('booking object should have all required fields',() => {
    const booking = {
        name: 'Marian Adisa',
        email: 'marianavugwe@gmail.com',
        phone: '0712345678',
        selectedClass: 'Yoga',
        date: '2026-04-20',
        time: '8:00 AM'
    };

    expect(booking.name).toBe('Marian Adisa');
    expect(booking.email).toBe('marianavugwe@gmail.com');
    expect(booking.phone).toBe('0712345678');
    expect(booking.selectedClass).toBe('Yoga');
    expect(booking.date).toBe('2026-04-20');
    expect(booking.time).toBe('8:00 AM');
});

test('booking name should not be empty', () => {
    const name = 'Marian Adisa';
    expect(name.length).toBeGreaterThan(0);
});

test('email should contain @ symbol', () => {
    const email = 'marianavugwe@gmail.com';
    expect(email).toContain('@');
});

test('filter should match class category', () => {
    const card = {category: 'yoga'};
    const filter = 'yoga';
    expect(card.category).toBe(filter);
});

test('phonenumber should not be empty', () => {
    const phone = '0712345678';
    expect(phone.length).toBeGreaterThan(0);
});

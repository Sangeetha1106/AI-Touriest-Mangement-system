module.exports = { create: (data) => { if (!data.bookingId || !data.amount) return 'Booking ID and amount are required'; return null; } };

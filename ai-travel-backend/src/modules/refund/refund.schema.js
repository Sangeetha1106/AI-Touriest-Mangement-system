module.exports = { create: (data) => { if (!data.paymentId || !data.amount) return 'Payment ID and amount are required'; return null; } };

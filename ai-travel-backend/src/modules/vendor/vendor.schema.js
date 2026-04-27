module.exports = { create: (data) => { if (!data.name || !data.email) return 'Name and email are required'; return null; } };

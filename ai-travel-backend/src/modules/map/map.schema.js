module.exports = { create: (data) => { if (!data.latitude || !data.longitude) return 'Coordinates required'; return null; } };

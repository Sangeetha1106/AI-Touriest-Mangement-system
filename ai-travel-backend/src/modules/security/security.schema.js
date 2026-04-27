module.exports = { create: (data) => { if (!data.action || !data.userId) return 'Action and User ID are required'; return null; } };

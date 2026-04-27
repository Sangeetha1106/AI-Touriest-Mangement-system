module.exports = {
  create: (data) => {
    if (!data.userId) return 'User ID required';
    return null;
  }
};

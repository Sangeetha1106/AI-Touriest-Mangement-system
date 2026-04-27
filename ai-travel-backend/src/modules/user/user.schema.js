// Validation logic for User module
module.exports = {
  create: (data) => {
    if (!data.email || !data.password || !data.name) return 'Missing required fields';
    return null;
  }
};

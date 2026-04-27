module.exports = {
  create: (data) => {
    if (!data.name) return 'Name is required';
    return null;
  }
};

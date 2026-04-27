module.exports = {
  create: (data) => {
    if (!data.title || !data.startDate) return 'Title and start date are required';
    return null;
  }
};

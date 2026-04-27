module.exports = {
  create: (data) => {
    if (!data.prompt) return 'Prompt is required';
    return null;
  }
};

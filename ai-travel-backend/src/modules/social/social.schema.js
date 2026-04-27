module.exports = {
  validateCreate: (data) => {
    const errors = [];
    if (!data.userId) errors.push('userId is required');
    if (!data.content) errors.push('content is required');
    return errors.length > 0 ? errors : null;
  }
};

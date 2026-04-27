module.exports = {
  validateCreate: (data) => {
    const errors = [];
    if (!data.userId) errors.push('userId is required');
    if (!data.title) errors.push('title is required');
    if (!data.message) errors.push('message is required');
    if (!data.type) errors.push('type is required');
    return errors.length > 0 ? errors : null;
  }
};

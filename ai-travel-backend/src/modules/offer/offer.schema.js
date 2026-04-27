module.exports = {
  validateCreate: (data) => {
    const errors = [];
    if (!data.title) errors.push('title is required');
    if (!data.discountPercentage) errors.push('discountPercentage is required');
    if (!data.startDate) errors.push('startDate is required');
    if (!data.endDate) errors.push('endDate is required');
    return errors.length > 0 ? errors : null;
  }
};

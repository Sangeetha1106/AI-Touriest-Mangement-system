module.exports = {
  validateCreate: (data) => {
    const errors = [];
    if (!data.userId) errors.push('userId is required');
    if (!data.bookingType) errors.push('bookingType is required');
    if (!data.referenceId) errors.push('referenceId is required');
    if (!data.startDate) errors.push('startDate is required');
    if (!data.endDate) errors.push('endDate is required');
    return errors.length > 0 ? errors : null;
  }
};

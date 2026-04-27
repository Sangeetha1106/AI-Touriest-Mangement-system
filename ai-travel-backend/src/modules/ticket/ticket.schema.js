module.exports = {
  validateCreate: (data) => {
    const errors = [];
    if (!data.userId) errors.push('userId is required');
    if (!data.transportId) errors.push('transportId is required');
    if (!data.fromLocation) errors.push('fromLocation is required');
    if (!data.toLocation) errors.push('toLocation is required');
    if (!data.travelDate) errors.push('travelDate is required');
    if (!data.price) errors.push('price is required');
    return errors.length > 0 ? errors : null;
  }
};

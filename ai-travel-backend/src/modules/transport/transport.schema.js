module.exports = {
  validateCreate: (data) => {
    const errors = [];
    if (!data.type) errors.push('type is required');
    if (!data.name) errors.push('name is required');
    if (!data.fromLocation) errors.push('fromLocation is required');
    if (!data.toLocation) errors.push('toLocation is required');
    if (!data.price) errors.push('price is required');
    if (!data.departureTime) errors.push('departureTime is required');
    return errors.length > 0 ? errors : null;
  }
};

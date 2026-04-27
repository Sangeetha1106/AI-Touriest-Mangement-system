module.exports = {
  validateCreate: (data) => {
    const errors = [];
    if (!data.name) errors.push('name is required');
    if (!data.price) errors.push('price is required');
    if (!data.duration) errors.push('duration is required');
    if (!data.destination) errors.push('destination is required');
    return errors.length > 0 ? errors : null;
  }
};

module.exports = {
  validateCreate: (data) => {
    const errors = [];
    if (!data.name) errors.push('Name is required');
    if (!data.location) errors.push('Location is required');
    if (!data.pricePerNight) errors.push('Price per night is required');
    return errors.length > 0 ? errors : null;
  }
};

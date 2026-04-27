module.exports = {
  create: (data) => {
    if (!data.totalBudget) return 'Total budget is required';
    return null;
  }
};

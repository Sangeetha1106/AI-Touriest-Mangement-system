module.exports = {
  register: (data) => {
    if (!data.email || !data.password || !data.name) return 'Missing required fields';
    return null;
  },
  login: (data) => {
    if (!data.email || !data.password) return 'Email and password required';
    return null;
  }
};

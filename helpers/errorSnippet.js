module.exports = e => {
  console.error(e.message);
  res.status(500).send('Server Error');
};

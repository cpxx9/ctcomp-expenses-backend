const displayHome = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'Root of the API' });
};

module.exports = {
  displayHome,
};

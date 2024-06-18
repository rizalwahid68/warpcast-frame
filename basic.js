module.exports = (req, res) => {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'Request received' });
  } else {
    res.status(404).json({ error: 'Not Found' });
  }
};

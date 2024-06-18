const express = require('express');
const path = require('path');
const app = express();

// Folder untuk menyajikan file statis
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint POST untuk mengakses park-3.png
app.post('/park-3.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'park-3.png'));
});

// Menjalankan server pada port yang ditentukan oleh Vercel
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

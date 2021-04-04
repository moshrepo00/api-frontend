const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const basicAuth = require('express-basic-auth');

app.use((req, res, next) => {
  const obj = {
    [process.env.USER]: process.env.PASS
  };
  if (process.env.PROD) {
    return basicAuth({
      users: obj,
      challenge: true,
    })(req, res, next);
  } else {
    next();
  }
});
app.use(express.static(path.join(__dirname, '../dist/drupal-api-frontend')));
app.get('*', (req, res) => {
  const dist = path.join(__dirname, '../dist/drupal-api-frontend/index.html');
  res.sendFile(dist);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

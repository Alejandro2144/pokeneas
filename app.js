const express = require('express');
const routes = require('./src/api/routes/pokeneaRoutes');

const app = express();
const port = 80;

app.use('/', routes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

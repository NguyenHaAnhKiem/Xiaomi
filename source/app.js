const path = require('path');
const express = require('express');
require('express-async-errors');

const app = express();
const port = 3000;
const route = require("./routes/index.route");

// engine handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// use body
app.use(express.urlencoded({
  extended: true
}));

// Middlewares
require('./app/middlewares/view.mdw')(app);

// register static 
app.use(express.static(path.join(__dirname, 'public')));

// route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})
const exphbs = require('express-handlebars');
const hbs_sections = require('express-handlebars-sections');
const bcrypt = require('bcrypt');
const numeral = require('numeral');
module.exports = function (app) {
app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: {
      section: hbs_sections(),
      sum: (a,b) => a + b,
      sosanh: (a, b) => a === b,
      nhohon: (a, b) => a <= b,
      format(val) {
        return numeral(val).format('0,0');
      }
    }
  }));
  app.set('view engine', 'hbs');
}
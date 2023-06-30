const express = require('express')
const app = express()
const path = require('path');
const morgan = require('morgan')
const { engine } = require ('express-handlebars');
var bodyParser = require('body-parser');
const port = 3000

const route = require('./routes/index');
const db = require('./app/config/db/index');

//connect db
db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//static file
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//console.log(__dirname);

//Route init
route(app); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
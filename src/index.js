const path = require('path');
const morgan = require('morgan');
const express = require('express');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');

const db = require('./config/db');
const routes = require('./routes');

const app = express();
const port = 3000;

//connect to DB
db.connect();

//  Middleware
// handle req.body
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// override method
app.use(methodOverride('_method'));

//config static file
app.use(express.static(path.join(path.resolve(), 'src', 'public')));

//template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            select: (cmp, value) => {
                return cmp === value ? 'selected' : '';
            },
            dateFormat: (timestamp) => {
                return timestamp.toDateString();
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

//HTTP logger
app.use(morgan('combined'));

//routes
routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

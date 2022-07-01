import path from 'path';
import morgan from 'morgan';
import express from 'express';
import { engine } from 'express-handlebars';

import routes from './routes';

const app = express();
const port = 3000;

//config static file
app.use(express.static(path.join(path.resolve(), 'src/public')));

//template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

//HTTP logger
app.use(morgan('combined'));

//routes
routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

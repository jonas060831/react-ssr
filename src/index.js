import express from 'express';
import dotenv, { config } from 'dotenv';

import renderer from './helpers/renderer';

import lanipaddress from '../lanipaddress';

const app = express();

const PORT = process.env.REACT_APP_PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {

    res.send(renderer(req));
});

app.listen( PORT, (req) => {
    console.log('\n')
	console.log(`Local: \t \t http://localhost:${PORT}`)
    console.log(`On Your Network: http://${lanipaddress}:${PORT} \n`)
});
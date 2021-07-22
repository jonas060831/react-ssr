import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import dotenv, { config } from 'dotenv';

import Home from './client/components/Home';

import lanipaddress from '../lanipaddress';

const app = express();

const PORT = process.env.REACT_APP_PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {

    const content = renderToString(<Home/>);

    const html = `
        <html>
            <head></head>
            <body>
              <div>${content}</div>
              <script src="bundle.js"></script>  
            </body>
        </html>
    `;

    res.send(html)
})

app.listen( PORT, (req) => {
    console.log('\n')
	console.log(`Local: \t \t http://localhost:${PORT}`)
    console.log(`On Your Network: http://${lanipaddress}:${PORT}`)
});
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
require('dotenv').config()

const app = express();

const Home = require('./client/components/Home').default;

const PORT = process.env.REACT_APP_PORT || 3000;

app.get('/', (req, res) => {

    const content = renderToString(<Home/>);


    res.send(content)
})


app.listen( PORT, () => {
	console.log(`Listening on PORT ${PORT}`)
});
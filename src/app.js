require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const morganSetting = (process.env.NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

app.use(morgan(morganSetting));
app.use(helmet());
app.use(cors());

module.exports = app;
const express = require('express');
const mongoose = require('mongoose');

const userModel = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;
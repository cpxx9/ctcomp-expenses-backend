const { Router } = require('express');
const passport = require('passport');
const { displayHome } = require('../controllers/indexController');
const { usersRouter } = require('./usersRouter');

const indexRouter = Router();

indexRouter.get('/', displayHome);

indexRouter.use('/users', usersRouter);

module.exports = {
  indexRouter,
};

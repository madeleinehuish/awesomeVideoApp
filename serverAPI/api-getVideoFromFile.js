'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/api-getVideoFromFile', (req, res, next) => {

	knex('videos')
		.where('id', '1')
		.then((row) => {

			res.send(row);
		})
		.catch((err) => {
      next(err);
    });

})

module.exports = router;

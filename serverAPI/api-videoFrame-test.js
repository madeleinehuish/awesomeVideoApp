'use strict';

const express = require('express');
const router = express.Router();
const VideoFrame = require('../VideoFrame/VideoFrame');

console.log('The api video frame section works!!!');

router.get(`/api-video-test`, (req, res, next) => {
	console.log('Got through!!!');
})


module.exports = router;

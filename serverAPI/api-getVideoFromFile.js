'use strict';

const express = require('express');
const router = express.Router();
const ffmpeg = require('ffmpeg');
const exec = require('child_process').exec;
const fs = require('fs');



let file = '';

const cmd = `ffmpeg -i ~/Projects/videoApp/serverAPI/video1.avi -vf fps=1 ~/Projects/videoApp/serverAPI/Output/outpu%d.png`;


router.get('/api-getVideoFromFile', (req, res, next) => {

	console.log(req.body);

	// const path = __dirname + "/Output";

})

module.exports = router;

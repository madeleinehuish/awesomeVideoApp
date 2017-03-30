'use strict';

const express = require('express');
const router = express.Router();
const ffmpeg = require('ffmpeg');

const exec = require('child_process').exec;
const cmd = `ffmpeg -i ~/Projects/videoApp/serverAPI/video1.avi -vf fps=1 ~/Projects/videoApp/serverAPI/Output/outpu%d.png`;

exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
	console.log(stdout);
	console.log(stderr);
});

//this works
// const ffmpegFluent = require('fluent-ffmpeg');


// const command = ffmpeg();
// const mp4 = require('mp4');
// const destinationFolder = './Output';


//this works
// const video = ffmpegFluent()
//   .addInput('./Videos/video1.mp4');
//
// console.log(video._outputs);

//this is from ffmpeg and is not working
// const vid = new ffmpeg('./Videos/video1.mp4');


// try {
// 	new ffmpeg('./Videos/video1.mp4', function (err, vid) {
// 		console.log('got into function');
// 		if (!err) {
// 			console.log('The video is ready to be processed');
//
// 		} else {
// 			console.log('Error: ' + err);
// 		}
// 	});
// } catch (e) {
// 	console.log('got into error part');
// 	console.log(e.code);
// 	console.log(e.msg);
// }

// vid.fnExtractFrameToJPG(destinationFolder, () => {
//   console.log('extraction working');
// })


console.log('The api video frame section works!!!');



router.get(`/api-video-test`, (req, res, next) => {
	console.log('Got through!!!');
	// res.send(video);
})


module.exports = router;

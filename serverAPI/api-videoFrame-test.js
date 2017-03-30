'use strict';

const express = require('express');
const router = express.Router();
const ffmpeg = require('ffmpeg');
const ffmpegFluent = require('fluent-ffmpeg');
// const command = ffmpeg();
// const mp4 = require('mp4');
// const destinationFolder = './Output';



const video = ffmpegFluent()
  .addInput('./Videos/video1.mp4');

console.log(video._outputs);

//this is from ffmpeg and is not working
// const vid = new ffmpeg('./Videos/video1.mp4');


// try {
// 	new ffmpeg('./Videos/video1.mp4', function (err, vid) {
// 		if (!err) {
// 			console.log('The video is ready to be processed');
// 		} else {
// 			console.log('Error: ' + err);
// 		}
// 	});
// } catch (e) {
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

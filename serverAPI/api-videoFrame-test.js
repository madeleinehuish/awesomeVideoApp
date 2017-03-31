'use strict';

const express = require('express');
const router = express.Router();
const ffmpeg = require('ffmpeg');
let fileArr = [];
const exec = require('child_process').exec;

const cmd = `ffmpeg -i ~/Projects/videoApp/serverAPI/video1.avi -vf fps=1 ~/Projects/videoApp/serverAPI/Output/outpu%d.png`;

let result = exec(cmd, (error, stdout, stderr) => {
	// console.log(stdout);
});

console.log('this one');
// console.log(result);
console.log('this one^');

//new thing to try
const fs = require('fs');

const path = __dirname + "/Output";

//this is asynchronous so fileArr might not be accessible afterwards. might want to set it up better
fs.readdir(path, (err, items) => {

    for (var i=0; i<items.length; i++) {
        fileArr[i]=items[i];
    }
    console.log(fileArr);
})

router.get(`/api-video-test`, (req, res, next) => {
	console.log('Got through!!!');
})

module.exports = router;

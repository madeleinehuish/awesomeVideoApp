'use strict';

const express = require('express');
const router = express.Router();
const ffmpeg = require('ffmpeg');
let fileArr = [];
const exec = require('child_process').exec;
const fs = require('fs');
const cmd = `ffmpeg -i ~/Projects/videoApp/serverAPI/video1.avi -vf fps=1 ~/Projects/videoApp/serverAPI/Output/outpu%d.png`;
const path = __dirname + "/Output";

router.get('/api-videoFrame-test', (req, res, next) => {

let result = exec(cmd, (error, stdout, stderr) => {
	// console.log(stdout);
});

console.log('this one');
console.log(result);
console.log('this one^');

const promise = new Promise((resolve, reject) => {
  fs.readdir(path, (err, items) => {

    for (var i=0; i<items.length; i++) {
      fileArr[i]=items[i];
    }
    resolve (fileArr);
  })
}).then((fileArr) => {
  console.log('yup');
  console.log(fileArr);
  console.log('yup');
  res.send(fileArr);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});


  console.log('You are in api-video-test');
  // let message = JSON.parse(fileArr);

})


module.exports = router;

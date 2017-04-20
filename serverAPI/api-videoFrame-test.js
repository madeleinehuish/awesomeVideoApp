'use strict';

const express = require('express');
const router = express.Router();
const ffmpeg = require('ffmpeg');
let fileArr = [];
const exec = require('child_process').exec;
const fs = require('fs');
var emptydir = require('emptydir');
// const cmd = `ffmpeg -i ~/Projects/videoApp/serverAPI/video1.avi -vf fps=1 ~/Projects/videoApp/serverAPI/Output/outpu%d.png`;
const testVideo = 'https://madeleinehuish-videoapp.s3.amazonaws.com/Videos/video1.mp4';
const cmd = `ffmpeg -i ${testVideo} -vf fps=1 ~/Projects/videoApp/serverAPI/Output/output%d.png`;
const path = __dirname + "/Output";

router.get('/api-videoFrame-test', (req, res, next) => {

  emptydir.emptyDir(path, (errs) => {
    if (errs) {
        errs.forEach((err) => {
            console.log(err.path + " failed due to " + err.code);
        });
    }
    let result = exec(cmd, (error, stdout, stderr) => {
    	// console.log(stdout);
    });
  });

  //due to asynch, this part happens usually before the deletion
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
  // });


  console.log('You are in api-video-test');
  // let message = JSON.parse(fileArr);

})

});
module.exports = router;

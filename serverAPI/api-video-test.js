'use strict';

const express = require('express');
const router = express.Router();

const Clarifai = require('clarifai');

const app = new Clarifai.App(
  'G1dbsvtiFfg2jZFacix9KT1YrrwTRy-H7JuvT3TE',
  '5CY6ghxF2d_cuVVMV_weo_C_vLGN_7nY1KVXOkjF'
);

const image1 = 'https://samples.clarifai.com/metro-north.jpg';
const image2 = 'http://travelchannel.sndimg.com/content/dam/images/travel/fullset/2014/12/3/top-10-caribbean-beaches-eagle-beach-aruba.jpg.rend.tccom.1280.960.jpeg';
// predict the contents of an image by passing in a url

//took this out temporarily to see server easier
// app.models.predict(Clarifai.GENERAL_MODEL, [image1, image2]).then(
//   function(response) {
//     console.log(response.outputs[0].data, response.outputs[1].data);
//   },
//   function(err) {
//     console.error(err);
//   }
// );

module.exports = router;

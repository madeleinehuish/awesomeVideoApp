'use strict';

const express = require('express');
const router = express.Router();

const Clarifai = require('clarifai');

const app = new Clarifai.App(
  'G1dbsvtiFfg2jZFacix9KT1YrrwTRy-H7JuvT3TE',
  '5CY6ghxF2d_cuVVMV_weo_C_vLGN_7nY1KVXOkjF'
);

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
  .then(
    function(response) {
      console.log(response);
    },
    function(err) {
      console.error(err);
    }
);

// search for concepts
function searchImage(response) {
  app.inputs.search({
    concept: {
      name: 'beach'
    }
  }).then(
    function(response) {
      console.log(response);
    },
    function(response) {
      console.error(response);
    }
  );
}

// add some inputs
app.inputs.create('http://travelchannel.sndimg.com/content/dam/images/travel/fullset/2014/12/3/top-10-caribbean-beaches-eagle-beach-aruba.jpg.rend.tccom.1280.960.jpeg').then(
  searchImage,
  function(err) {
    console.error(err);
  }
);



module.exports = router;

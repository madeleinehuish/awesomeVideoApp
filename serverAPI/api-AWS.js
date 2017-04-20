'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const boom = require('boom');
const fs = require('fs');

const AWS = require('aws-sdk');
const s3 = new AWS.S3({ ContentType: 'video/mp4'});
// const videos = [];

const myBucket = 'madeleinehuish-videoapp';
const myKey = 'Videos/video1.mp4';
// const myKey = 'Text/test.txt'
const params = {
  Bucket: myBucket,
  Key: myKey
};


router.get('/api-getVideoFromAWS', (req, res, next) => {
  const url = s3.getSignedUrl('getObject', params);
  const modifiedUrl = url.substring(0, url.indexOf('?'));
  console.log('The URL is', modifiedUrl);
  res.send(modifiedUrl);
})
// router.get('/api-getVideoFromAWS', (req, res, next) => {
//   s3.getObject(params, (err, data) => {
//     if (err) {
//       console.error(err);
//       return next(boom.create(500, 'S3 Error', err))
//     }
//     const buf = new Buffer.from(data.Body);
//     let test = buf.isEncoding('utf-8');
//     console.log(test);
//     // let objectData = data.Body.toString('hex');
//     // console.log(objectData);
//     // res.send(objectData);
//   })
// })

// router.get('/api-getVideoFromAWS', (req, res, next) => {
//   s3.getObject(params, (err, data) => {
//     if (err) {
//       console.error(err);
//       return next(boom.create(500, 'S3 Error', err))
//     }
//     console.log(data);
//     res.send(data);
//     // let objectData = data.Body.toString('utf-8');
//     // console.log(objectData);
//     // res.send(`https://s3-us-west-2.amazonaws.com/madeleinehuish-videoapp/Videos/video1.mp4`);
//   })
// })





module.exports = router;

// // knex material
// knex('videos')
// 	.where('id', '1')
// 	.then((row) => {
//
// 		res.send(row);
// 	})
// 	.catch((err) => {
		// next(err);});


    // //this code is for post
    // const created_at = new Date()
    // const updated_at = new Date()
    // const published_at = created_at
    //
    // knex('images').insert({user_id, name, filereference, updated_at}, '*')
    //   .then(([image]) => {
    //     knex('projects').where('hash_id', image.url).update({published_at}, '*')
    //       .then(() => res.send(image))
    //   }).catch(err => next(boom.create(500, 'Database error',err)))

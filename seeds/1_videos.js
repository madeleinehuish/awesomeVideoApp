'use strict';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      // Inserts seed entries
      return knex('videos').insert([{
        id: 1,
        name: 'Video Test 1',
        filereference: `https://s3-us-west-2.amazonaws.com/madeleinehuish-videoapp/Videos/video1.mp4`,
      }]);
    });
};

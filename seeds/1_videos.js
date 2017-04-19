'use strict';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      // Inserts seed entries
      return knex('videos').insert([{
        id: 1,
        name: 'Video Test 1',
        filereference: `/Users/maddiehuish/Projects/videoApp/serverAPI/Videos/video1.mp4`,
      }]);
    });
};

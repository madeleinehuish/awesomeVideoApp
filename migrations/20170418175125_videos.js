'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('videos', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('filereference').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('videos');
};

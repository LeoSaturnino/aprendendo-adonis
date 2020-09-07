'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlbunsSchema extends Schema {
  up() {
    this.create('albums', (table) => {
      table.increments()
      table.string('name')
      table.string('artist')
      table.string('image')
      table.timestamps()
    })
  }

  down() {
    this.drop('albums')
  }
}

module.exports = AlbunsSchema

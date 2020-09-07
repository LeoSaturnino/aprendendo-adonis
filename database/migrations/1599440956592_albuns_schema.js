'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlbunsSchema extends Schema {
  up() {
    this.create('albuns', (table) => {
      table.increments()
      table.string('name')
      table.string('artist')
      table.string('image')
      table.timestamps()
    })
  }

  down() {
    this.drop('albuns')
  }
}

module.exports = AlbunsSchema

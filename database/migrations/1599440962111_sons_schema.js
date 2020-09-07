'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SonsSchema extends Schema {
  up() {
    this.create('sons', (table) => {
      table.increments()
      table.string('name')
      table.integer('album_id').references('id').inTable('albuns').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('sons')
  }
}

module.exports = SonsSchema

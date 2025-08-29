/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("products", (t) => {
    t.increments("product_id").primary();
    t.string("product_name").notNullable();
    t.text("description").defaultTo("");
    t.decimal("price", 10, 2).notNullable().defaultTo(0);
    t.text("picture");
    t.integer("quantity").notNullable().defaultTo(0);
    t.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("products");
};

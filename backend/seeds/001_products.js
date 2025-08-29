/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Clear existing rows
  await knex("products").del();

  // Insert some demo items
  await knex("products").insert([
    {
      product_name: "Plate Carrier",
      description: "Slick, lightweight carrier",
      price: 189.0,
      quantity: 5,
      picture: "",
    },
    {
      product_name: "Eye Pro",
      description: "ANSI Z87+ ballistic-rated",
      price: 39.5,
      quantity: 25,
      picture: "",
    },
    {
      product_name: "Day Pack",
      description: "20L pack for range or patrol",
      price: 99.99,
      quantity: 10,
      picture: "",
    },
    {
      product_name: "Battle Belt",
      description: "2-piece velcro inner/outer",
      price: 129.0,
      quantity: 8,
      picture: "",
    },
    {
      product_name: "IFAK Pouch",
      description: "Quick-deploy medical pouch",
      price: 54.95,
      quantity: 12,
      picture: "",
    },
  ]);
};

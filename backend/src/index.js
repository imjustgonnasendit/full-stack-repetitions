const express = require("express");
const cors = require("cors");
require("dotenv").config();
const knex = require("knex")(require("../knexfile").development);

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

// health
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// minimal products
app.get("/api/products", async (_req, res, next) => {
  try {
    res.json(await knex("products").select("*").orderBy("product_id"));
  } catch (e) {
    next(e);
  }
});
app.post("/api/products", async (req, res, next) => {
  try {
    const [row] = await knex("products").insert(req.body).returning("*");
    res.status(201).json(row);
  } catch (e) {
    next(e);
  }
});

// error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(503).json({ error: "Service Unavailable" });
});

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  try {
    await knex.migrate.latest();
    await knex.seed.run();
  } catch (e) {
    console.error(e);
  }
  console.log(`API listening on http://localhost:${port}`);
});

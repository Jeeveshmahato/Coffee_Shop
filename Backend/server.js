import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
// Middleware to allow cross-origin requests and parse JSON requests

app.use(cors());
app.use(express.json());
// Database connection setup

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "coffee_shop",
});
// Route to fetch all coffee items from the database

app.get("/", (req, res) => {
  const sql = "SELECT * FROM `coffee`";

  db.query(sql, (err, result) => {
    if (err) return res.json({ message: "Error inside server" });
    else return res.json(result);
  });
});
// Route to insert a new coffee item into the database

app.post("/coffee", (req, res) => {
  const sql = "INSERT INTO `coffee` (name, price , image_url) VALUES (?, ?,?)";
  const values = [req.body.name, req.body.price, req.body.image_url];

  db.query(sql, values, (err, result) => {
    if (err) return res.json({ message: "Error inserting data", error: err });
    else return res.json({ message: "Data inserted successfully", result });
  });
});

// Route to fetch a specific coffee item by its ID

app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM `coffee` WHERE id = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ message: "Error inside server" });
    else return res.json(result);
  });
});
// Route to update coffee item details by ID

app.put("/edit/:id", (req, res) => {
  const sql =
    "UPDATE  coffee SET name=? , price=? ,image_url =? WHERE id = ?   ";
  const id = req.params.id;

  db.query(
    sql,
    [req.body.name, req.body.price, req.body.image_url, id],
    (err, result) => {
      if (err) return res.json({ message: "Error inside server" });
      else return res.json(result);
    }
  );
});

// Route to delete a coffee item by ID

app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM coffee WHERE id =?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ message: "Error inside server" });
    else return res.json(result);
  });
});
// Route to fetch all coffee info items from the database

app.get("/coffee-info", (req, res) => {
  const sql = "SELECT * FROM `coffee_info`"; // Ensure your table name matches
  db.query(sql, (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error fetching coffee data", error: err });
    return res.json(result);
  });
});
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

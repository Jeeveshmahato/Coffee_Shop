import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "crud",
});
app.get("/", (req, res) => {
  const sql = "SELECT * FROM `coffee`";

  db.query(sql, (err, result) => {
    if (err) return res.json({ message: "Error inside server" });
    else return res.json(result);
  });
});
app.post("/coffee", (req, res) => {
  const sql = "INSERT INTO `coffee` (name, price) VALUES (?, ?)";
  const values = [req.body.name, req.body.price];

  db.query(sql, values, (err, result) => {
    if (err) return res.json({ message: "Error inserting data", error: err });
    else return res.json({ message: "Data inserted successfully", result });
  });
});
app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM `coffee` WHERE id = ?";
  const id = req.params.id;

  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ message: "Error inside server" });
    else return res.json(result);
  });
});
app.put("/edit/:id", (req, res) => {
  const sql = "UPDATE  coffee SET name=? , price=? WHERE id = ?";
  const id = req.params.id;

  db.query(sql, [req.body.name, req.body.price, id], (err, result) => {
    if (err) return res.json({ message: "Error inside server" });
    else return res.json(result);
  });
});
app.delete("/delete/:id", (req,res) => {
    const sql = "DELETE FROM coffee WHERE id =?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
      if (err) return res.json({ message: "Error inside server" });
      else return res.json(result);
    });
})
app.get("/coffee-info", (req, res) => {
    const sql = "SELECT * FROM `coffee_info`"; // Ensure your table name matches
    db.query(sql, (err, result) => {
      if (err) return res.status(500).json({ message: "Error fetching coffee data", error: err });
      return res.json(result);
    });
  });
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

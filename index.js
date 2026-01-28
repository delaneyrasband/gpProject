let express = require("express");
let app = new express();                                                                     
app.set("view engine","ejs")
// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.c7yskgwweg95.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database:"travel",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("national_parks")
 .then((result) => {
  res.render("index", {parks: result});
 });
});

app.listen(3000);

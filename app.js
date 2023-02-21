const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.static("public"));

//se requiere importar libreria handlebars para poder implementar parciales
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");


app.get("/",(req, res) => {
    res.render("home", {
        nombre: "Patricio Espinoza",
        titulo: "El Master"
    });
})

app.get("/generic",(req, res) => {
    res.render("generic", {
        nombre: "Patricio Espinoza",
        titulo: "El Master 2"
    })
})

app.get("/elements", (req,res) => {
    res.render("elements", {
        nombre: "Patricio Espinoza",
        titulo: "El Master 3"
    })
})

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
})

app.listen(port, ()=>{
    console.log(`webserver arriba en puerto ${port}`);
})
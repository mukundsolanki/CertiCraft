const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname, "Style")));
app.use(express.static(path.join(__dirname, "Resources")));
app.use(express.static(path.join(__dirname, "Certificates")));


app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index.html", (req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port ,() => {
    console.log(`Server running at ${port}`);
});

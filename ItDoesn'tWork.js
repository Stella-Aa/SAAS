# SAAS
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8010;

// sendFile will go here
app.get("/Image/:JpgName", (req,res) => {
  let JpgName = req.params["JpgName"];
  res.sendFile(path.join(__dirname, '/Image/${JpgName}'));
  console.log(JpgName);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

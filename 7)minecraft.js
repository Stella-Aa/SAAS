# SAAS
const express = require("express");
const app = express();
const port = process.env.port || 4443;
const HTML_BLANK = "<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Gago</title> </head><body> OURTABLEHEARE </body></html>"


function createTable(n,k) {

  console.log("TABLE")
  let table = "<table border='10' width = 800px height = 800px align='center'>"
  for (let i = 0; i < n; i++) {
    table += "<tr>"
    for (let j = 0; j < k; j++) {
      
      
     var a=Math.floor(Math.random() * 7);     
     if (a==0||a==1||a==2) {
      
      table += "<td align='center' colspan='1' style=background-color:Red> </td> "
     }     
     if (a==3||a==4||a==5) {
      table += "<td align='center' colspan='1' style=background-color:Green> </td> "
     }  
     if (a==6) {
      table += "<td align='center' colspan='1' style=background-color:DodgerBlue> </td> "
      
     }  
     
    }
   
    table += "</tr>"
  }
  table += "</table>"
  const HTML = HTML_BLANK.replace('OURTABLEHEARE', table)
  return HTML
}

app.get("/", (req, res) => {

  const board = createTable(7,9)
  res.send(board)
});
app.listen(port, err => {
  if (err) {
    return Console.log("Error", err);

  }
  console.log(`Listening on port ${port}`);
});

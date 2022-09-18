# SAAS
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));

const port = process.env.port || 4444;

const snake = `<img src='http://localhost:${port}/images/snake.jpeg' style="width: 100%;; height: 100%;" />`

const TD_STYLE = "style='position: absolute; width: 49px; height: 50px'"
const HTML_BLANK = "<!DOCTYPE html> <html lang='en'> <head> <meta charset='UTF-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <title>Gago</title> </head><body> OURTABLEHEARE </body></html>"

function createTable(n, left = 1, top = 1) {

  console.log("TABLE", left, top)
  let table = "<table border='10' width = 25% height = 250px align='center'>"
  for (let i = 0; i < n; i++) {
    table += "<tr>"
    for (let j = 0; j < n; j++) {
      if (i == top - 1 && j == left - 1)
        table += `<td align='center' colspan='1' ${TD_STYLE}> ${snake} </td>`
      else
        table += "<td align='center' colspan='1'> </td>"
    }
    table += "</tr>"
  }
  table += "</table>"

  const HTML = HTML_BLANK.replace('OURTABLEHEARE', table)

  return HTML
}


function moveSnake(left, top, n) {
  if (isNaN(left) || isNaN(top) || left > n || left <= 0 || top > n || top <= 0) {
    const HTML = createTable(n)
    console.log(HTML)
    return HTML
  }
  else {
    const HTML = createTable(n, left, top)
    return HTML
  }
}

app.get("/", (req, res) => {
  let top = req.query['top']
  let left = req.query['left']
  const board = moveSnake(left * 1, top * 1, 4)
  res.send(board)
});
app.listen(port, err => {
  if (err) {
    return Console.log("Error", err);

  }
  console.log(`Listening on port ${port}`);
});

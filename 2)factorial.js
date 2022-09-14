# SAAS
const express = require("express");
const app = express();
const port=process.env.port || 4444;

function factorial(num) {
  if(num==0) {
    return 1;
  }
  else 
     return num*factorial(num-1)
}

app.get("/factorial/:number", (req,res) => {
  let num = req.params["number"];
  let factorial_of_num=factorial(num*1)
  console.log(factorial_of_num)
  res.send(factorial_of_num.toString());
  
});
app.listen (port, err  => {
  if (err) {
   return Console.log("Error", err);
  
  }

  console.log(`Listening on port ${port}`);
});
  

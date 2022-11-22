const express = require("express");
const main = express()
const port = process.env.PORT;


main.listen(port, function() {
  console.log(`server is listening on port ${port}`);
})
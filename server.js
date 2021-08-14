const express = require("express");
// create our port 
const PORT = process.env.PORT || 3000;

const app = express();
// use middleware 
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));
// require from the routes folder and the desired api
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listen to the port 
app.listen(PORT, () => {
  console.log(`Server is listening port: ${PORT}`)
})
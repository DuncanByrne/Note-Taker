// require
var path = require("path");
// exports
module.exports = function(app){
// app.get
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  })
// app.get
  app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })
}
const path = require("path");
const { model } = require("../../travel-log/server/src/models/LogEntry");

module.exports = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/index.html"));
    })

}
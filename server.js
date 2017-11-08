const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const indexHtml = (() => {
    return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();

app.get("*", (req, res) => {
    res.write(indexHtml);
    res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
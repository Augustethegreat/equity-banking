const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express(); // Use Express as the main server

  server.use(bodyParser.text({ type: "application/xml" }));

  // XML Data Saving Route
  server.post("/save-xml", (req, res) => {
    const xmlData = req.body;

    // Append the new XML data to the file instead of overwriting it
    fs.appendFile("customer_feedback.xml", xmlData + "\n", (err) => {
      if (err) {
        console.error("Error appending XML file:", err);
        return res.status(500).send("Erreur lors de l'enregistrement.");
      }
      res.send("Données enregistrées avec succès !");
    });
  });

  // Handle Next.js Routes
  server.all("*", (req, res) => {
    return handle(req, res, parse(req.url, true));
  });

  // Start Server
  server.listen(port, () => {
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );
  });
});

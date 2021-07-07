const ronin = require("ronin-server");
const mocks = require("ronin-mocks");
const database = require("ronin-database");

const server = ronin.server();

database.connect(process.env.CONNECTIONSTRING);

server.use("/foo", (req, res) => {
  return res.json({ foo: "bar" });
});

server.get("/", (req, res) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
      <header>
      <h1>SUCCESS!</h1>
      </header>
    </body>
    </html>
    `;
});

server.use("/", mocks.server(server.Router(), false, false));
server.start();

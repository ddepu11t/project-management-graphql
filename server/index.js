const express = require("express");
const colors = require("colors");
const cors = require("cors");

require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const port = process.env.PORT || 4000;
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

// deployment

__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

// deployment

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

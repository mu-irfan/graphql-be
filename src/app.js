const express = require("express");
const { connectDB } = require("./config/db");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./graphql/index");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// ==== connect to db ==== //
connectDB();

app.use(cors());
app.use(express.json());

// ==== graphql endpoint or api endpoint ==== //
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// ==== api routes ==== //
app.get("/", (req, res) => {
  res.send("GraphQL API is running!, visit /graphql");
});

// ==== running server ==== //
app.listen(port, () => {
  console.log(`server is on: ${port}`);
});

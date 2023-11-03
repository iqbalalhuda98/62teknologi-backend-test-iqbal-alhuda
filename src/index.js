const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

app.use(cors());
app.use(express.json());

const jwt = require("jsonwebtoken");

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.API_KEY, { expiresIn: "1h" });
  res.json({ accessToken });
});

const apiVer = process.env.API_VERSION;
const businesController = require(`./${apiVer}/business/business.controller`);
app.use(`/${apiVer}/business`, businesController);

// ========== ACCESS YELP API ========== //
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.YELP_BEARER);

app.get("/v3/businesses/search", (req, res) => {
  const body = req.query;

  for (const key in body) {
    if (body[key] === "false" || body[key] === "") {
      delete body[key];
    }
  }

  client
    .search(body)
    .then((data) => {
      res.send(data.jsonBody.businesses);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.get("/v3/businesses/:id", (req, res) => {
  const id = req.params.id;

  client
    .business(id)
    .then((data) => {
      res.send(data.jsonBody);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.get("/v3/businesses/:id/reviews", (req, res) => {
  const id = req.params.id;

  client
    .reviews(id)
    .then((data) => {
      res.send(data.jsonBody.reviews);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});
// ========== ACCESS YELP API ========== //

const middlewareNotFound = require("./middleware/not-found");
app.use(middlewareNotFound);

const port = process.env.API_PORT;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

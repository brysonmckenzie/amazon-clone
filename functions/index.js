const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQiOqAjD1vPAraLQwGKvB3cn1vxZwnpqFQ1Na0aiv5YCH4xcdCoHfMJZoDIH2kkRqmnauWRL8UmjihydVlfMBit00FZtKcPjG"
);

// - API

// - App config

const app = express();

// - Middlewares

app.use(cors({ orgin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("Bryson McKenzies AMAZON CLONE"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command

exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-a4462/us-central1/api

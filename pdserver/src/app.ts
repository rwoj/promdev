import express from "express";
import { json } from "body-parser";
import { indexRoute } from "./routes/index";
// import cookieSession from "cookie-session";

const app = express();

app.set("trust proxy", true);
app.use(json());
// app.use(
//   cookieSession({
//     signed: false,
//     secure: false,
//     // secure: process.env.NODE_ENV !== "test",
//   })
// );

app.use(indexRoute);

app.all("*", async (req, res) => {
    res.status(404).send("nie znalezione");
});

export { app };

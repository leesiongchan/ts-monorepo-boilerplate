import * as express from "express";
import { greeting } from "@mono/common";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: greeting() });
});

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});

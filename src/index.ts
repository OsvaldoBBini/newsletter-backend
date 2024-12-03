import express from "express";
import { router } from "./main/routers";

const app = express();

app.use(express.json());
app.use(router);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

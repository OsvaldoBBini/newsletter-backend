import express from "express";
import { router } from "../routers";
import { errorHandler } from "../middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler)

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

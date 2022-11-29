
import express from "express";
import cors from "cors";
import router from "./Routes/routes.js"
const app = express()


app.use(cors())
app.use(express.static("public"));
app.use(express.json());
app.use("/api/v1", router)

// const PORT = process.env.PORT ?? 3000;

// main.listen(PORT, function () {
//   console.log(`Server is listening on http://localhost:${PORT}`);
// });

export default app;

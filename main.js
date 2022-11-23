
import express from "express";
const main = express()
import cors from "cors";
const PORT = 3000;
import router from "./Routes/routes.js"

main.use(cors())
main.use(express.static("public"));
main.use(express.json());
main.use("/api/v1", router)



main.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export default main
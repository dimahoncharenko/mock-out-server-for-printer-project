import express from "express";
import cors from "cors";

import routes from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 6060;

app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server ready at port: ${PORT}`);
});
import * as http from "http";
import { app } from "./app.ts";

const server = http.createServer(app);

const port = process.env.PORT;
server.listen(port, () => {
  console.log("servidor iniciado na porta 3333: " + port);
});

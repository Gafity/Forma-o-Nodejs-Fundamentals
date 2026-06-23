import cors from "@fastify/cors";
import fastify from "fastify";

const server = fastify({ logger: true });
server.register(cors, { origin: "*", methods: ["GET"] });

server.get("/teams", async (resquest, response) => {
  response.type("application/json").code(200);
  return [{ id: 1, name: "ferrari" }];
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return [{ id: 1, name: "Max Verstappen", team: "Red Bull Racing" }];
});

import { RouteInMemoryRepository } from "./../../db/route-in-memory.repository";
import express, { Express, Request, Response } from "express";
import { CreateRouteUseCase } from "../../../app/create-route.use-case";
import { ListRoutesUseCase } from "../../../app/list-all-Route.use-case";

const app: Express = express();
app.use(express.json());

const routeRepo = new RouteInMemoryRepository();

app.get("/routes", async (req: Request, res: Response) => {
  const routes = new ListRoutesUseCase(routeRepo);
  const result = await routes.execute();

  res.send(result);
});

app.post("/routes", async (req: Request, res: Response) => {
  const createRoute = new CreateRouteUseCase(routeRepo);
  const result = await createRoute.execute(req.body);

  res.status(201).send({ result });
});

app.listen(3000, () => {
  console.log("Server online");
});

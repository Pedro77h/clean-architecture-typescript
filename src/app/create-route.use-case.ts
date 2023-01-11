import { LatLng, Route } from "../domain/route/route.entity";
import { CreateRouteDTO } from "./create-route.DTO";
import { RouteRepositoryInterface } from "../domain/repositories/route.repository";

export class CreateRouteUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(input: CreateRouteDTO): Promise<outputCreateRoute> {
    const route = new Route(input);
    await this.routeRepo.insert(route);
    return route.toJSON();
  }
}


interface outputCreateRoute{
  id: string
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points: LatLng[];
}
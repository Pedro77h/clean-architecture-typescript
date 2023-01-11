import { LatLng } from "../domain/route/route.entity";
import { RouteRepositoryInterface } from "../domain/repositories/route.repository";

export class ListRoutesUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(): Promise<outputCreateRoute[]> {
    const routes = await this.routeRepo.findAll();
    return routes.map((r) => r.toJSON());
  }
}

interface outputCreateRoute {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points: LatLng[];
}

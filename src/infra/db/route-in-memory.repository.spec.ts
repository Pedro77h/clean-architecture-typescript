import { RouteInMemoryRepository } from "./route-in-memory.repository";
import { Route } from "../../domain/route/route.entity";

describe("RouteInMemoryRepository", () => {
  it("should insert a new route", async () => {
    const routeProps = {
      title: "a",
      endPosition: { lat: 15, lng: 15 },
      startPosition: { lat: 15, lng: 15 },
    };

    const repository = new RouteInMemoryRepository();
    const route = new Route(routeProps);

    await repository.insert(route);

    expect(repository.items).toHaveLength(1);
  });
});

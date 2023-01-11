import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository";
import { CreateRouteUseCase } from "./create-route.use-case";
describe("CreateRouteUseCase", () => {
  it("should create a new route", async () => {
    const routeProps = {
      id: '1',
      title: "title",
      endPosition: { lat: 15, lng: 15 },
      startPosition: { lat: 15, lng: 15 },
    };

    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);

    const result = await createUseCase.execute(routeProps);

    expect(result).toStrictEqual({ ...routeProps, points: [] });
    expect(repository.items).toHaveLength(1);
  });
});

import { LatLng, Route, RouteProps } from "./route.entity";
describe("route entity", () => {
  it("should be able return points be an empty array", () => {
    const routeProps = {
      title: "a",
      endPosition: { lat: 15, lng: 15 },
      startPosition: { lat: 15, lng: 15 },
    };

    const route = new Route(routeProps);

    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });
  });

  it("should be able update title", () => {
    const routeProps = {
      title: "a",
      endPosition: { lat: 15, lng: 15 },
      startPosition: { lat: 15, lng: 15 },
    };

    const route = new Route(routeProps);

    route.updateTitle("title updated");

    expect(route.title).toBe("title updated");
  });

  it("should be able update positions", () => {
    const routeProps = {
      title: "a",
      endPosition: { lat: 15, lng: 15 },
      startPosition: { lat: 15, lng: 15 },
    };
    const startPosition: LatLng = { lat: 15, lng: 10 };
    const endPosition: LatLng = { lat: 30, lng: 40 };

    const route = new Route(routeProps);

    route.updatePosition(startPosition, endPosition);

    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });

  it("should be able update points", () => {
    const routeProps = {
      title: "a",
      endPosition: { lat: 15, lng: 15 },
      startPosition: { lat: 15, lng: 15 },
    };
    const points: LatLng[] = [{ lat: 15, lng: 10 }];

    const route = new Route(routeProps);

    route.updatePoints(points);

    expect(route.points).toBe(points);
    expect(route.points).toHaveLength(1);
  });

  it("should route id defined", () => {
    const routeProps = {
      title: "a",
      endPosition: { lat: 15, lng: 15 },
      startPosition: { lat: 15, lng: 15 },
    };

    const route = new Route(routeProps);

    expect(route.id).toBeDefined();
  });
});

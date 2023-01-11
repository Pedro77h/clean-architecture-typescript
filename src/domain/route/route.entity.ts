import { randomUUID } from "crypto";

export type LatLng = {
  lat: number;
  lng: number;
};

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;

  constructor(props: RouteProps, id?: string) {
    this.id = id || randomUUID();
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  public updateTitle(title: string): void {
    this.props.title = title;
  }

  public updatePosition(startPosition: LatLng, endPosition: LatLng): void {
    this.props.startPosition = startPosition;
    this.props.endPosition = endPosition;
  }

  public updatePoints(points: LatLng[]): void {
    this.props.points = points;
  }

  public get title(): string {
    return this.props.title;
  }

  public get startPosition(): LatLng {
    return this.props.startPosition;
  }

  public get endPosition(): LatLng {
    return this.props.endPosition;
  }

  public get points(): LatLng[] {
    return this.props.points;
  }

  public toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}

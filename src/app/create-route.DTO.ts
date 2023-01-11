import { LatLng } from "../domain/route/route.entity";
export interface CreateRouteDTO {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
}

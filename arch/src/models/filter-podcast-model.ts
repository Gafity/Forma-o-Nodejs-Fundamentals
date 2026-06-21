import type { PodcastModel } from "../repository/podcasts-repository";

export interface FilterPodCastModel {
  statusCode: number;
  body: PodcastModel[];
}

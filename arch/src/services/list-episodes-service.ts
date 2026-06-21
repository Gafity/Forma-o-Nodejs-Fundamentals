import { repositoryPodcast } from "../repository/podcasts-repository";
import type { FilterPodCastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-codes";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined,
): Promise<FilterPodCastModel> => {
  let responseFormat: FilterPodCastModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(podcastName);

  if (data) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT;
  }
  responseFormat.body = [data];
  return responseFormat;
};

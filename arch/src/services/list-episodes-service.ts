import type { IncomingMessage } from "http";
import { repositoryPodcast } from "../repository/podcasts-repository";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined,
) => {
  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(podcastName);
};

import { repositoryPodcast } from "../repository/podcasts-repository";

export const serviceFilterEpisodes = async (podcastName: string) => {
  const data = await repositoryPodcast(podcastName);
};

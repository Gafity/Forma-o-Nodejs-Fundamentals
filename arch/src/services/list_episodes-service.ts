import { repositoryPodcast } from "../repository/podcasts-repository";

export const serviceListEpisodes = async () => {
  const data = await repositoryPodcast();
  return data;
};

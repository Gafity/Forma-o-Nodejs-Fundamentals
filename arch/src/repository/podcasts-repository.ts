import fs from "fs";
import path from "path";

export interface PodcastModel {
  podcastName: string;
  episode: string;
  videoId: string;
  categories: string[];
}

const pathData = path.join(__dirname, "../repository/podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string,
): Promise<PodcastModel> => {
  const rawData = fs.readFileSync(pathData, "utf-8");
  const jsonFile = JSON.parse(rawData);

  if (podcastName) {
    const podcastNameJson = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcastName === podcastName,
    );
    return podcastNameJson;
  }

  return jsonFile;
};

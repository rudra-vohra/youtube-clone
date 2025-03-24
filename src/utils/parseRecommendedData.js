import { parseVideoDuration } from './parseVideoDuration';
import { convertRawToString } from './convertRawToString';
import { timeSince } from './timeSince';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const parseRecommendedData = async (items) => {
  try {
    const videoIds = [];

    // Pushing the video ids in their respective arrays
    items.forEach((item) => {
      videoIds.push(item.id.videoId);
    });

    // fetching video data
    const {
      data: { items: videosData },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(
        ','
      )}&key=${API_KEY}`
    );

    return items.map((item, index) => {
      const snippet = item.snippet;
      return {
        id: item.id,
        title: snippet.title,
        channelTitle: snippet.channelTitle,
        channelId: snippet.channelId,
        videoAge: timeSince(new Date(snippet.publishedAt)),
        thumbnail: snippet.thumbnails.high.url,
        viewCount: videosData[index].statistics.viewCount
          ? convertRawToString(videosData[index].statistics.viewCount)
          : 0,
        duration: videosData[index].contentDetails.duration
          ? parseVideoDuration(videosData[index].contentDetails.duration)
          : '0:00',
      };
    });
  } catch (error) {
    console.error('Error parsing recommended data:', error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export default parseRecommendedData;

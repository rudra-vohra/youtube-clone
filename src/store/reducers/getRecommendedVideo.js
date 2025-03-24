import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import parseRecommendedData from '../../utils/parseRecommendedData';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getRecommendedVideo = createAsyncThunk(
  'youtube/App/getRecommendedVideos',
  async (videoId, { getState }) => {
    const {
      youtubeApp: {
        currentPlaying: {
          channelInfo: { id: channelId },
        },
      },
    } = getState();

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&channelId=${channelId}&key=${API_KEY}`
    );
    const items = response.data.items;
    const parsedData = await parseRecommendedData(items);

    return { parsedData };
  }
);

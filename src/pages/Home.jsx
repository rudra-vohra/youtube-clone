import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../components/Card';

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: '7.5vh' }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: '92.5vh' }}>
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid grid-cols-3 gap-y-14 gap-x-7 p-8">
              {videos.map((video) => {
                return <Card data={video} key={video.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { getRecommendedVideo } from '../store/reducers/getRecommendedVideo';
import Navbar from '../components/Navbar';
import { getVideoDetails } from '../store/reducers/videodetails';
import RecomCard from '../components/RecomCard';

export default function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );
  const recommendedVideo = useAppSelector(
    (state) => state.youtubeApp.recommendedVideo
  );
  console.log(recommendedVideo);

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      navigate('/');
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideo(id));
  }, [currentPlaying, dispatch, id]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen relative">
          <div>
            <Navbar />
          </div>
          <div>
            <div>
              {/* Video Player */}
              <div className="mx-9 mt-6 mb-3">
                <div>
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    frameBorder="0"
                    width="850"
                    height="502"
                    allowFullScreen
                    title="Youtube Player"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>

              {/* Video Details */}
              <div className="ml-9 mr-5 font-medium text-xl w-[750px]">
                <h1>{currentPlaying.videoTitle}</h1>

                <div className="flex gap-2 py-3">
                  <div className="min-w-fit">
                    <a href="#">
                      <img
                        src={currentPlaying.channelInfo.image}
                        alt="channel pfp"
                        className="h-10 w-10 rounded-full"
                      />
                    </a>
                  </div>

                  {/* channel name and subs */}
                  <div className="flex flex-col">
                    <div className="text-[16px] text-white ">
                      <a href="#">{currentPlaying.channelInfo.name}</a>
                    </div>

                    <div className="text-xs text-gray-400 mt-[-2px]">
                      <p>
                        {currentPlaying.channelInfo.subscribers} subscribers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-8 top-14 mt-6">
            {recommendedVideo.map((video) => {
              return <RecomCard data={video} key={video.id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

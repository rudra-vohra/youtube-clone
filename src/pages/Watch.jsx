import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { getRecommendedVideo } from '../store/reducers/getRecommendedVideo';
import Navbar from '../components/Navbar';
import { getVideoDetails } from '../store/reducers/videodetails';

export default function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );
  console.log(currentPlaying);
  const recommendedVideo = useAppSelector(
    (state) => state.youtubeApp.recommendedVideo
  );

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
        <div className="max-h-screen overflow-hidden">
          <div>
            <Navbar />
          </div>
          <div>
            <div>
              <div className="mx-9 my-6">
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}

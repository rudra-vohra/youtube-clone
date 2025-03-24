import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ data }) {
  return (
    <div className="w-96 h-60 flex gap-3 flex-col mb-4">
      <div className="relative">
        {/* Video Thumbnail and Duration */}
        <span className="absolute bottom-2 right-12 text-sm bg-black bg-opacity-75 px-2 py-0.5 z-10 rounded">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="Thumbnail"
            className="h-48 w-[342px] rounded-xl object-cover"
          />
        </Link>
      </div>

      {/* Channel Info */}
      <div className="flex gap-2 w-80">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image}
              alt="channel pfp"
              className="h-9 w-9 rounded-full"
            />
          </a>
        </div>

        {/* Video Title */}
        <div>
          <h3 className="mb-1">
            <a href="#" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>

          <div className="text-sm text-gray-400">
            <div>
              <a href="#" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>

            {/* views and age */}
            <div>
              <span className="mr-1">{data.videoViews} views</span>
              <span>
                <span className="text-sm">•</span> {data.videoAge} ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

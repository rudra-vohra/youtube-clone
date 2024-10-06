import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchCard({ data }) {
  return (
    <div className="flex gap-4">
      <div className="relative">
        {/* Video Thumbnail and Duration */}
        <span className="absolute bottom-2 right-2 text-sm bg-black opacity-85 px-2 py-0.5 z-10 rounded">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="Thumbnail"
            className="h-[280px] w-[500px] rounded-xl object-cover"
          />
        </Link>
        <img
          src={data.videoThumbnail}
          alt="Thumbnail"
          className="h-[280px] w-[500px] rounded-xl object-cover"
        />
      </div>

      <div className="flex gap-0.5 mt-1 flex-col">
        {/* Video Title */}
        <h3 className="max-w-2xl text-lg">
          <a href="#" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h3>

        {/* views and age */}
        <div className="text-sm text-gray-400">
          <span className="mr-1">{data.videoViews} views</span>
          <span>
            <span className="text-sm">•</span> {data.videoAge} ago
          </span>
        </div>

        {/* Channel pfp and Name */}
        <div className="flex gap-2 py-3 items-center">
          <div className="min-w-fit">
            <a href="#">
              <img
                src={data.channelInfo.image}
                alt="channel pfp"
                className="h-6 w-6 rounded-full"
              />
            </a>
          </div>
          <div className="text-sm text-gray-400 hover:text-white mt-1">
            <a href="#" className="hover:text-white">
              {data.channelInfo.name}
            </a>
          </div>
        </div>

        {/* Description */}
        <div>
          <div className="max-w-2xl text-sm text-gray-400 line-clamp-2">
            <p>{data.videoDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

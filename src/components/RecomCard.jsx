import React from 'react';
import { Link } from 'react-router-dom';

export default function RecomCard({ data }) {
  return (
    <div className="w-[410px] flex gap-2  mb-2">
      <div className="relative">
        {/* Video Thumbnail and Duration */}
        <span className="absolute bottom-1 right-1 text-xs bg-black bg-opacity-75  px-1 py-0.5 text-white z-10 rounded">
          {data.duration}
        </span>
        <Link to={`/watch/${data.id.videoId}`}>
          <div className="relative h-24 w-[168px]">
            <img
              src={data.thumbnail}
              alt="Thumbnail"
              className=" absolute top-0 left-0 h-full w-full object-cover rounded-xl"
            />
          </div>
        </Link>
      </div>

      {/* Channel Info */}
      <div className="flex gap-2 w-80 mt-0.5">
        {/* Video Title */}
        <div>
          <h3 className="mb-0.5">
            <a href="#" className="line-clamp-2 text-sm">
              {data.title}
            </a>
          </h3>

          <div className="text-sm text-gray-400">
            <div>
              <a href="#" className="hover:text-white text-xs">
                {data.channelTitle}
              </a>
            </div>

            {/* views and age */}
            <div className="text-xs">
              <span className="mr-1">{data.viewCount} views</span>
              <span>
                <span>•</span> {data.videoAge} ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

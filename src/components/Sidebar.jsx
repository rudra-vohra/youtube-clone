import React from 'react';
import { GrHomeRounded } from 'react-icons/gr';
import { SiYoutubeshorts } from 'react-icons/si';
import {
  MdOutlineSubscriptions,
  MdOutlineHistory,
  MdOutlineWatchLater,
  MdOutlineVideoLibrary,
} from 'react-icons/md';
import { FiThumbsUp } from 'react-icons/fi';

export default function Sidebar() {
  const mainLinks = [
    {
      icon: <GrHomeRounded className="text-xl" />,
      name: 'Home',
    },
    {
      icon: <SiYoutubeshorts className="text-xl" />,
      name: 'Shorts',
    },
    {
      icon: <MdOutlineSubscriptions className="text-xl" />,
      name: 'Subscriptions',
    },
  ];

  const otherLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: 'Library',
    },
    {
      icon: <MdOutlineHistory className="text-xl" />,
      name: 'History',
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: 'Watch Later',
    },
    {
      icon: <FiThumbsUp className="text-xl" />,
      name: 'Liked Videos',
    },
  ];
  return (
    <div className="w-2/12 overflow-auto pb-8 h-screen pr-5 p-2">
      <ul className="flex flex-col ml-1 border-b border-zinc-600 pb-4">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-5 py-2 hover:bg-zinc-700 my-1 rounded-xl ${
                name === 'Home' ? 'bg-zinc-800' : ' '
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col ml-2 border-b border-zinc-600 pb-4 mt-4">
        {otherLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-5 py-2 hover:bg-zinc-700 my-1 rounded-lg ${
                name === 'Home' ? 'bg-zinc-800' : ' '
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

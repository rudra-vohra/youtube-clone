import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsYoutube } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa6';
import { RiVideoAddLine } from 'react-icons/ri';
import { BsBell } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/useApp';
import {
  clearVideos,
  clearSearchTerm,
  changeSearchTerm,
} from '../features/youtube/youtubeSlice';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  function handleSearch() {
    if (location.pathname !== '/search') navigate('/search');
    else {
      dispatch(clearVideos);
      dispatch(getSearchPageVideos(false));
    }
  }
  return (
    <nav className="flex items-center justify-between bg-[#0f0f0f] h-14 px-10 opacity-95 sticky text-white">
      {/* Logo and hamburger menu */}
      <div className="flex items-center gap-8 text-center text-white text-2xl">
        <div>
          <RxHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center cursor-pointer">
          <BsYoutube className="text-red-500 text-3xl" />
          <span className="text-2xl tracking-tighter font-medium mb-1">
            YouTube
          </span>
        </div>
      </div>
      {/* Search and Microphone */}
      <div className="flex justify-center items-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex items-center h-10 px-4 pr-0 bg-[#0f0f0f] rounded-3xl border-[1px] border-zinc-600  border-r-0">
            <div className="flex items-center gap-5 pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-[500px] bg-[#0f0f0f] focus:outline-none  text-sm border-none placeholder:text-[18px]"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-900 rounded-r-3xl border-[1px] border-zinc-600">
              <AiOutlineSearch className="text-2xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full hover:bg-zinc-700">
          <FaMicrophone />
        </div>
      </div>

      {/* Add video, notifications, profile */}
      <div className="flex items-center gap-8 text-xl">
        <RiVideoAddLine className="hover:bg-zinc-700 rounded-full p-2 h-9 w-9 text-xl" />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 bg-red-600 px-1 rounded-full text-xs">
            9+
          </span>
        </div>
        <img
          src="https://yt3.ggpht.com/yti/ANjgQV-3ydy7yqkE6BawMjZElVsvgSsJYRzr6DYBMnvGMToS1g=s108-c-k-c0x00ffffff-no-rj"
          alt="profile_image"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;

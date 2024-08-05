import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
function Slider() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const elementRef = useRef();
  const [movieList, setMovielist] = useState([]);
  const [isScrolling, setScrolling] = useState(false);
  const screenWidth = window.innerWidth;
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const sliderRight = (element) => {
    if (!isScrolling) {
      setScrolling(true);
      element.scrollLeft += screenWidth - 128;
      setTimeout(() => {
        setScrolling(false);
      }, 750);
    }
  };
  const sliderLeft = (element) => {
    if (!isScrolling) {
      setScrolling(true);
      element.scrollLeft -= screenWidth - 128;
      setTimeout(() => {
        setScrolling(false);
      }, 750);
    }
  };
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovielist(resp.data.results);
    });
  };
  return (
    <div style={{ boxSizing: "border-box" }}>
      <HiChevronRight
        className="hidden md:block  absolute text-[30px] text-white m-[230px] mx-12 pr-0 right-0 cursor-pointer"
        onClick={() => sliderRight(elementRef.current)}
      />
      <HiChevronLeft
        className="hidden md:block absolute text-[30px] text-white m-[230px] mx-12 cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <div
        className="overflow-x-auto flex w-full px-16 py-4 scrollbar-none scroll-smooth ml-[20px]"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:min-w-[calc(100%-40px)] md:h-[460px] object-cover rounded-md mr-[40px] hover:border-[4px] border-gray-300 transition-all duration-100 ease-in"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;

import React from "react";

const FullScreenNav = () => {
  return (
    <div
      id="fullscreen-nav"
      className="h-screen overflow-hidden text-white w-full absolute bg-black"
    >
      <div>
        <div className="h-full w-full flex ">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div>
        <div className="flex w-full justify-between items-start">
          <div className="p-5">
            <div className="w-35">
              <svg
                className="w-full"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="relative h-32 w-32 cursor-pointer">
            <div className="absolute h-44 w-1 -rotate-45 origin-top bg-[#D3FD50]"></div>
            <div className="absolute h-44 w-1 right-0 rotate-45 origin-top bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className="py-40">
          <div className="link relative border-t-1 border-white">
            <h1 className="font-[levis500] text-center text-[8vw] leading-[0.8] pt-10 uppercase">
              Projects
            </h1>
            <div className="movelink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
          <div className="link relative border-t-1 border-white">
            <h1 className="font-[levis500] text-center text-[8vw] leading-[0.8] pt-10 uppercase">
              Agency
            </h1>
            <div className="movelink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
          <div className="link relative border-t-1 border-white">
            <h1 className="font-[levis500] text-center text-[8vw] leading-[0.8] pt-10 uppercase">
              contact
            </h1>
            <div className="movelink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
          <div className="link relative border-t-1 border-y-1 border-white">
            <h1 className="font-[levis500] text-center text-[8vw] leading-[0.8] pt-10 uppercase">
              Blog
            </h1>
            <div className="movelink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h2 className="whitespace-nowrap font-[levis500] text-center text-[8vw] uppercase">
                  See everything
                </h2>
                <img
                  className="h-40 w-96 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agents = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 32%",
        end: "top -70%",
        scrub: true,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="parent">
      <div id="page1" className="py-1">
        <div
          ref={imageDivRef}
          className="absolute h-[20vw] w-[15vw] overflow-hidden rounded-4xl top-80 left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[levis300]">
          <div className="mt-[60vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className="mt-15 pl-[50%]">
            <p className="text-5xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className="h-screen"></div>
    </div>
  );
};

export default Agents;

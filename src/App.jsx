import "./Globalcss.css";
import SMedia from "./sMedias";
import Typewriter from "./typing.jsx";
import Countdown from "./counter.jsx";
import title from "/src/assets/title.png";
import date from "/src/assets/date.png";
import bgImage from "/src/assets/bgg.jpg";
import { useEffect, useState } from "react";
import Loader from "./loader.jsx";
import Guests from "./guests.jsx";
import Footer from "./footer.jsx";
import Ateliers from "./ateliers.jsx";
// import Ateliers from "./ateliers.jsx";
export default function App() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setState(true)
    }, 2500);
  },[])
  return (<div className="w-screen h-screen">
    {!state && <Loader />}
      
      <div>
      {/* <p className="bg-red-500 text-5xl">hi</p> */}
      <div
        className="bg  w-full h-full flex flex-col "
        id="bg"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className={`${state&& 'down'} px-3 py-1 flex justify-center items-center`}>
          <div className="w-[80%] pt-4 px-4 pb-2 bg-[#d3dbeb]   flex flex-col justify-center items-center gap-4 rounded-xl">
            <p className=" text-center">OUR SMEDIA</p>
            <SMedia state={state} />
          </div>
        </div>
        <div className={`${state&& 'cnt'} flex justify-center`}>
          <div className="transform translate-y-[-50px] ">
            <img className="transform scale-[1.2]" src={title} />
          </div>
        </div>
      </div>
      <div className="transform translate-y-[-138px]   flex flex-col gap-5 ">
        <img className="drop-shadow-xl drop-shadow-black" src={date} />
      </div>
      <div className="transform translate-y-[-170px] h-[200px] flex flex-col gap-5">
        <Typewriter
          phrases={["Welcome!", "Vous êtes les bienvenus", "See You There!"]}
          delay={150}
        />
        <div className="block min-h-[280px]">
          <Countdown
          timeTillDate="03 03 2024, 9:00 am"
          timeFormat="MM DD YYYY, h:mm a"
        />
        </div>
        
        <Guests state={state} />
        <Ateliers state={state}/>
      <Footer state={state}/>

      </div>

      



    </div></div>
  );
}

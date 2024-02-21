import "./Globalcss.css";
import SMedia from "./sMedias";
import Typewriter from "./typing.jsx";
import Countdown from "./counter.jsx";
export default function App() {
 const bg="url(/public/bgg.png)"
 
  return (
    <>
      {/* <p className="bg-red-500 text-5xl">hi</p> */}
      <div className="w-full h-full flex flex-col"
      style={{
        backgroundImage: bg,
         backgroundSize: "cover",
      }}
      >
        <div className="down px-3 py-1 flex justify-center items-center">
          <div className="w-[80%] pt-4 px-4 pb-2 bg-[#d3dbeb]   flex flex-col justify-center items-center gap-4 rounded-xl">
          <p className=" text-center">OUR SMEDIA</p>
          <SMedia/>
          </div>
        </div>
        <div className="cnt flex justify-center" >
        <div className="transform translate-y-[-50px] " >
          <img className="transform scale-[1.2]" src="/public/title.png"/>
        </div>
        </div>
      </div>
      <div className="transform translate-y-[-138px]  flex flex-col gap-5" >
          <img className="drop-shadow-xl drop-shadow-black" src="/public/date.png"/>
       
      </div>
      <div className="transform translate-y-[-170px]  flex flex-col gap-5">
 <Typewriter phrases={["Welcome!","Vous êtes les bienvenus","See You There!"]} delay={150} />
        <Countdown  timeTillDate="03 03 2024, 9:00 am"
        timeFormat="MM DD YYYY, h:mm a"/>
      </div>
    </>
  );
}

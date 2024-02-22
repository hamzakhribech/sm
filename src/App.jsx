import "./Globalcss.css";
import SMedia from "./sMedias";
import Typewriter from "./typing.jsx";
import Countdown from "./counter.jsx";
import title from "/src/assets/title.png";
import date from "/src/assets/date.png";
import bgImage from "/src/assets/bgg.jpg";
import logo from "/src/assets/logo.png";
export default function App() {
  return (
    <>
      {/* <p className="bg-red-500 text-5xl">hi</p> */}
      <div
        className="bg w-full h-full flex flex-col"
        id="bg"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="down px-3 py-1 flex justify-center items-center">
          <div className="w-[80%] pt-4 px-4 pb-2 bg-[#d3dbeb]   flex flex-col justify-center items-center gap-4 rounded-xl">
            <p className=" text-center">OUR SMEDIA</p>
            <SMedia />
          </div>
        </div>
        <div className="cnt flex justify-center">
          <div className="transform translate-y-[-50px] ">
            <img className="transform scale-[1.2]" src={title} />
          </div>
        </div>
      </div>
      <div className="transform translate-y-[-138px]  flex flex-col gap-5">
        <img className="drop-shadow-xl drop-shadow-black" src={date} />
      </div>
      <div className="transform translate-y-[-170px] h-[200px] flex flex-col gap-5">
        <Typewriter
          phrases={["Welcome!", "Vous êtes les bienvenus", "See You There!"]}
          delay={150}
        />
        <Countdown
          timeTillDate="03 03 2024, 9:30 am"
          timeFormat="MM DD YYYY, h:mm a"
        />
      </div>

      <div className="p-3 flex flex-col gap-1 justify-center items-center w-full  bg-white">
      
        <img className="w-[100px]" src={logo} />
         
            <SMedia />
          
          <div className="h-fit flex flex-col justify-center">
            <p className="w-full  text-cente  flex items-center  justify-center  "></p>
            © 2024 club génie informatique, Ensa Oujda.
            <a
              href="https://www.linkedin.com/in/hamza-khribech-ba4942212"
              target="_blank"
              rel="noreferrer"
              className="text-center w-full flex justify-center items-center text-gray-400"
            >
              By:H.K
              <i className="fa-brands fa-linkedin text-blue-400" />
            </a>

        </div>
      </div>
    </>
  );
}

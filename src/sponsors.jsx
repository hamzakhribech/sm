/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import sii from "/src/assets/sii.png";
import nvls from "/src/assets/nvls.png";
import ump from "/src/assets/ump.png";
import mia from "/src/assets/mia.png";
import { useEffect } from "react";
const Sponsors = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("div[data-visual]"),
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .closest("div[data-visual]")
              .setAttribute("data-visual", "true");
          }
        });
      });

    elements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div className="w-full block bg-transparent">
      <div className="w-full flex justify-start  bg-gradient-to-b from-slate-50 to-slate-200">
        <div className="w-full ">
          <header className="p-0 m-0">
            <h1 className="text-3xl w-full p-0 m-0 bg-orange-500 shadow-md">
              Nos Sponsors
            </h1>
          </header>
          <section className=" ">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="s col-12 md:col-span-1 delay-200" data-visual="false">
                <div className=" flex flex-wrap justify-center items-center">
                  <img className=" h-[150px]" src={sii} />
                </div>
              </div>
              <div className="s col-12 md:col-span-1 delay-300" data-visual="false">
                <div className=" flex flex-wrap justify-center items-center">
                  <img className=" w-[150px]" src={nvls} />
                </div>
              </div>
              <div className="s col-12 md:col-span-1 delay-400" data-visual="false">
                <div className="flex flex-wrap justify-center items-center">
                  <img className="w-[150px]" src={ump} />
                </div>
              </div>
              <div className="s col-12 md:col-span-1 delay-500" data-visual="false">
                <div className="flex flex-wrap justify-center items-center">
                  <img className="w-[150px]" src={mia} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Sponsors;

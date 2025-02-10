/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import g1 from "/src/assets/1.png"
import g2 from "/src/assets/2.png"
import g3 from "/src/assets/conf005.png"
import g4 from "/src/assets/conf004.png"
import { useEffect } from "react";
const Guests = ({state}) => {
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
    <div className={`${!state?'hidden':'block bg-transparent'}`}>
      <div className="flex justify-start  bg-gradient-to-b from-slate-50 to-slate-200">
      <div className=" text-center">
        <header className="p-0 m-0">
          <h1 className="text-3xl p-0 m-0 bg-green-500 shadow-md">Nos invités</h1>
        </header>
        <section className="block-body pt-5 ">

        <div className="col-12 md:col-span-1 delay-0" data-visual="true">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={g4} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Younes Ouahabi</p>
                  <p className="text-gray-600">
                    Founder & CEO de <span className="font-bold text-blue-500 tracking-wide">GBC.CO.MA (GREEN BIKE CITY)</span> & <span className="font-bold text-blue-500 tracking-wide">PHARMACITY</span> . 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-span-1 delay-0" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={g3} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Salah-Eddine Mimouni</p>
                  <p className="text-gray-600">
                    Engineer in computer science | PhD en Systèmes d'information(Payment Gateways) | Expert certifié en Marketing Digital | Expert certifié en Google Ads et Google Analytics | Senior certifié en Facebook Ads | Co-fondateur de <span className="font-bold text-blue-500 tracking-wide">Richmedia Digital Agency (Dubaï et Strasbourg)</span> | Co-fondateur de <span className="font-bold text-blue-500 tracking-wide">Massinart Africa</span> . 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-span-1 delay-0" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={g2} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Tarik Fadli</p>
                  <p className="text-gray-600">
                    Co-Fondateur & President de <span className="font-bold text-blue-500 tracking-wide">Wraqi.ma</span>, Fondateur, CEO & IT Architect de <span className="font-bold text-blue-500 tracking-wide">Algo Consulting Group</span> .
                  </p>
                </div>
              </div>
            </div>
            
        <div className="col-12 md:col-span-1 delay-100" data-visual="false">
          <div className="flex flex-wrap justify-center items-center">
              <img className="w-[200px]" src={g1} />
                <div className="flex flex-col transform -translate-y-5">
                  <p className="text-xl font-semibold pt-3 m-0">
                      Abderrahmane Hassani Idrissi
                  </p>
                  <p className="text-gray-600">
                    CEO de{" "}
                    <span className="font-bold text-blue-500 tracking-wide">Shopyan</span>{" "}
                    &{" "}
                    <span className="font-bold text-blue-500 tracking-wide">
                    Neoxecutive
                    </span>{" "}
                    - Directeur de projet.
                    </p>
                  </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
   
  );
};
export default Guests;

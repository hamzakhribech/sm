/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import g1 from "/src/assets/guest2.png"
import g2 from "/src/assets/guest1.png"
import g3 from "/src/assets/guest3.png"
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
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="col-12 md:col-span-1 delay-100" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={g1} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Mohssine MASAAF</p>
                  <p className="text-gray-600">
                    expert en développement .Net plus de 12 ans d'expérience en
                    tant que Lead Dev DotNet et Senior Consultant en Dotnet
                  </p>
                </div>
              </div>
            </div>

            
            <div className="col-12 md:col-span-1 delay-0" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={g3} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0"> Houssam SAOUDY</p>
                  <p className="text-gray-600">
                    premier Salesforce MVP en Afrique Lead Technique de la
                    pratique Salesforce chez Capgemini .
                  </p>
                </div>
              </div>
              </div>
              <div className="l col-12 md:col-span-1" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={g2} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Badr BOUSSABAT</p>
                  <p className="text-gray-600">
                    Conférencier international en Intelligence Artificielle
                    Auteur renommé de l'ouvrage "L'Intelligence Artificielle
                    dans le Monde d'Aujourd'hui" économiste et politologue
                  </p>
                </div>
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

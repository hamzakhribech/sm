/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import poo from "/src/assets/poo.png"
import dev from "/src/assets/dev.png"
import or from "/src/assets/or.png"
import userf from "/src/assets/userf.png"
import standes from "/src/assets/standes.png"

import { useEffect } from "react";
const Ateliers = ({state}) => {
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
       <div className="flex justify-start p-0 m-0  bg-gradient-to-b from-slate-50 to-slate-200">
      <div className=" text-center">
        <header className="p-0 m-0">
          <h1 className="text-3xl p-0 m-0 bg-blue-300 shadow-md">Les Ateliers</h1>
        </header>
        <section className="block-body pt-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="at col-12 md:col-span-1 delay-300" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={poo} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Atelier POO</p>
                  <p className="text-gray-600 px-2">
                      désigne une session de travail ou un ensemble d'activités pratiques visant à enseigner, explorer ou approfondir les concepts et les techniques liés à la programmation
                      orientée objet. Au cours de cet atelier, les participants peuvent se familiariser avec les principes fondamentaux de la POO tels que l'encapsulation, l'héritage, et le
                      polymorphisme, et ils ont souvent l'occasion de mettre en pratique ces concepts à travers des exercices de programmation concrets.

                  </p>
                </div>
              </div>
            </div>

            
            <div className="atb col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={dev} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3  m-0">Atelier développement web</p>
                  <p className="text-gray-600 px-3">
                      cet atelier propose une expérience immersive axée sur l'apprentissage pratique des compétences liées au développement web. Les participants explorent divers domaines
                      tels que la création de sites, le développement front-end et back-end, ainsi que l'utilisation de technologies comme HTML, CSS, JavaScript et divers frameworks. À travers des exercices,
                      projets, discussions et démonstrations, l'atelier vise à approfondir la compréhension des participants des principes et des outils essentiels du développement web.
                  </p>
                </div>
              </div>
              </div>
              <div className="at col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={or} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Atelier orientation</p>
                  <p className="text-gray-600">
                    partager avec les étudiants des informations, des conseils et des expériences pratiques sur la filière afin de les aider à prendre des décisions éclairées concernant leur orientation académique ou professionnelle. L'objectif est d'aider les étudiants  à mieux comprendre la filière,leur intérêts, leur compétences, et leur aspirations, tout en les familiarisant avec les opportunités disponibles.

                  </p>
                </div>
              </div>
              </div>
               <div className="atb col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={userf} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Atelier user friendliness</p>
                  <p className="text-gray-600">
                     L'objectif principal de cet atelier est généralement d'identifier les points forts et les faiblesses d'une interface ou d'un produit du point de vue de l'utilisateur. Les participants peuvent discuter des aspects tels que la navigation, la clarté des informations, la facilité d'utilisation des fonctionnalités, et d'autres éléments qui contribuent à une expérience positive. 
                  </p>
                </div>
              </div>
              </div>
               <div className="at col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={standes} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Stands entreprises</p>
                  <p className="text-gray-600">
                   vise à créer une visibilité, à établir des relations avec les étudiants et entreprises(connaître entreprises, avoir des contact,opportunités de stages...) et à promouvoir les produits ou services de l'entreprise lors d'événements 

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
export default Ateliers;

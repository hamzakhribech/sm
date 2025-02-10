/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
// import poo from "/src/assets/poo.png"
import one from "/src/assets/or.png"
import three from "/src/assets/IconMMC/3.png"
import seven from "/src/assets/IconMMC/7.png"
import eight from "/src/assets/IconMMC/8.png"
import nine from "/src/assets/IconMMC/9.png"
import drone from "/src/assets/IconMMC/ic_drone.png"
import game from "/src/assets/IconMMC/ic_game2.png"



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
          <h1 className="text-3xl p-0 m-0 bg-blue-300 shadow-md">Ateliers & Workshops</h1>
        </header>
        <section className="block-body pt-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="at col-12 md:col-span-1 delay-300" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={nine} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Neural Networks</p>
                  <p className="text-gray-600 px-2">
                      {/* désigne une session de travail ou un ensemble d'activités pratiques visant à enseigner, explorer ou approfondir les concepts et les techniques liés à la programmation
                      orientée objet. Au cours de cet atelier, les participants peuvent se familiariser avec les principes fondamentaux de la POO tels que l'encapsulation, l'héritage, et le
                      polymorphisme, et ils ont souvent l'occasion de mettre en pratique ces concepts à travers des exercices de programmation concrets. */}
                      Cet atelier vise à démystifier les réseaux de neurones, une composante cruciale de l'intelligence artificielle. À l'aide d'un modèle visuel, les participants découvriront comment ces réseaux apprennent et prennent des décisions. L'atelier abordera également des exemples concrets d'applications des réseaux de neurones dans divers domaines.
                  </p>
                </div>
              </div>
            </div>

            
            <div className="atb col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={three} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3  m-0">Keys To Modern Software Development</p>
                  <p className="text-gray-600 px-3">
                      {/* cet atelier propose une expérience immersive axée sur l'apprentissage pratique des compétences liées au développement web. Les participants explorent divers domaines
                      tels que la création de sites, le développement front-end et back-end, ainsi que l'utilisation de technologies comme HTML, CSS, JavaScript et divers frameworks. À travers des exercices,
                      projets, discussions et démonstrations, l'atelier vise à approfondir la compréhension des participants des principes et des outils essentiels du développement web. */}
                      Cet atelier présente quatre concepts fondamentaux du développement logiciel : l'expérience utilisateur (UX), la méthodologie agile, le contrôle de version (version control) et les tests/assurance qualité. À travers une interface interactive, les participants peuvent choisir l'un de ces concepts pour en apprendre davantage et découvrir comment il contribue à la création de logiciels de qualité.                  </p>
                </div>
              </div>
              </div>
              <div className="at col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={eight} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">AI For Developers</p>
                  <p className="text-gray-600">
                    {/* partager avec les étudiants des informations, des conseils et des expériences pratiques sur la filière afin de les aider à prendre des décisions éclairées concernant leur orientation académique ou professionnelle. L'objectif est d'aider les étudiants  à mieux comprendre la filière,leur intérêts, leur compétences, et leur aspirations, tout en les familiarisant avec les opportunités disponibles. */}
                    Cet atelier explore les avantages de l'intelligence artificielle pour les développeurs. Il montrera comment l'IA peut améliorer la qualité du code et faciliter la collaboration. L'atelier soulignera que l'IA est un outil au service des développeurs, et non une menace pour leur emploi.                  </p>
                </div>
              </div>
              </div>
               <div className="atb col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={seven} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Software Development Lifecycle</p>
                  <p className="text-gray-600">
                     {/* L'objectif principal de cet atelier est généralement d'identifier les points forts et les faiblesses d'une interface ou d'un produit du point de vue de l'utilisateur. Les participants peuvent discuter des aspects tels que la navigation, la clarté des informations, la facilité d'utilisation des fonctionnalités, et d'autres éléments qui contribuent à une expérience positive.  */}
                     Cet atelier présente les différentes étapes du processus de développement logiciel, de la conception à la maintenance. À travers des exemples concrets (applications web et mobiles), les participants découvriront comment chaque étape contribue à la création de logiciels de qualité. L'atelier abordera également les différents modèles de cycle de vie et les défis du développement logiciel.                  </p>
                </div>
              </div>
              </div>
               <div className="at col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={game} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Snake Game</p>
                  <p className="text-gray-600">
                     {/* L'objectif principal de cet atelier est généralement d'identifier les points forts et les faiblesses d'une interface ou d'un produit du point de vue de l'utilisateur. Les participants peuvent discuter des aspects tels que la navigation, la clarté des informations, la facilité d'utilisation des fonctionnalités, et d'autres éléments qui contribuent à une expérience positive.  */}
                     Code Your Way To Victory! : <br></br>
                     Cet atelier plonge les participants dans le développement d’un Snake Game en Java en mettant l’accent sur la programmation orientée objet (POO). Ils apprendront à structurer leur code en définissant des classes pour le serpent, la nourriture et le plateau de jeu, tout en appliquant des principes clés tels que l'encapsulation, l'héritage et le polymorphisme. À travers une interface interactive, ils pourront explorer chaque concept et comprendre comment la POO permet de concevoir un code modulaire, réutilisable et facile à maintenir.</p>                </div>
              </div>
              </div>
               <div className="atb col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={drone} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Drones Workshop</p>
                  <p className="text-gray-600">
                     {/* L'objectif principal de cet atelier est généralement d'identifier les points forts et les faiblesses d'une interface ou d'un produit du point de vue de l'utilisateur. Les participants peuvent discuter des aspects tels que la navigation, la clarté des informations, la facilité d'utilisation des fonctionnalités, et d'autres éléments qui contribuent à une expérience positive.  */}
                     Cet atelier explore quatre aspects essentiels de la technologie des drones : l'aérodynamique et la mécanique de vol, la programmation embarquée, la navigation et les capteurs, ainsi que les applications industrielles. À travers une interface interactive, les participants peuvent choisir l'un de ces domaines pour approfondir leurs connaissances et comprendre comment ces technologies façonnent l'avenir des drones dans divers secteurs.</p>                </div>
              </div>
              </div>
              <div className="at col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={one} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Ask A Student: Navigating The Engineering World</p>
                  <p className="text-gray-600">
                     {/* L'objectif principal de cet atelier est généralement d'identifier les points forts et les faiblesses d'une interface ou d'un produit du point de vue de l'utilisateur. Les participants peuvent discuter des aspects tels que la navigation, la clarté des informations, la facilité d'utilisation des fonctionnalités, et d'autres éléments qui contribuent à une expérience positive.  */}
                     Parlons-en ! : <br></br>
                     Venez échanger avec des étudiants en génie informatique. Posez toutes vos questions sur les études, les compétences recherchées, les projets étudiants, le quotidien d'un ingénieur en informatique et bien plus encore. </p>                </div>
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

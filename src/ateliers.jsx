/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import poo from "/src/assets/poo.png"
import userf from "/src/assets/userf.png"
import five from "/src/assets/IconMMC/5.png"
import six from "/src/assets/IconMMC/6.png"
import eight from "/src/assets/IconMMC/8.png"
import nine from "/src/assets/IconMMC/9.png"

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
          <h1 className="text-3xl p-0 m-0 bg-blue-300 shadow-md">Microsoft Technologies</h1>
        </header>
        <section className="block-body pt-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="at col-12 md:col-span-1 delay-300" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={poo} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">.Net</p>
                  <p className="text-gray-600 px-2">
                      {/* désigne une session de travail ou un ensemble d'activités pratiques visant à enseigner, explorer ou approfondir les concepts et les techniques liés à la programmation
                      orientée objet. Au cours de cet atelier, les participants peuvent se familiariser avec les principes fondamentaux de la POO tels que l'encapsulation, l'héritage, et le
                      polymorphisme, et ils ont souvent l'occasion de mettre en pratique ces concepts à travers des exercices de programmation concrets. */}
                      .NET est un framework de Microsoft qui permet de créer des applications web, de bureau et mobiles avec une grande flexibilité. Il supporte plusieurs langages, comme C# et F#, et grâce à .NET Core, il est maintenant multiplateforme, fonctionnant sur Windows, macOS et Linux.
                  </p>
                </div>
              </div>
            </div>

            
            <div className="atb col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={six} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3  m-0">Microsoft Cloud Azure</p>
                  <p className="text-gray-600 px-3">
                      {/* cet atelier propose une expérience immersive axée sur l'apprentissage pratique des compétences liées au développement web. Les participants explorent divers domaines
                      tels que la création de sites, le développement front-end et back-end, ainsi que l'utilisation de technologies comme HTML, CSS, JavaScript et divers frameworks. À travers des exercices,
                      projets, discussions et démonstrations, l'atelier vise à approfondir la compréhension des participants des principes et des outils essentiels du développement web. */}
                      Microsoft Azure est une plateforme cloud complète qui propose divers services pour créer, déployer et gérer des applications via des centres de données globaux. Elle permet aux entreprises de bénéficier d'infrastructures flexibles pour le stockage, l'analyse de données, le développement d'applications et bien plus, avec une forte intégration d'outils de sécurité et de machine learning.
                  </p>
                </div>
              </div>
              </div>
              <div className="at col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={nine} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Github Copilot</p>
                  <p className="text-gray-600">
                    {/* partager avec les étudiants des informations, des conseils et des expériences pratiques sur la filière afin de les aider à prendre des décisions éclairées concernant leur orientation académique ou professionnelle. L'objectif est d'aider les étudiants  à mieux comprendre la filière,leur intérêts, leur compétences, et leur aspirations, tout en les familiarisant avec les opportunités disponibles. */}
                    GitHub Copilot est un outil d'intelligence artificielle développé par GitHub et OpenAI pour aider les développeurs à écrire du code plus efficacement. Intégré directement dans des éditeurs comme Visual Studio Code, Copilot suggère des lignes de code, des fonctions complètes, et même des blocs entiers basés sur le contexte de ce que l'utilisateur est en train de coder. Il utilise des modèles d'apprentissage automatique pour anticiper les besoins du développeur et offrir des solutions, accélérant ainsi le processus de développement et facilitant l’apprentissage de nouvelles syntaxes ou technologies.
                  </p>
                </div>
              </div>
              </div>
               <div className="atb col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={eight} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">ML.Net</p>
                  <p className="text-gray-600">
                     {/* L'objectif principal de cet atelier est généralement d'identifier les points forts et les faiblesses d'une interface ou d'un produit du point de vue de l'utilisateur. Les participants peuvent discuter des aspects tels que la navigation, la clarté des informations, la facilité d'utilisation des fonctionnalités, et d'autres éléments qui contribuent à une expérience positive.  */}
                     ML.NET est une bibliothèque open-source de Microsoft qui permet aux développeurs .NET d’intégrer des modèles de machine learning dans leurs applications sans nécessiter de connaissances approfondies en data science. Elle prend en charge des tâches variées, telles que la classification, la régression, la détection d'anomalies et le clustering, et permet d'entraîner des modèles directement en C#. ML.NET propose également des outils comme Model Builder, une interface graphique dans Visual Studio, qui simplifie encore le processus de création de modèles prédictifs pour les développeurs.
                  </p>
                </div>
              </div>
              </div>
              <div className="at col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={five} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Azure Devops</p>
                  <p className="text-gray-600">
                   {/* vise à créer une visibilité, à établir des relations avec les étudiants et entreprises(connaître entreprises, avoir des contact,opportunités de stages...) et à promouvoir les produits ou services de l'entreprise lors d'événements  */}
                   Azure DevOps est une plateforme de services cloud fournie par Microsoft pour le développement, l'intégration, et le déploiement continus des applications. Elle propose des outils de gestion de projets, de suivi des tâches, de contrôle de versions avec Git, et de pipelines CI/CD pour automatiser les tests et les déploiements. Azure DevOps aide les équipes à collaborer efficacement tout en optimisant le cycle de vie de développement logiciel.
                  </p>
                </div>
              </div>
              </div>
              <div className="atb col-12 md:col-span-1 delay-400" data-visual="false">
              <div className="flex flex-wrap justify-center items-center">
                <img className="w-[200px]" src={userf} />
                <div className="flex flex-col transform -translate-y-5 ">
                  <p className="text-xl font-semibold pt-3 m-0">Power BI</p>
                  <p className="text-gray-600">
                   {/* vise à créer une visibilité, à établir des relations avec les étudiants et entreprises(connaître entreprises, avoir des contact,opportunités de stages...) et à promouvoir les produits ou services de l'entreprise lors d'événements  */}
                   Power BI est un outil de visualisation de données et de business intelligence permettant de transformer des données brutes en insights clairs et exploitables. Il offre des fonctionnalités de connexion aux sources de données, de création de rapports interactifs, et de partage de tableaux de bord. Power BI aide les entreprises à prendre des décisions basées sur les données, en rendant l'analyse accessible à tous les niveaux de l'organisation.
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

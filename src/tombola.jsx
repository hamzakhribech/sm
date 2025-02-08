/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import mgp from "/src/assets/megaphone.png"
export default function Tombola() {
  return (
    <>
      <div className="  flex flex-col justify-start  bg-gradient-to-b from-slate-50 to-slate-200">
       
            <header className="p-0 m-0">
          <h1 className="text-3xl p-0 m-0 w-full text-white bg-[#000000] shadow-md">🚀Q&A🚀</h1>
              </header>
              <div className="w-full flex flex-col items-center ">
                  <img className="w-[100px]" src={mgp} />
          <h1 className="text-xl text-red-500 text-center w-fit p-0 m-0  ">
            Ne ratez pas cette occasion
                  </h1>
                  <p className="px-1 text-center">
                  Lors de <span className="font-bold text-blue-500 tracking-wide">la 4ᵉ édition de la Journée Informatique</span>, une séance de <span className="font-bold text-blue-500 tracking-wide">questions-réponses (Q&A)</span> sera organisée en fin de journée autour du thème <span className="font-bold text-blue-500 tracking-wide">"Digitalisation au Maroc : Tremplin pour l’Entrepreneuriat et l’Innovation ?"</span>. Cet échange sera une opportunité unique pour explorer <span className="font-bold text-blue-500 tracking-wide">l'impact de la transformation numérique sur le développement des startups et des entrprises IT, la compétitivité de ces entreprises et l’innovation technologique au Maroc</span>. Vous aurez l’occasion d’interagir avec des experts, de poser vos questions et d’obtenir des conseils précieux sur les opportunités et les défis de la digitalisation. Nous vous invitons à soumettre vos questions en amont afin que nous puissions y répondre lors de la session. Voici le formulaire pour proposer vos questions :
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXvKGc2ojWTquBm-t-6XNvcfJV1EpeYO0H3mIA2QoU_Q17Ew/viewform?usp=dialog" target="_blank" className="font-bold underline text-blue-800 hover:text-blue-500"><i className="fa-solid fa-pen-to-square text-white pr-1 group-hover:text-red-300"></i><p className=" ">Ask Your Question Now</p></a>.
                  </p>

                   {/*
                   <br/>   Pour plus de détails, voir cette 
                      <a href="https://www.instagram.com/reel/C358x0moCka/?igsh=NjdveHkzOWhoMHlz" target="_blank" className=" font-bold underline text-blue-800 hover:text-blue-500"> vidéo <i className="fa-solid fa-link"></i></a>
                  </p>
                  <a href="https://trailblazercommunitygroups.com/events/details/salesforce-salesforce-developer-group-casablanca-morocco-presents-salesforce-workshop-a-oujda/" target="_blank" className="flex items-center justify-center bg-red-500 px-3 py-1 rounded text-white hover:bg-red-700 mt-2 group" >
                      <i className="fa-solid fa-pen-to-square text-white pr-1 group-hover:text-red-300"></i>
                     <p className=" ">Register Now</p> </a>
                   */}
        </div>
      </div>
    </>
  );
}

/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import mgp from "/src/assets/megaphone.png"
export default function Tombola() {
  return (
    <>
      <div className="  flex flex-col justify-start  bg-gradient-to-b from-slate-50 to-slate-200">
       
            <header className="p-0 m-0">
          <h1 className="text-3xl p-0 m-0 w-full text-white bg-[#000000] shadow-md">🚀Tombola!🚀</h1>
              </header>
              <div className="w-full flex flex-col items-center ">
                  <img className="w-[100px]" src={mgp} />
          <h1 className="text-xl text-red-500 text-center w-fit p-0 m-0  ">
            Ne ratez pas cette occasion
                  </h1>
                  <p className="px-1 text-center">
                     Notre conférencier, Saoudi Houssam, a un cadeau spécial pour vous ! 🎉 Rejoignez-nous pour une incroyable tombola où 10 heureux gagnants seront choisis. 🏆 Et l'excitation ne s'arrête pas là : 3 personnes chanceuses remporteront des billets VIP pour l'événement exclusif North Africa Dreamin ! Ne manquez pas votre chance de faire partie du frisson ! » 
Remplissez le formulaire ci dessous pour valider votre participation et courer la chance pour remporter des prix exceptionnels qui rendent cette journée encore plus mémorable
                   <br/>   Pour plus de détails, voir cette 
                      <a href="https://www.instagram.com/reel/C358x0moCka/?igsh=NjdveHkzOWhoMHlz" target="_blank" className=" font-bold underline text-blue-800 hover:text-blue-500"> vidéo <i className="fa-solid fa-link"></i></a>
                  </p>
                  <a href="https://trailblazercommunitygroups.com/events/details/salesforce-salesforce-developer-group-casablanca-morocco-presents-salesforce-workshop-a-oujda/" target="_blank" className="flex items-center justify-center bg-red-500 px-3 py-1 rounded text-white hover:bg-red-700 mt-2 group" >
                      <i className="fa-solid fa-pen-to-square text-white pr-1 group-hover:text-red-300"></i>
                     <p className=" ">Register Now</p> </a>
        </div>
      </div>
    </>
  );
}

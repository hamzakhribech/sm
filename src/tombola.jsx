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
                  <p className="px-5 text-center">
                      La participation est simple et gratuite. Il vous suffit de remplir le formulaire d'inscription ci-dessous pour valider votre participation à la tombola. En tant que participant, vous courez la chance de remporter des prix exceptionnels qui rendront cette journée encore plus mémorable.
                      Pour plus de détails, veuillez consulter cette 
                      <a href="https://www.instagram.com/reel/C358x0moCka/?igsh=NjdveHkzOWhoMHlz" target="_blank" className="text-gray-800 font-bold underline hover:text-blue-500"><i className="fa-solid fa-link"></i> vidéo</a>
                  </p>
                  <a href="https://trailblazercommunitygroups.com/events/details/salesforce-salesforce-developer-group-casablanca-morocco-presents-salesforce-workshop-a-oujda/" target="_blank" className="flex items-center justify-center bg-red-500 px-3 py-1 rounded text-white hover:bg-red-700 mt-2 group" >
                      <i className="fa-solid fa-pen-to-square text-white pr-1 group-hover:text-red-300"></i>
                     <p className=" ">Register Now</p> </a>
        </div>
      </div>
    </>
  );
}

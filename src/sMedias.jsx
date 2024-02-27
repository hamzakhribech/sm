import "/src/Globalcss.css";

const SMedia = ({state}) => {
    return (
        <div className="w-fit pl-2 flex justify-center items-center">
       
              <a href="https://www.facebook.com/ClubGIENSAO.2021?mibextid=ZbWKwL" target="_blank"rel="noreferrer"
                className="p-2 px-3 group bg-white hover:shadow  text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
          <i className={`${state&& 'a1'} fab fa-facebook-square group-hover:text-lg group-hover:text-blue-500 group-hover:-translate-y-1 transition duration-200`}></i>
              </a>
              <a href="https://www.instagram.com/club_gi_ensao?igsh=bzg0anZpazB2OTl4 " target="_blank"rel="noreferrer"
                className="p-2 px-3 group bg-white hover:shadow text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                <i className={`${state&& 'a2'} fab fa-instagram text-black group-hover:text-lg group-hover:text-pink-600 group-hover:-translate-y-1 transition duration-200`}></i>
              </a>
        <a
          href="https://www.linkedin.com/in/club-g%C3%A9nie-informatique-285a652a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank"rel="noreferrer"
                className="p-2 px-3 group bg-white hover:shadow text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
          <i className={`${state&& 'a3'} fab fa-linkedin group-hover:text-lg group-hover:text-blue-400 group-hover:-translate-y-1 transition duration-200`}></i>
              </a>
                <a
          href="mailto:genieinformatique.club1@gmail.com" target="_blank" rel="noreferrer"
          className={`py-[8px] px-[11px] group bg-white hover:shadow text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2`}>
          <i className={`${state && 'a4'} p-0 m-0  fa-solid fa-envelope group-hover:text-lg group-hover:text-red-600 group-hover:-translate-y-1 transition duration-200`}></i>
              </a>
           
        </div>
    )
}
export default SMedia;
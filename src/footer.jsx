import SMedia from "./sMedias";
import logo from "/src/assets/logo.png";

const Footer = ({state}) => {
    return (<div className=" h-screen flex flex-col justify-end">
    <div className="p-3 pb-10 flex flex-col gap-1 justify-center items-center w-full  bg-white">
      
        <img className="w-[100px]" src={logo} />
         
            <SMedia state={state}/>
          
          <div className="h-fit flex flex-col justify-center">
            <p className="w-full  text-cente  flex items-center  justify-center  "></p>
            © 2024 Club génie informatique, Ensa Oujda.
            <a
              href="https://www.linkedin.com/in/hamza-khribech-ba4942212"
              target="_blank"
              rel="noreferrer"
              className="pb-1 text-center w-full flex justify-center items-center text-blue-400"
            >
              <pre className="text-gray-700">Created By </pre> Hamza Khribech
            <i className="pl-1 fa-brands fa-linkedin text-blue-400" />
            <i className=" pl-1 text-xs fa-solid fa-link text-gray-400"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/abderrahmane-salmi-a1b329238"
              target="_blank"
              rel="noreferrer"
              className="pb-1 text-center w-full flex justify-center items-center text-blue-400"
            >
              <pre className="text-gray-700">Edited By </pre> Abderrahmane Salmi
            <i className="pl-1 fa-brands fa-linkedin text-blue-400" />
            <i className=" pl-1 text-xs fa-solid fa-link text-gray-400"></i>
            </a>

        </div>
      </div>
    </div>)
 }
export default Footer;

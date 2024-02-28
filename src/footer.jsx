import SMedia from "./sMedias";
import logo from "/src/assets/logo.png";

const Footer = ({state}) => {
    return (<div className=" h-screen flex flex-col justify-end">
    <div className="p-3 flex flex-col gap-1 justify-center items-center w-full  bg-white">
      
        <img className="w-[100px]" src={logo} />
         
            <SMedia state={state}/>
          
          <div className="h-fit flex flex-col justify-center">
            <p className="w-full  text-cente  flex items-center  justify-center  "></p>
            © 2024 club ginie informatique, Ensa Oujda.
            <a
              href="https://www.linkedin.com/in/hamza-khribech-ba4942212"
              target="_blank"
              rel="noreferrer"
              className="text-center w-full flex justify-center items-center text-gray-400"
            >
              By: <u>Hamza Khribech</u> 
              <i className="fa-brands fa-linkedin text-blue-400" />
            </a>

        </div>
      </div>
    </div>)
 }
export default Footer;
